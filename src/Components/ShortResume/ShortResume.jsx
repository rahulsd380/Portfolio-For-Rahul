import { useState } from "react";
import ProfessionalSkills from "./ProfessionalSkills";
import Achievements from "./Achievements";




const ShortResume = () => {
  
  const [activeTab, setActiveTab] = useState("Professional Skills");
  const tabButtons = ["Professional Skills", "Achievements"]
  return (
    <div className="max-w-6xl mx-auto mt-[80px] px-3 xl:px-0">
      <div className="">
        <p className="text-white font-Poppins mb-5 text-center">
          Skills And Achievements
        </p>

        <h1 className="text-[#0696E7] font-Montserrat text-5xl md:text-[40px] font-bold mb-12 text-center">
          Short Resume{" "}
        </h1>

        <div className="w-full max-w-[500px] mx-auto h-20 rounded-[78px] border border-[#0696E7] flex items-center  justify-between px-[2px]">

          {
            tabButtons.map((button, index) => 
              <div
              key={index}
            onClick={() => setActiveTab(button)}
            className={`${
              activeTab === button ? "bg-[#0696E7]" : "bg-none"
            } cursor-pointer rounded-[78px] h-[72px] flex justify-center items-center text-white font-Poppins text-xs md:text-xl w-full`}
          >
           {button}
          </div>
            )
          }
          
        </div>

        {/* <div className="flex justify-center gap-10"> */}
        {activeTab === "Professional Skills" && (
            <ProfessionalSkills/>
        )}
        {/* </div> */}

        {activeTab === "Achievements" && (
          <Achievements/>
        )}
      </div>
    </div>
  );
};

export default ShortResume;
