import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaChevronDown, FaRegFileAlt, FaRegUser } from "react-icons/fa"; 
import { FaAward } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiReadCvLogo } from "react-icons/pi";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { MdPerson, MdWork } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { RiServiceLine } from "react-icons/ri";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { MdArticle, MdListAlt, MdAdd } from 'react-icons/md';

const DashboardSidebar = () => {
    const dashboardSidebarLinks = [
        {
            label: "Dashboard",
            path: "/rahul-sutradhar/admin/dashboard",
            icon: <LuLayoutDashboard className="text-[#aeb9e1] text-xl"/>,
          },
          {
            label: "About Me",
            path: "/rahul-sutradhar/admin/dashboard/about-me",
            icon: <FaRegUser className="text-[#aeb9e1] text-xl"/>,
          },
          {
            label: "My Services",
            path: "/rahul-sutradhar/admin/dashboard/my-services",
            icon: <RiServiceLine className="text-[#aeb9e1] text-xl"/>,
          },
          {
            label: "Endorsements",
            path: "/rahul-sutradhar/admin/dashboard/endorsements",
            icon: <BsFillPersonCheckFill className="text-[#aeb9e1] text-xl"/>,
          },
    ];


  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isQualificationDropwownOpen, setIsQualificationDropwownOpen] = useState(false);
  const [isProjectPropdownOpen, setIsProjectPropdownOpen] = useState(true);
  const [isBlogsPropdownOpen, setIsBlogsPropdownOpen] = useState(true);

  return (
    <div className="w-[320px] px-7 py-8 text-white h-screen overflow-y-auto bg-[#0E1330] border-r border-[#282D45]">
      <Link to="/" className="flex items-center gap-2 mb-4">
        <img
          className="w-8"
          src="https://i.ibb.co/Zx9fD4W/4851694.png"
          alt="Logo"
        />
        <h1 className="bg-gradient-to-br from-blue-600 to-indigo-400 bg-clip-text text-transparent font-Montserrat text-lg font-bold">
          Developer Rahul
        </h1>
      </Link>

      {/* Navlinks */}
      <div className="flex flex-col">
        {dashboardSidebarLinks.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`${
              location.pathname === item.path
                ? "bg-[#1C2242] border border-[#282D45]"
                : ""
            } flex items-center gap-3 py-4 px-3 rounded-lg`}
          >
            {item.icon}
            <span style={{ color: "#aeb9e1" }}>{item.label}</span>
          </Link>
        ))}

        {/* Dropdown for Short Resume */}
        <div className="flex flex-col">
          <div
            className={`flex items-center justify-between py-4 px-3 rounded-lg cursor-pointer transition-all duration-200`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
              <PiReadCvLogo className="text-[#aeb9e1] text-xl"/>
                <p className="text-[1rem] font-[400]" style={{ color: "#aeb9e1" }}>
                  Short Resume
                </p>
              </div>
              <FaChevronDown
                className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                style={{ color: "#aeb9e1" }}
              />
            </div>
          </div>

          {isDropdownOpen && (
            <ul className="bg-[#1C2242] mx-3 border border-[#282D45] rounded-md p-[8px] flex flex-col gap-6 text-[1rem] text-white">
              <li className="flex items-center gap-3 text-sm">
                <FaClipboardList
                  className={`transition-transform duration-300`}
                  style={{ color: "#aeb9e1" }}
                />
                <span style={{ color: "#aeb9e1" }}>Professional Skill</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaAward
                  className={`transition-transform duration-300`}
                  style={{ color: "#aeb9e1" }}
                />
                <span style={{ color: "#aeb9e1" }}>Achievements</span>
              </li>
            </ul>
          )}
        </div>

        {/* Dropdown for Education And Experience */}
        <div className="flex flex-col">
          <div
            className={`flex items-center justify-between py-4 px-3 rounded-lg cursor-pointer transition-all duration-200`}
            onClick={() => setIsQualificationDropwownOpen(!isQualificationDropwownOpen)}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
              <PiReadCvLogo className="text-[#aeb9e1] text-xl"/>
                <p className="text-[1rem] font-[400]" style={{ color: "#aeb9e1" }}>
                Qualifications
                </p>
              </div>
              <FaChevronDown
                className={`transition-transform duration-300 ${isQualificationDropwownOpen ? "rotate-180" : "rotate-0"}`}
                style={{ color: "#aeb9e1" }}
              />
            </div>
          </div>

          {isQualificationDropwownOpen && (
            <ul className="bg-[#1C2242] mx-3 border border-[#282D45] rounded-md p-[8px] flex flex-col gap-6 text-[1rem] text-white">
              <li className="flex items-center gap-3 text-sm">
                <HiMiniAcademicCap
                  className={`transition-transform duration-300`}
                  style={{ color: "#aeb9e1" }}
                />
                <span style={{ color: "#aeb9e1" }}>Education</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MdWork
                  className={`transition-transform duration-300`}
                  style={{ color: "#aeb9e1" }}
                />
                <span style={{ color: "#aeb9e1" }}>Experience</span>
              </li>
            </ul>
          )}
        </div>

        {/* Dropdown for Projects */}
        <div className="flex flex-col">
          <div
            className={`flex items-center justify-between py-4 px-3 rounded-lg cursor-pointer transition-all duration-200`}
            onClick={() => setIsProjectPropdownOpen(!isProjectPropdownOpen)}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
              <FaRegFileAlt className="text-[#aeb9e1] text-xl"/>
                <p className="text-[1rem] font-[400]" style={{ color: "#aeb9e1" }}>
                Projects
                </p>
              </div>
              <FaChevronDown
                className={`transition-transform duration-300 ${isProjectPropdownOpen ? "rotate-180" : "rotate-0"}`}
                style={{ color: "#aeb9e1" }}
              />
            </div>
          </div>

          {isProjectPropdownOpen && (
            <ul className="bg-[#1C2242] mx-3 border border-[#282D45] rounded-md p-[8px] flex flex-col gap-6 text-[1rem] text-white">
              <li className="flex items-center gap-3 text-sm">
                <MdPerson
                  className={`transition-transform duration-300`}
                  style={{ color: "#aeb9e1" }}
                />
                <span style={{ color: "#aeb9e1" }}>Personal Projects</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <GiOfficeChair
                  className={`transition-transform duration-300`}
                  style={{ color: "#aeb9e1" }}
                />
                <span style={{ color: "#aeb9e1" }}>Company Projects</span>
              </li>
            </ul>
          )}
        </div>

        {/* Dropdown for Blogs */}
        <div className="flex flex-col">
          <div
            className={`flex items-center justify-between py-4 px-3 rounded-lg cursor-pointer transition-all duration-200`}
            onClick={() => setIsBlogsPropdownOpen(!isBlogsPropdownOpen)}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
              <MdArticle className="text-[#aeb9e1] text-xl"/>
                <p className="text-[1rem] font-[400]" style={{ color: "#aeb9e1" }}>
                Blogs
                </p>
              </div>
              <FaChevronDown
                className={`transition-transform duration-300 ${isBlogsPropdownOpen ? "rotate-180" : "rotate-0"}`}
                style={{ color: "#aeb9e1" }}
              />
            </div>
          </div>

          {isBlogsPropdownOpen && (
            <ul className="bg-[#1C2242] mx-3 border border-[#282D45] rounded-md p-[8px] flex flex-col gap-6 text-[1rem] text-white">
              <li className="flex items-center gap-3 text-sm">
                <MdListAlt
                  className={`transition-transform duration-300`}
                  style={{ color: "#aeb9e1" }}
                />
                <span style={{ color: "#aeb9e1" }}>All Blogs</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MdAdd
                  className={`transition-transform duration-300`}
                  style={{ color: "#aeb9e1" }}
                />
                <span style={{ color: "#aeb9e1" }}>Add New Blog</span>
              </li>
            </ul>
          )}
        </div>



      </div>
    </div>
  );
};

export default DashboardSidebar;
