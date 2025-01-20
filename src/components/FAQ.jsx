import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqs = [
    {
      que: "What is Puberty?",
      ans: "Puberty is a natural phase of growth that everyone experiences as they transition into adulthood, typically between the ages of 10 and 14. For girls, this involves physical changes such as the development of breasts, a more defined waistline, and the onset of the menstrual cycle, also known as your period.",
    },
    {
      que: "What is a Period?",
      ans: "A period is a part of the menstrual cycle, which typically occurs every month. Here’s how it works: \n1. Preparation: Your body builds a blood-rich uterine lining to prepare for a potential pregnancy. \n2. Ovulation: An egg is released from your ovaries. \n3. Menstruation: If pregnancy doesn’t occur, the uterine lining is shed as blood and tissue, which is your period. \n4. Restart: After your period, the cycle begins again.",
    },
    {
      que: "When will my period start?",
      ans: "Everybody is different, but periods usually start somewhere between the ages of 10-14, and about 50% of girls will start their period by the age of 12. Don’t worry if you start your period earlier or later than your friends—it’s totally normal!",
    },
    {
      que: "How long will my periods last?",
      ans: "Most girls and women find that periods last for about 5-7 days, and that they get their period approximately once a month. After a couple of years of having your period, your body will settle into a pattern that’s unique to you, and you'll be familiar with how many days of bleeding to expect. If you notice that you don’t get your period very often, or if it lasts for longer than 7 days, it might be a good idea to check in with your doctor.",
    },
    {
      que: "How can I get rid of cramps and pain during my period?",
      ans: "Here are some effective ways to relieve period pain: \n1. Use a warm bath or hot water bottle to ease muscle tension and discomfort. \n2. Stay active and eat a balanced diet to reduce bloating and improve overall well-being. \n3. If the pain is severe or disrupts your daily life, consult a doctor or gynecologist for additional treatment options.",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4 p-4 lg:px-28">
    <Accordion type="single" collapsible className="space-y-5">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="shadow-md bg-white rounded-lg"
        >
          <AccordionTrigger
            className="flex justify-between items-center p-4 rounded-t-lg no-underline"
            style={{ textDecoration: "none" }} // Ensure no underline
          >
            <span className="text-lg font-medium">{faq.que}</span>
          </AccordionTrigger>
          <AccordionContent className="p-4 bg-[#F8F8F8] rounded-b-lg text-base">
            {faq.ans}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
  
  );
}
