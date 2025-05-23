import { NavLink, useNavigate } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import downloadIcon from "../../assets/Icons/New folder/download.svg"
import Ripples from 'react-ripples'
import ShareFeedback from "../ShareFeedback/ShareFeedback";

const Navbar = () => {
  const navigate = useNavigate();
  const navlinks = [
    // {
    //   label: "Home",
    //   action: () => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    //   },
    // },
    {
      label: "About Me",
      action: () => {
        navigate("/");
        const aboutMe = document.getElementById("about-me");
        aboutMe?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Projects",
      action: () => {
        navigate("/");
        const projects = document.getElementById("projects");
        projects?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Contact Me",
      path: "contact-me",
      action: () => {
        navigate("/");
        const contactMe = document.getElementById("contact-me");
        contactMe?.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];
  return (
    <div className="bg-[#0E1330] border-b border-[#282D45] px-3 xl:px-0 py-3 w-full sticky z-20 top-0">
      <div className="max-w-6xl mx-auto flex items-center justify-between font-Lato text-lg">
        <h1 className="bg-gradient-to-br from-blue-600 to-indigo-400 bg-clip-text text-transparent font-Montserrat text-[26px] font-bold">
          Developer Rahul
        </h1>
        <div className="hidden lg:flex items-center gap-7 z-10">
          {navlinks.map(({ action, label }, index) => (
            <NavLink
              key={index}
              onClick={action}
              className="text-white text-base hover:text-[#0997E6] transition duration-400 group flex flex-col"
            >
              {label} <span className="mt-[2px] h-[1px] w-[0px] rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 transition-all duration-500 group-hover:w-full"></span>
            </NavLink>
          ))}

          <ShareFeedback classNames={"mx-auto"}/>
        </div>

        <div className="flex items-center gap-6">
          {/* <ToggleBtn /> */}

          {/* <Ripples className="" during={1500}>
          <button
            className="hidden md:flex items-center gap-2 bg-gradient-to-br from-blue-500 to-indigo-800 font-Poppins py-3 px-1 mobileLg:px-3  sm:text-base text-white rounded sm:rounded-[10px] "
          >
            <span className="text-xs mobileLg:text-base">Share Your Feedback</span>
          </button>
          </Ripples> */}

          <Ripples className="" during={1500}>
          <a
            href="/src/assets/Resume_of_Rahul Sutradhar.pdf"
            download
            className="hidden md:flex items-center gap-2 bg-gradient-to-br from-blue-500 to-indigo-800 font-Poppins py-3 px-1 mobileLg:px-3  sm:text-base text-white rounded sm:rounded-[10px] "
          >
            <span className="text-xs mobileLg:text-base">Download Resume</span>
            <img className="w-5 animate-pulse" src={downloadIcon} alt="" />
          </a>
          </Ripples>

          

          <div className="block lg:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
