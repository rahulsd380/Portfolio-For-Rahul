// import experience from "../../assets/Icons/New folder/experience.svg";
// import projects from "../../assets/Icons/New folder/project-svgrepo-com.svg";
import service1 from "../../assets/Icons/New folder/Website Coding.svg";

const InfoCard = () => {
  const info = [
    {
      icon: service1,
      title: "1 year of experience",
    },
    {
      icon: service1,
      title: "20+ projects",
    },
    {
      icon: service1,
      title: "20+ projects",
    },
  ];
  return (
    <div className="mt-[80px] bg-[#0E1330] py-16 relative">
      <div className="hidden lg:block w-[200px] h-[200px] rounded-full bg-[#1cacff99] bg-opacity-30 blur-[250px] absolute top-0"></div>

      <p className="text-white font-Poppins mb-5 text-center">
      Amazing Achievements
      </p>

      <h1 className="text-[#0696E7] font-Montserrat text-5xl md:text-[40px] font-bold mb-12 text-center">
      Why Choose Me?
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-3">
        {info.map((info, index) => (
          <div
            key={index}
            className="flex justify-start lg:justify-center gap-[18px] items-center bg-gradient-to-br from-blue-800 to-indigo-500 rounded p-7"
          >
            <div className=" font-Poppins rounded sm:rounded-[10px] flex justify-center items-center">
              <img className="" src={info?.icon} alt="" />
            </div>

            <h1 className="text-white font-Poppins text-2xl font-semibold text-center">
              {info?.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
