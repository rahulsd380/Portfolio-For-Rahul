import img from "../../assets/Images/Photo.png";
import e1 from "../../assets/Images/E 1.svg";
import e2 from "../../assets/Images/E 2.png";

const Hero = () => {
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
          FULL-STACK WEB DEVELOPER
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

        <button className="bg-gradient-to-br from-blue-500 to-indigo-800 py-3 px-8 font-Poppins text-white rounded-[10px]">
          Let’s Talk Us
        </button>
      </div>

      <img className="w-[500px] lg:w-[420px]" src={img} alt="" />

      <div className="absolute -right-24 -top-10 ">
        <img src={e2} alt="" />
      </div>
    </div>
  );
};

export default Hero;
