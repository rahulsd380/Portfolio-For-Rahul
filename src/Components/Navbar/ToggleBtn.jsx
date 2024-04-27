import { useState } from "react";
import sun from "../../assets/Icons/sun.svg";
import moon from "../../assets/Icons/moon.svg";


const ToggleBtn = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    return (
        <div className="w-10 hidden lg:block">
          {isDarkMode ? (
            <img onClick={() => setIsDarkMode(!isDarkMode)} className="w-9 cursor-pointer" src={sun} alt="" />
          ) : (
            <img onClick={() => setIsDarkMode(!isDarkMode)} className="w-8 cursor-pointer" src={moon} alt="" />
          )}
          </div>
    );
};

export default ToggleBtn;