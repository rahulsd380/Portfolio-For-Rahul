import { useState } from "react";
import sun from "../../assets/Icons/sun.svg";
import moon from "../../assets/Icons/moon.svg";

const ToggleBtn = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode); 
    document.body.classList.toggle("dark");
  };

  return (
    <div className="w-10 hidden lg:block">
      {isDarkMode ? (
        <img
          onClick={toggleMode}
          className="w-8 cursor-pointer"
          src={moon}
          alt=""
        />
      ) : (
        <img
          onClick={toggleMode}
          className="w-9 cursor-pointer"
          src={sun}
          alt=""
        />
      )}
    </div>
  );
};

export default ToggleBtn;


{/* <div className="flex flex-col justify-between px-4 lg:flex-row">
    <div className="">
        <div className="absolute left-24 top-5 z-50 h-[400px] w-[400px] animate-[spin_20s_linear_infinite] rounded-full border">
            <img src={html} alt="icon" className="absolute left-6 top-5 z-50 h-16 w-16 animate-[u_20s_linear_infinite]" width={50} height={50} />
            <img src={html} alt="icon" className="absolute -left-5 top-28 bottom-20 z-50 h-16 w-16 animate-[u_20s_linear_infinite]" width={50} height={50} />
            <img src={html} alt="icon" className="absolute -left-6 top-48 z-50 h-16 w-16 animate-[u_20s_linear_infinite]" width={50} height={50} />
            <img src={html} alt="icon" className="absolute left-0 top-72 z-50 h-16 w-16 animate-[u_20s_linear_infinite]" width={50} height={50} />
            <img src={html} alt="icon" className="absolute left-28 top-[360px] z-50 h-16 w-16 animate-[u_20s_linear_infinite]" width={50} height={50} />
        </div>
        <img src={html} alt="circle" className="absolute left-[120px] top-[100px] z-0 h-[250px] w-[350px]" width={300} height={300} />
        {/* <img src={html} alt="circle" className="absolute left-[260px] top-48 z-50 h-16 w-16" width={50} height={50} /> */}
        {/* <div className="absolute right-20 top-0 z-50 h-32 w-32 -rotate-45 bg-gradient-to-t from-[#ff0000] from-10% to-90%"></div> */}
        {/* <div className="from- absolute right-20 top-0 z-50 h-[600px] w-28 bg-gradient-to-l from-[#2B2B2B] to-[#2b2b2b]"></div> */}
    </div>
</div> */}
