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
