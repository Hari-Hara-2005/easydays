import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Navbar from "./Navbar";
export default function PeriodTracker() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bottomcurrentMonth, setbottomCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [periodLength, setPeriodLength] = useState(1);
  const [cycleLength, setCycleLength] = useState(25);
  const [startDate, setStartDate] = useState(new Date());
  const [periodData, setPeriodData] = useState({ dates: [] });
  const [showPrediction, setShowPrediction] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  useEffect(() => {
    if (startDate) {
      const { dates } = calculateDates();
      setPeriodData({ dates });
    }
  }, [startDate, periodLength, cycleLength]);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1;
  };

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const days = [];
    const previousMonthDays = getDaysInMonth(year, month - 1);

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: previousMonthDays - i,
        date: new Date(year, month - 1, previousMonthDays - i),
        isCurrentMonth: false,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        date: new Date(year, month, i),
        isCurrentMonth: true,
      });
    }

    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
      });
    }

    return days;
  };

  const incrementValue = (setter, value, min, max) => {
    if (value < max) {
      setter(value + 1);
    }
  };

  const decrementValue = (setter, value, min) => {
    if (value > min) {
      setter(value - 1);
    }
  };

  const navigateMonth = (direction) => {
    setCurrentMonth((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const bottomnavigateMonth = (direction) => {
    setbottomCurrentMonth((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
    setStartDate(date);
  };

  const formatDate = (date) => {
    const weekday = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(date);
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      date
    );
    return { weekday, month };
  };

  const isDateDisabled = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date > today;
  };

  const isToday = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date.toDateString() === today.toDateString();
  };

  const calculateDates = () => {
    const dates = [];
    let currentDate = new Date(startDate);

    while (currentDate.getFullYear() === startDate.getFullYear()) {
      for (let j = 0; j < periodLength; j++) {
        dates.push(new Date(currentDate.getTime() + j * 24 * 60 * 60 * 1000));
      }
      currentDate = new Date(
        currentDate.getTime() + cycleLength * 24 * 60 * 60 * 1000
      );
    }
    return { dates };
  };

  const handleTrackNow = () => {
    const { dates } = calculateDates();
    setPeriodData({ dates });
    setShowPrediction(true);
  };

  const calendarRef = useRef(null);

  const downloadCalendarPdf = async () => {
    const calendarElement = calendarRef.current;
    if (!calendarElement) return;

    try {
      const canvas = await html2canvas(calendarElement);
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a1");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pageWidth - 10;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const x = (pageWidth - imgWidth) / 5;
      const y = (pageHeight - imgHeight) / 5;

      pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      pdf.save("periodCalendar.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <>
      <div className="mx-auto mt-10 p-6 space-y-8">
        <Navbar />
        <div>
          <div className="flex justify-evenly">
            <div>
              <h2 className="text-[#0066FF] font-medium text-lg">
                1. WHEN DID YOUR LAST PERIOD START?
              </h2>
              <Card
                className="px-8 py-5 shadow-sm w-fit mt-5"
                onClick={() => setShowCalendar(!showCalendar)}
              >
                <div className="flex items-center gap-8">
                  <Calendar className="w-8 h-8 text-[#7D328D]" />
                  <div>
                    <span className="text-4xl font-bold">
                      {selectedDate.getDate()}
                    </span>
                  </div>
                  <div className="text-[#0066FF]">
                    <div>{formatDate(selectedDate).weekday}</div>
                    <div>{formatDate(selectedDate).month}</div>
                  </div>
                </div>
              </Card>
              {showCalendar && (
                <div className="border rounded-lg p-4 mt-4 absolute bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      className="p-2 hover:bg-gray-100 rounded-full"
                      onClick={() => navigateMonth("prev")}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2">
                      <span>{months[currentMonth.getMonth()]}</span>
                      <span>{currentMonth.getFullYear()}</span>
                    </div>
                    <button
                      className="p-2 hover:bg-gray-100 rounded-full"
                      onClick={() => navigateMonth("next")}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {days.map((day) => (
                      <div
                        key={day}
                        className="text-center text-sm py-1 text-[#0066FF]"
                      >
                        {day}
                      </div>
                    ))}

                    {generateCalendarDays().map((date, index) => (
                      <button
                        key={index}
                        onClick={() => handleDateSelect(date.date)}
                        disabled={
                          isDateDisabled(date.date) || !date.isCurrentMonth
                        }
                        className={`p-2 text-center rounded-full transition-colors
      ${date.isCurrentMonth ? "text-gray-900" : "text-gray-400"} 
      ${
        selectedDate && date.date.toDateString() === selectedDate.toDateString()
          ? "bg-[#7D328D] text-white"
          : "hover:bg-gray-100"
      }
      ${isDateDisabled(date.date) ? "opacity-50 cursor-not-allowed" : ""}
      ${isToday(date.date) ? "underline" : ""}
    `}
                      >
                        {date.day}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div>
              <h2 className="text-[#0066FF] font-medium text-lg">
                2. HOW LONG DOES A PERIOD LAST?
              </h2>
              <div className="flex gap-4 items-center mt-10">
                <Button
                  className="w-10 h-10 font-bold text-3xl bg-[#7D328D] hover:bg-[#9D52AD] rounded-full"
                  onClick={() =>
                    decrementValue(setPeriodLength, periodLength, 1)
                  }
                >
                  -
                </Button>
                <span className="text-xl text-gray-800">
                  {periodLength} days
                </span>
                <Button
                  className="w-10 h-10 font-bold text-xl bg-[#7D328D] hover:bg-[#9D52AD] rounded-full"
                  onClick={() =>
                    incrementValue(setPeriodLength, periodLength, 1, 7)
                  }
                >
                  +
                </Button>
              </div>
            </div>
            <div>
              <h2 className="text-[#0066FF] font-medium text-lg">
                3. HOW LONG IS YOUR CYCLE?
              </h2>
              <div className="flex gap-4 items-center mt-10">
                <Button
                  className="w-10 h-10 font-bold text-3xl bg-[#7D328D] hover:bg-[#9D52AD] rounded-full"
                  onClick={() =>
                    decrementValue(setCycleLength, cycleLength, 21)
                  }
                  disabled={cycleLength <= 21}
                >
                  -
                </Button>
                <span className="text-xl text-gray-800">
                  {cycleLength} days
                </span>
                <Button
                  className="w-10 h-10 font-bold text-xl bg-[#7D328D] hover:bg-[#9D52AD] rounded-full"
                  onClick={() =>
                    incrementValue(setCycleLength, cycleLength, 21, 35)
                  }
                >
                  +
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-10">
            <Button
              className=" bg-[#7D328D]  hover:bg-[#9D52AD] text-white border-0 px-10 py-5"
              onClick={handleTrackNow}
            >
              Track Now
            </Button>
          </div>
        </div>
        {showPrediction && (
          <div className="mt-8 ">
            <div ref={calendarRef}>
              <div className="flex justify-center">
                <div className="flex gap-4 mt-4">
                  <button
                    className={`p-2 rounded-full transition-colors ${
                      bottomcurrentMonth.getMonth() === 0
                        ? "cursor-not-allowed text-gray-400"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() =>
                      bottomcurrentMonth.getMonth() !== 0 &&
                      bottomnavigateMonth("prev")
                    }
                    disabled={bottomcurrentMonth.getMonth() === 0}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  {[...Array(3)].map((_, calendarIndex) => {
                    const month = new Date(
                      bottomcurrentMonth.getFullYear(),
                      bottomcurrentMonth.getMonth() + calendarIndex
                    );
                    return (
                      <div
                        key={calendarIndex}
                        className="border rounded-lg p-4 flex-1"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span>{months[month.getMonth()]}</span>
                            <span>{month.getFullYear()}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-7 gap-1">
                          {/* Days of the week */}
                          {days.map((day) => (
                            <div
                              key={day}
                              className="text-center text-sm py-1 text-[#0066FF]"
                            >
                              {day}
                            </div>
                          ))}

                          {/* Dates of the month */}
                          {generateCalendarDays(month).map((date, index) => {
                            // Filter periodData for the current month and year
                            const isPredictedPeriodDay = periodData.dates.some(
                              (predictedDate) =>
                                predictedDate.getFullYear() ===
                                  month.getFullYear() &&
                                predictedDate.getMonth() === month.getMonth() &&
                                predictedDate.getDate() === date.date.getDate()
                            );

                            // Check if the date is disabled
                            const isDisabledDate = !date.isCurrentMonth;

                            // Determine the button styles
                            const buttonStyles = [
                              "p-2 text-center rounded-full transition-colors",
                              isDisabledDate
                                ? "text-gray-400"
                                : "text-gray-900",
                              isPredictedPeriodDay && !isDisabledDate
                                ? "bg-cyan-400 text-white"
                                : "hover:bg-gray-100",
                            ].join(" ");

                            return (
                              <button
                                key={index}
                                disabled={isDisabledDate}
                                className={buttonStyles}
                              >
                                {date.day}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                  <button
                    className={`p-2 rounded-full transition-colors ${
                      bottomcurrentMonth.getMonth() === 9
                        ? "cursor-not-allowed text-gray-400"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() =>
                      bottomcurrentMonth.getMonth() !== 9 &&
                      bottomnavigateMonth("next")
                    }
                    disabled={bottomcurrentMonth.getMonth() === 9}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2 px-3 py-8 rounded-lg">
                <Badge
                  variant="default"
                  className="h-3 w-3 rounded-full p-0 bg-[#22D3EE] hover:bg-[#22D3EE]"
                />
                <span className="text-md font-medium">Period days</span>
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                className="bg-[#7D328D] hover:bg-[#9D52AD]"
                onClick={downloadCalendarPdf}
              >
                Download Calendar as PDF
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
