import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import ToggleBtn from "./ToggleBtn";

const Navbar = () => {
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

  
  return (
    <div className="bg-[#0E1330] border-b border-[#282D45] px-3 xl:px-0 py-3 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between font-Lato text-lg">
        <h1 className="text-white font-Montserrat text-3xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          Rahul
        </h1>
        <div className="hidden lg:flex items-center gap-7">
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

        <div className="flex items-center gap-6">
          <ToggleBtn/>

<button className="bg-gradient-to-br from-blue-500 to-indigo-800 py-3 px-[4px] sm:px-3 md:px-8 text-xs sm:text-base text-white rounded sm:rounded-[10px]">
          Download Resume
        </button>

        <HamburgerMenu/>
        </div>

       
      </div>
    </div>
  );
};

export default Navbar;
