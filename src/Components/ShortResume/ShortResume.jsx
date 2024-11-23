import { useState } from "react";
import ProfessionalSkills from "./ProfessionalSkills";
import Achievements from "./Achievements";

const ShortResume = () => {
  const [activeTab, setActiveTab] = useState("Professional Skills");
  const tabButtons = ["Professional Skills", "Achievements"];

  return (
    <div className="max-w-6xl mx-auto mt-[80px] px-3 xl:px-0">
      <div>
        <p className="text-white font-Poppins mb-4 text-center">
          Skills And Achievements
        </p>

        <h1 className="text-[#0696E7] font-Montserrat text-5xl md:text-[40px] mobileLg:text-5xl sm:text-3xl font-bold mb-12 sm:mb-5 text-center">
          Short Resume
        </h1>

        <div className="relative w-full max-w-[500px] mx-auto h-20 rounded-full border border-[#0696E7] flex items-center justify-between px-[2px] bg-[#59bdf738]">
          {/* Animated sliding background */}
          <div
            className={`absolute h-[85%] w-[50%] bg-[#0696E7] rounded-full transition-transform duration-500 ease-in-out ${
              activeTab === "Professional Skills" ? "translate-x-1" : "translate-x-[97%]"
            }`}
          ></div>

          {tabButtons.map((button) => (
            <div
              key={button}
              onClick={() => setActiveTab(button)}
              className="relative cursor-pointer flex-1 h-full flex justify-center items-center text-white font-Poppins text-xs md:text-xl font-medium transition-colors duration-300"
            >
              {button}
            </div>
          ))}
        </div>

        <div className="mt-10">
          {activeTab === "Professional Skills" && <ProfessionalSkills />}
          {activeTab === "Achievements" && <Achievements />}
        </div>
      </div>
    </div>
  );
};

export default ShortResume;
