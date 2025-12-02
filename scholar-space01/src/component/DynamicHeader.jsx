// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "../component/ui/button";
import { Bell, ArrowRight } from "lucide-react";

const scrollingText1 =
  "New 🎓 International Summer School: Quantum Computing for Everyone - International Summer School 2025 📅 August 11-17, 2025 | 📍 Samarkand, Uzbekistan 3 University collaboration.";
const scrollingText2 =
  "New 📊 International Conference: 5th International Conference on Trends in Electronics and Health Information (TEHI 2025) 📅 November 7-8, 2025 | 📍 Samarkand, Uzbekistan Springer Publication.";

const buttonTexts = ["Register Now", "View Details"];

export const DynamicHeader = () => {
  const [btnIndex, setBtnIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBtnIndex((prev) => (prev + 1) % buttonTexts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 w-full bg-linear-to-r from-blue-600 via-purple-600 to-blue-700 text-white shadow-lg overflow-hidden flex flex-col md:flex-row h-auto md:h-28 border-b border-white/10 z-50">
      {/* Left Icon/Branding Area */}
      <div className="hidden md:flex flex-col items-center justify-center px-4 bg-black/10 backdrop-blur-sm border-r border-white/10 z-10 min-w-20">
        <div className="bg-white/20 p-2 rounded-full mb-1">
          <Bell className="w-5 h-5 text-white animate-pulse" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">
          Updates
        </span>
      </div>

      {/* Scrolling Text Container */}
      <div className="flex-1 flex flex-col justify-center h-24 md:h-full overflow-hidden relative bg-white/5">
        <div className="md:hidden absolute top-1 left-2 z-20 bg-red-500/90 text-white text-[9px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider shadow-sm">
          Latest
        </div>

        {/* Row 1 */}
        <div className="relative flex-1 flex items-center overflow-hidden border-b border-white/10 bg-linear-to-r from-transparent via-white/5 to-transparent">
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-linear-to-r from-blue-600/90 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-linear-to-l from-purple-600/90 to-transparent z-10"></div>
          <Marquee text={scrollingText1} speed={40} />
        </div>
        {/* Row 2 */}
        <div className="relative flex-1 flex items-center overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-linear-to-r from-blue-600/90 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-linear-to-l from-purple-600/90 to-transparent z-10"></div>
          <Marquee text={scrollingText2} speed={40} />
        </div>
      </div>

      {/* Right Side Button Area */}
      <div className="px-4 py-3 md:py-0 md:px-6 h-auto md:h-full flex items-center justify-center bg-black/20 backdrop-blur-md z-20 shadow-[-5px_0_20px_rgba(0,0,0,0.2)] border-t md:border-t-0 md:border-l border-white/10">
        <Button
          size="lg"
          onClick={() => {
            if (buttonTexts[btnIndex] === "Register Now") {
              window.location.href = "/register";
            } else {
              window.location.href = "/details";
            }
          }}
          className="w-full md:w-40 bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 font-bold shadow-lg overflow-hidden relative border-none transition-all duration-300 transform hover:scale-105 active:scale-95 group text-sm md:text-base h-10 md:h-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={btnIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 flex items-center justify-center gap-2"
            >
              <span>{buttonTexts[btnIndex]}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </AnimatePresence>
          <span className="opacity-0 flex items-center gap-2">
            Register Now <ArrowRight className="w-4 h-4" />
          </span>
        </Button>
      </div>
    </header>
  );
};

const Marquee = ({ text, speed }) => {
  return (
    <div className="flex overflow-hidden w-full items-center h-full select-none">
      <motion.div
        className="flex whitespace-nowrap items-center"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        <div className="flex items-center shrink-0">
          <span className="text-xs md:text-base font-medium px-8 tracking-wide flex items-center gap-2">
            {text}
          </span>
          <span className="w-10 md:w-20"></span>
        </div>
        <div className="flex items-center shrink-0">
          <span className="text-xs md:text-base font-medium px-8 tracking-wide flex items-center gap-2">
            {text}
          </span>
          <span className="w-10 md:w-20"></span>
        </div>
      </motion.div>
    </div>
  );
};
