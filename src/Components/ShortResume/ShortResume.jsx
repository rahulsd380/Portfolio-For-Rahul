import { useState } from "react";
import html from "../../assets/Icons/Skills/html.svg";
import vector from "../../assets/Icons/New folder/Ellipse 12.svg";
import vector2 from "../../assets/Icons/New folder/Ellipse 11.svg";


const ShortResume = () => {
  const skills = [
    {
      img: html,
      title: "HTML5",
    },
    {
      img: html,
      title: "HTML5",
    },
    {
      img: html,
      title: "HTML5",
    },
    {
      img: html,
      title: "HTML5",
    },
    {
      img: html,
      title: "HTML5",
    },
    {
      img: html,
      title: "HTML5",
    },
    {
      img: html,
      title: "HTML5",
    },
    {
      img: html,
      title: "HTML5",
    },
  ];

  const [activeTab, setActiveTab] = useState("Professional Skills");
  return (
    <div className="max-w-6xl mx-auto mt-[80px] px-3 xl:px-0">
      <div>
        <p className="text-white font-Poppins mb-5 text-center">
          Academic, Skills And Experience
        </p>

        <h1 className="text-[#0696E7] font-Montserrat text-5xl md:text-[40px] font-bold mb-12 text-center">
          Short Resume{" "}
        </h1>

        <div className="w-full h-20 rounded-[78px] border border-[#0696E7] flex items-center  justify-between px-[2px]">
          <div
            onClick={() => setActiveTab("Professional Skills")}
            className={`${
              activeTab === "Professional Skills" ? "bg-[#0696E7]" : "bg-none"
            } cursor-pointer rounded-[78px] h-[72px] flex justify-center items-center text-white font-Poppins text-xs md:text-xl w-full`}
          >
            Professional Skills
          </div>

          <div
            onClick={() => setActiveTab("Education")}
            className={`${
              activeTab === "Education" ? "bg-[#0696E7]" : "bg-none"
            } cursor-pointer rounded-[78px] h-[72px] flex justify-center items-center text-white font-Poppins text-xs md:text-xl w-full`}
          >
            Education
          </div>

          <div
            onClick={() => setActiveTab("Achievements")}
            className={`${
              activeTab === "Achievements" ? "bg-[#0696E7]" : "bg-none"
            } cursor-pointer rounded-[78px] h-[72px] flex justify-center items-center text-white font-Poppins text-xs md:text-xl w-full`}
          >
            Achievements
          </div>
        </div>

        {activeTab === "Professional Skills" && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-12">
            {skills.map((skill, index) => (
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                key={index}
                className="w-full mobileLg:w-[244px] h-[244px] bg-[#0E1330] border border-[#282D45] rounded-[20px] flex flex-col justify-center items-center gap-7 mb-9 relative"
              >
                <img className="absolute right-0 top-0" src={vector} alt="" />

                <img className="absolute left-0 bottom-0" src={vector2} alt="" />
                <img src={skill?.img} alt="" />
                <h1 className="text-white font-Poppins text-2xl font-semibold text-center">
                  {skill.title}
                </h1>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Education" && (
          <div className="text-white mt-12">Education</div>
        )}

        {activeTab === "Achievements" && (
          <div className="text-white mt-12">Achievements</div>
        )}
      </div>
    </div>
  );
};

export default ShortResume;
