import { Route, Routes } from "react-router-dom";
import HeroSection from "./Pages/HeroSection";
import PeriodTracker from "./components/Calculater";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/PeriodTracker" element={<PeriodTracker />} />
    </Routes>
  );
}

export default App;
