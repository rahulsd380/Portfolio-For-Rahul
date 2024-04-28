import aboutMe from "../../assets/Images/about me.png"
import arrow from "../../assets/Images/arrowImg.png"

const AboutMe = () => {
    return (
        <div id="about-me" className="max-w-6xl mx-auto mt-[80px] px-3 xl:px-0">
            <div className="relative flex flex-col lg:flex-row items-center gap-10">

            <div className="hidden lg:block w-[400px] h-[400px] rounded-full bg-[#0696E7]/50 bg-opacity-30 blur-[100px] absolute top-[50px] left-2"></div>

                <img className="z-10" src={aboutMe} alt="" />

                <div>
                <p className="text-[#0294E8] font-Poppins text-sm md:text-[22px] font-semibold">About me</p>
                <h1 className="text-white font-Montserrat text-xl md:text-[50px] font-semibold leading-[30px] md:leading-[60px]">I’ am Rahul, unique work provider client </h1>

                <p className="text-[#939393] font-Poppins text-[12px] md:text-[18px] font-normal mt-4 mb-8">With a track record of creating intuitive, visually stunning interfaces and a passion for user-centered design. My expertise in user research and testing ensures my designs meet the needs of the target audience. I am a team player and skilled in communicating design decisions to stakeholders. My experience spans mobile apps and web applications, with a goal of delivering seamless user experiences.</p>

                <div className="flex items-center relative">
                <a href="/src/assets/Resume_of_Rahul Sutradhar.pdf" download className="bg-gradient-to-br from-blue-500 to-indigo-800 font-Poppins py-3 px-[4px] sm:px-3 md:px-8 text-xs sm:text-base text-white rounded sm:rounded-[10px]">
          Download Resume
        </a>
        <img className="absolute mt-0 lg:mt-3 left-[110px] sm:left-[160px] mobileLg:left-[180px] md:left-[200px] -top-[70px] md:-top-[110px] w-36 md:w-[230px]" src={arrow} alt="" />
                </div>

                
                </div>
            </div>
        </div>
    );
};

export default AboutMe;