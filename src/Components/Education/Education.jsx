import educationIcon from "../../assets/Icons/New folder/education.svg";
import EducationCard from "./EducationCard";

const Education = () => {
  // Array of education objects
  const educationData = [
    {
      title: "Secondary School Certificate",
      place: "Kalir Bazar U.P High School",
      year: "2014 - 2020"
    },
    {
      title: "Computer Science & Engineering",
      place: "Cumilla CCN Polytechnic Institute",
      year: "2020 - 2024"
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-5 mb-10 pl-5">
        <img
          src={educationIcon}
          alt="education icon"
          className="size-[50px]"
        />
        <h1 className="text-[#0696E7] font-Poppins text-5xl md:text-4xl mobileLg:text-4xl sm:text-3xl  font-semibold">
          Education
        </h1>
      </div>

      {educationData.map((edu, index) => (
        <EducationCard
          key={index}
          title={edu.title}
          place={edu.place}
          year={edu.year}
        />
      ))}
    </div>
  );
};

export default Education;
