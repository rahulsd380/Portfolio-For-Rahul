import html from "../../assets/Icons/Skills/html.svg";
import vector from "../../assets/Icons/New folder/Ellipse 12.svg";
import vector2 from "../../assets/Icons/New folder/Ellipse 11.svg";

const ProfessionalSkills = () => {
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 mt-12">
      {skills.map((skill, index) => (
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          key={index}
          className="w-full md:w-[244px] h-[244px] bg-[#0E1330] border border-[#282D45] rounded-[20px] flex flex-col justify-center items-center gap-7 mb-9 relative"
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
  );
};

export default ProfessionalSkills;