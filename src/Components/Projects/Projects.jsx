import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useGetAllProjectsQuery } from "../../redux/Features/Projects/projectApi";

const Projects = () => {
  const { data } = useGetAllProjectsQuery();
  console.log(data);
  const [activeTab, setActiveTab] = useState("Personal Projects");
  const tabButtons = ["Personal Projects", "Company Projects"];

  const personalProjects = data?.data?.filter(
    (project) => project.projectType === "Personal"
  );
  const companyProjects = data?.data?.filter(
    (project) => project.projectType === "Company"
  );

  return (
    <div id="projects" className="max-w-6xl mx-auto mt-[80px] px-3 xl:px-0">
      <div>
        <p className="text-white font-Poppins mb-5 text-center">My Work</p>

        <h1 className="text-[#0696E7] font-Montserrat text-5xl md:text-[40px] font-bold mb-12 text-center">
          Latest Project
        </h1>

        <div className="relative w-full max-w-[500px] mx-auto h-20 rounded-full border border-[#0696E7] flex items-center justify-between px-[2px] bg-[#59bdf738]">
          {/* Animated sliding background */}
          <div
            className={`absolute h-[85%] w-[50%] bg-[#0696E7] rounded-full transition-transform duration-500 ease-in-out ${
              activeTab === "Personal Projects" ? "translate-x-1" : "translate-x-[96%]"
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

        {activeTab === "Personal Projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-12">
            {personalProjects?.map((project) => (
              <ProjectCard key={project?._id} project={project} />
            ))}
          </div>
        )}

        {activeTab === "Company Projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-12">
            {companyProjects?.map((project) => (
              <ProjectCard key={project?._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
