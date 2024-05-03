// import experience from "../../assets/Icons/New folder/experience.svg";
// import projects from "../../assets/Icons/New folder/project-svgrepo-com.svg";
import service1 from "../../assets/Icons/New folder/Website Coding.svg";

const InfoCard = () => {
    const info = [
        {
            icon : service1,
            title : "1 year of experience",
        },
        {
            icon : service1,
            title : "20+ projects",
        },
        {
            icon : service1,
            title : "20+ projects",
        },
    ]
    return (
        <div className="mt-[80px] bg-[#0E1330] py-16 relative">

<div className="hidden lg:block w-[200px] h-[200px] rounded-full bg-[#1cacff99] bg-opacity-30 blur-[250px] absolute top-0"></div>

<p className="text-white font-Poppins mb-5 text-center">
          Awesome Services
        </p>

        <h1 className="text-[#0696E7] font-Montserrat text-5xl md:text-[40px] font-bold mb-12 text-center">
          My Services
        </h1>



<div className="flex justify-between max-w-6xl mx-auto">
          {info.map((info, index) => (
            <div
            
              key={index}
              className="flex flex-col gap-[18px] justify-center items-center"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-800 font-Poppins w-[100px] h-[100px] rounded sm:rounded-[10px] flex justify-center items-center">
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