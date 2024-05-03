import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hamburger from "../../assets/Icons/hamburger menu.svg";
import leftArrow from "../../assets/Icons/left-arrow.svg";

const HamburgerMenu = () => {
  //   const [isLightMode, setLightMode] = useState(false)
  // const [isDarkMode, setDarkMode] = useState(true)

  // const handleLightToggle = () => {
  //   setLightMode(!isLightMode)
  //   setDarkMode(false)
  //   setLightMode(true)
  // }

  // const handleDarkToggle = () => {
  //   setDarkMode(!isDarkMode)
  //   setLightMode(false)
  //   setDarkMode(true)
  // }

  const navlinks = [
    {
      label: "Home",
      path: "",
    },
    {
      label: "About Me",
      path: "about-me",
    },
    {
      label: "Services",
      path: "services",
    },
    {
      label: "Projects",
      path: "projects",
    },
    {
      label: "Contact us",
      path: "contact-us",
    },
  ];

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const closestDropdown = event.target.closest(".hamburgerMenu");
      if (isHamburgerOpen && closestDropdown === null) {
        setIsHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isHamburgerOpen]);
  return (
    <div className="relative hamburgerMenu">
      <img
        onClick={toggleHamburgerMenu}
        className="w-10 cursor-pointer"
        src={hamburger}
        alt=""
      />

      <div
        className={`overflow-y-scroll fixed inset-y-0 right-0 z-50 bg-gray-800 w-72 h-screen transition-all duration-300 transform ${
          isHamburgerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {isHamburgerOpen && (
          <div className="flex flex-col justify-between h-full">
            
            <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center bg-[#0E1330] border-b border-[#282D45] p-4">
              <h1 className="text-white font-Montserrat text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                Rahul Sutradhar
              </h1>
              <img onClick={() => setIsHamburgerOpen(!isHamburgerOpen)} className="w-6 cursor-pointer" src={leftArrow} alt="" />
            </div>
            <div className="flex flex-col gap-7 p-4">
              {navlinks.map((link, index) => (
                <Link
                  key={index}
                  to={`/${link.path}`}
                  className="text-white hover:text-[#0997E6] transition duration-400"
                >
                  {link?.label}
                </Link>
              ))}
            </div>
            </div>



            {/* <div className="p-4">
            <div className="border-gray-600 border rounded-xl h-[45px] flex items-center justify-between px-1">
        <button
          className={`${isLightMode ? 'text-blue-500 rounded-lg bg-[#246BFD1A] px-5 py-1 flex items-center gap-1' : 'text-gray-200 px-5 py-2'} focus:outline-none font-roboto font-normal flex items-center gap-1`}
          onClick={handleLightToggle}
        >
          Light <img className="w-5 cursor-pointer" src={sun} alt="" />
        </button>
        <button
          className={`${isDarkMode ? 'text-blue-500 rounded-lg bg-[#246BFD1A] px-5 py-1 flex items-center gap-1' : 'text-gray-200 px-5 py-2'} focus:outline-none font-roboto font-normal flex items-center gap-1`}
          onClick={handleDarkToggle}
        >
          Dark <img className="w-5 cursor-pointer" src={moon} alt="" />
        </button>
      </div>
            </div> */}



          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
