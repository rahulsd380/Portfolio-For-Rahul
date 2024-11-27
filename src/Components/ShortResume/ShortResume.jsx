import { useState } from "react";
import ProfessionalSkills from "./ProfessionalSkills";
import Achievements from "./Achievements";
import Heading from "../Reusable/Heading";

const ShortResume = () => {
  const [activeTab, setActiveTab] = useState("Professional Skills");
  const tabButtons = ["Professional Skills", "Achievements"];

  return (
    <div className="max-w-6xl mx-auto mt-[80px] px-3 xl:px-0">
      <div>
        <Heading
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          subHeading={"Skills And Achievements"}
          heading={"Short Resume"}
          tabButtons={tabButtons}
          translateFirstValue={"translate-x-1"}
          translateSecondValue={"translate-x-[97%]"}
        />


        <div className="mt-10">
          {activeTab === "Professional Skills" && <ProfessionalSkills />}
          {activeTab === "Achievements" && <Achievements />}
        </div>
      </div>
    </div>
  );
};

export default ShortResume;
