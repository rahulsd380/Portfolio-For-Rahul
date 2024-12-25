import { useState } from "react";
import vector from "../../assets/Icons/New folder/Ellipse 12.svg";
import vector2 from "../../assets/Icons/New folder/Ellipse 11.svg";
import { useGetAllSkillsQuery } from "../../redux/Features/Skills/skillApi";
import Ripples from "react-ripples";

const ProfessionalSkills = () => {
  const { data } = useGetAllSkillsQuery();
  const skills = data?.data || [];

  const [visibleSkills, setVisibleSkills] = useState(8);

  const handleSeeMore = () => {
    if (visibleSkills >= skills.length) {
      setVisibleSkills(8);
    } else {
      setVisibleSkills((prev) => prev + 4);
    }
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 mt-12 gap-5 lg:gap-0">
        {/* Map through the visible skills */}
        {skills.slice(0, visibleSkills).map((skill, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            key={index}
            className="w-full size-[230px] lg:size-[244px] bg-[#0E1330] border border-[#282D45] rounded-[20px] flex flex-col justify-center items-center gap-7 mb-9 relative"
          >
            <img className="absolute right-0 top-0" src={vector} alt="" />
            <img className="absolute left-0 bottom-0" src={vector2} alt="" />
            <img src={skill?.icon} alt="" className="size-28" />
            <h1 className="text-white font-Poppins text-2xl font-semibold text-center">
              {skill.skillName}
            </h1>
          </div>
        ))}
      </div>

      {/* "See More" or "See Less" button */}
      <div className="flex items-center justify-center mt-6">
        <Ripples during={1500}>
          <button
            onClick={handleSeeMore}
            className="bg-[#1C2242] border border-[#282D45] text-white px-5 py-[10px] flex justify-center items-center rounded-lg"
          >
            {visibleSkills >= skills.length ? "See Less" : "See More"}
          </button>
        </Ripples>
      </div>
    </div>
  );
};

export default ProfessionalSkills;
