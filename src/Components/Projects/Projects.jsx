import { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Personal Projects");
  const tabButtons = ["Personal Projects", "Company Projects"];

  const getTranslateX = (tab) => {
    switch (tab) {
      case "Personal Projects":
        return "translate-x-1";
      case "Company Projects":
        return "translate-x-60";
      default:
        return "translate-x-0";
    }
  };
  return (
    <div id="projects" className="max-w-6xl mx-auto mt-[80px] px-3 xl:px-0">
      <div>
        <p className="text-white font-Poppins mb-5 text-center">My Work</p>

        <h1 className="text-[#0696E7] font-Montserrat text-5xl md:text-[40px] font-bold mb-12 text-center">
          Letest Project
        </h1>

        <div className="relative w-full max-w-[500px] mx-auto h-20 rounded-full border border-[#0696E7] flex items-center justify-between px-[2px] bg-[#59bdf738]">
          {/* Animated sliding background */}
          <div
            className={`absolute h-[85%] w-[50%] bg-[#0696E7] rounded-full transition-transform duration-500 ease-in-out ${getTranslateX(
              activeTab
            )}`}
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

        {activeTab === "Personal Projects" && (
          <div className=" mt-12">
            <ProjectCard />
          </div>
        )}

        {activeTab === "Company Projects" && (
          <div className="text-white mt-12">Company Projects</div>
        )}
      </div>
    </div>
  );
};

export default Projects;
