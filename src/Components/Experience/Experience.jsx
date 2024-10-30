import experience from "../../assets/Icons/New folder/experience-white.svg";
import EducationCard from "../Education/EducationCard";

const Experience = () => {
  // Array of experience objects
  const experienceData = [
    {
      title: "Front End Developer",
      place: "Neon Shark",
      year: "February 2024 - Present"
    },
    {
      title: "Personal Working Experience",
      place: "Personal",
      year: "March 2023 - Present"
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-5 mb-10 pl-5">
        <img src={experience} alt="experience icon" className="size-[50px]" />
        <h1 className="text-[#0696E7] font-Poppins text-5xl md:text-[50px] font-semibold">
          Experience
        </h1>
      </div>
      {/* Experience cards */}
      {experienceData.map((exp, index) => (
        <EducationCard
          key={index}
          title={exp.title}
          place={exp.place}
          year={exp.year}
        />
      ))}
    </div>
  );
};

export default Experience;
