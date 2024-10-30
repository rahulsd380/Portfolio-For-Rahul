import educationIcon from "../../assets/Icons/New folder/education.svg";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div>
        {/* Header */}
        <div className="flex items-center gap-5 mb-10 pl-5">
          <img
            src={educationIcon}
            alt="education icon"
            className="size-[50px]"
          />
          <h1 className="text-[#0696E7] font-Poppins text-5xl md:text-[50px] font-semibold">
            Education
          </h1>
        </div>

        <EducationCard
        title={"Secondary School Certificate"}
        place={"Kalir Bazar U.P High School"}
        year={"2014 - 2020"}
        />
        <EducationCard
        title={"Computer Science"}
        place={"Cumilla CCN polytechnic institute"}
        year={"2020 - 2024"}
        />

      
    </div>
  );
};

export default Education;
