import { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {

    const [activeTab, setActiveTab] = useState("Personal Projects")
    return (
        <div id="projects" className="max-w-6xl mx-auto mt-[80px] px-3 xl:px-0">
            <div>
            <p className="text-white font-Poppins mb-5 text-center">
            My Work
            </p>

            <h1 className="text-[#0696E7] font-Montserrat text-5xl md:text-[40px] font-bold mb-12 text-center">Letest Project</h1>


            <div className="w-full md:w-[500px] mx-auto h-20 rounded-[78px] border border-[#0696E7] flex items-center  justify-between px-[2px]">

                <div 
                onClick={() => setActiveTab("Personal Projects")} 
                className={`${activeTab === "Personal Projects" ? "bg-[#0696E7]" : "bg-none"} cursor-pointer rounded-[78px] h-[72px] flex justify-center items-center text-white font-Poppins text-xs md:text-xl w-full`}>
                Personal Projects
                </div>

                <div 
                onClick={() => setActiveTab("Company Projects")} 
                className={`${activeTab === "Company Projects" ? "bg-[#0696E7]" : "bg-none"} cursor-pointer rounded-[78px] h-[72px] flex justify-center items-center text-white font-Poppins text-xs md:text-xl w-full`}>
                Company Projects
                </div>

            </div>


           {
            activeTab === "Personal Projects" &&
            <div className=" mt-12">

            <ProjectCard/>
            </div>
           }


           {
            activeTab === "Company Projects" &&
            <div className="text-white mt-12">
                Company Projects
            </div>
           }


            </div>
        </div>
    );
};

export default Projects;