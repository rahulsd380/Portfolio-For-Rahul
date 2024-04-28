import img from "../../assets/Images/Photo.png";
import e1 from "../../assets/Images/E 1.svg";
import e2 from "../../assets/Images/E 2.png";
import talk from "../../assets/Icons/New folder/talk.svg"
import { Link, NavLink, useNavigate } from "react-router-dom";
import TextTransition, { presets } from 'react-text-transition';
import { useEffect, useState } from "react";

const TEXTS = ['FULL-STACK WEB DEVELOPER', 'FRONT-END WEB DEVELOPER', 'MERN-STACK WEB DEVELOPER'];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000,
    );
    return () => clearTimeout(intervalId);
  }, []);


  const navigate = useNavigate();
  const navigateToTalk = () => {
    navigate("/");
  
    // Delay scrolling for 100 milliseconds (adjust as needed)
    setTimeout(() => {
      const contactMe = document.getElementById("contact-me");
      contactMe?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }


  return (
    <div
      id="home"
      className="relative flex flex-col lg:flex-row gap-16 lg:gap-0 items-center justify-between max-w-6xl mx-auto mt-[80px] px-3 xl:px-0"
    >
      <div className="absolute -left-[160px] -top-32">
        <img src={e1} alt="" />
      </div>

      <div className="">
        <p className="text-[#939393] font-Poppins text-[35px] font-normal mb-8">
        
        <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}
        </TextTransition>
        </p>
        <p className="text-[#0294E8] font-Poppins text-sm md:text-[22px] font-semibold">
          Hello, I’m
        </p>
        <h1 className="text-white font-Montserrat text-5xl md:text-[70px] font-semibold leading-[60px] md:leading-[80px]">
          Rahul Sutradhar{" "}
        </h1>
        <p className="text-[#939393] font-Poppins text-[12px] md:text-[18px] font-normal mt-4 mb-8">
          I'm a full-stack web developer and, sed do eiusmod tempor incididunt
          ut labore et dolore magnaed do eiusmod tempor incididunt ut labore et
          dolore{" "}
        </p>

        {/* <Link onClick={navigateToTalk} className="bg-gradient-to-br from-blue-500 to-indigo-800 py-3 px-8 font-Poppins text-white rounded-[10px] flex items-center gap-2">
          <div className="">
          Let’s Talk Us
          <img className="w-5" src={talk} alt="" />
          </div>
        </Link> */}
        <button className="bg-gradient-to-br from-blue-500 to-indigo-800 py-3 px-8 font-Poppins text-white rounded-[10px] flex items-center gap-2">
          Let’s Talk Us
          <img className="w-5" src={talk} alt="" />
        </button>
      </div>

      <img className="w-[500px] lg:w-[420px]" src={img} alt="" />

      {/* <div className="absolute -right-24 -top-10 ">
        <img src={e2} alt="" />
      </div> */}
    </div>
  );
};

export default Hero;
