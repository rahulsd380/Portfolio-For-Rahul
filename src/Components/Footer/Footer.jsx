import linkedin from "../../assets/Icons/Social Icons/linkedin.svg";
import facebook from "../../assets/Icons/Social Icons/facebook.svg";
import twitter from "../../assets/Icons/Social Icons/twitter.svg";
import whatsapp from "../../assets/Icons/Social Icons/whatsapp.svg";
import github from "../../assets/Icons/Skills/github.svg";
// import upArrow from "../../assets/Icons/New folder/up-arrow.svg";
// import  Ripples  from 'react-ripples';

const Footer = () => {
  // const handleScroll = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }
  return (
    <div className="mt-[80px] bg-[#0E1330] border-t-2 border-[#282D45] overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 xl:px-0 flex flex-col gap-9 py-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="bg-gradient-to-br from-blue-600 to-indigo-400 bg-clip-text text-transparent font-Poppins text-[20px] font-bold">
              Rahul Sutradhar
            </h1>

            <p className="text-[#a5a5a5] font-Poppins text-[14px]">
              Full Stack Developer
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-white font-Montserrat text-[20px] font-bold">
              Phone No
            </h1>

            <p className="text-[#a5a5a5] font-Poppins text-[14px]">
              +880 1608249337
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-white font-Montserrat text-[20px] font-bold">
              Email
            </h1>

            <p className="text-[#a5a5a5] font-Poppins text-[14px]">
              rahulsd380@gmail.com
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-white font-Montserrat text-[20px] font-bold">
              Address
            </h1>

            <p className="text-[#a5a5a5] font-Poppins text-[14px]">
              Kamalapur, Cumilla-3501, Bangladesh.
            </p>
          </div>
        </div>

        {/* Divider */}

        {/* <Ripples className="" during={1500}>
                <button onClick={handleScroll} className="bg-[#0696E7] border border-[#282D45] w-7 h-7 flex justify-center items-center rounded-full animate-pulse ">
                        <img className="w-3" src={upArrow} alt="" />
                    </button>
                </Ripples> */}

        <div className="w-full h-[1px] bg-gradient-to-br from-blue-500 to-indigo-800"></div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between">
          <p className="text-[#a5a5a5] font-Poppins text-[14px]">
            2024 @All Project Rahul Sutradhar
          </p>

          <div className="flex items-center gap-5 ">
            <a
              href="https://www.linkedin.com/in/rahul-sutradhar-a99749202"
              target="_blank"
            >
              <img
                className="w-5 cursor-pointer transition duration-300 transform hover:-translate-y-0.5"
                src={linkedin}
                alt=""
              />
            </a>
            <a href="https://www.facebook.com/rahulsd836" target="_blank">
              <img
                className="w-6 cursor-pointer transition duration-300 transform hover:-translate-y-0.5"
                src={facebook}
                alt=""
              />
            </a>
            <img
              className="w-6 cursor-pointer transition duration-300 transform hover:-translate-y-0.5"
              src={twitter}
              alt=""
            />
            <a href="https://wa.me/8801608249337" target="_blank">
              <img
                className="w-6 cursor-pointer transition duration-300 transform hover:-translate-y-0.5"
                src={whatsapp}
                alt=""
              />
            </a>
            <a href="https://github.com/rahulsd380" target="_blank">
              <img
                className="w-7 cursor-pointer transition duration-300 transform hover:-translate-y-0.5"
                src={github}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
