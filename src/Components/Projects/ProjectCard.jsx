import img1 from "../../assets/Images/Project Cover (1).png";
import img2 from "../../assets/Images/Project Cover (2).png";
import img3 from "../../assets/Images/Project Cover (3).png";
import img4 from "../../assets/Images/Project Cover.png";
import view from "../../assets/Icons/Skills/view.svg";
import link from "../../assets/Icons/New folder/link.svg";
import details from "../../assets/Icons/New folder/details.svg";
import github from "../../assets/Icons/Skills/github.svg";
import { Link } from "react-router-dom";
import Ripples from "react-ripples";
import { useEffect, useRef, useState } from "react";

const ProjectCard = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const dropDownRef = useRef(null);

  const items = [
    { label: "View Details", path: "/", icon:details },
    { label: "See Live Link", path: "/", icon:link },
  ];

  const projectsDetails = [
    {
      title: "Food Share",
      subTitle: "Share food, share joy.",
      img: img1,
      technologyUsed:
        "React, Typescript, Node.JS, Express.JS, MongoDB, Firebase",
      sourceCode: "sss",
      liveLink: "sss",
    },
    {
      title: "Food Share",
      subTitle: "Share food, share joy.",
      img: img2,
      technologyUsed:
        "React, Typescript, Node.JS, Express.JS, MongoDB, Firebase",
      sourceCode: "",
      liveLink: "",
    },
    {
      title: "Food Share",
      subTitle: "Share food, share joy.",
      img: img3,
      technologyUsed:
        "React, Typescript, Node.JS, Express.JS, MongoDB, Firebase",
      sourceCode: "",
      liveLink: "",
    },
    {
      title: "Food Share",
      subTitle: "Share food, share joy.",
      img: img4,
      technologyUsed:
        "React, Typescript, Node.JS, Express.JS, MongoDB, Firebase",
      sourceCode: "",
      liveLink: "",
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpenDropdowns({});
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {projectsDetails.map((detail, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            key={index}
            className="flex flex-col gap-6"
          >
            <h1>
              <span className="text-white font-Montserrat text-xl font-semibold">
                {detail?.title} -{" "}
              </span>
              <span className="text-gray-300 font-Poppins text-base font-normal">
                {detail?.subTitle}
              </span>
            </h1>

            <img className="" src={detail?.img} alt="" />

            <h1>
              <span className="text-white font-Montserrat text-base font-semibold">
                Technology Used :{" "}
              </span>
              <span className="text-gray-300 font-Poppins text-base font-normal">
                {detail?.technologyUsed}
              </span>
            </h1>

            <div className="w-full h-[1px] bg-gradient-to-br from-blue-500 to-indigo-800"></div>

            <div className="flex items-center justify-between">
              <Link
                to={`/${detail?.sourceCode}`}
                className="flex items-center gap-2 transition duration-300 transform hover:-translate-y-0.5"
              >
                <img className="w-10" src={github} alt="" />
                <p className="text-white font-Montserrat text-base font-semibold">
                  Source Code
                </p>
              </Link>

              <div ref={dropDownRef} className="relative">
                <Ripples during={1500} onClick={() => toggleDropdown(index)}>
                  <button className="bg-gradient-to-br from-blue-500 to-indigo-800 font-Poppins py-3 px-5 text-xs sm:text-base text-white rounded sm:rounded-[7px] flex items-center gap-2">
                    View Project
                    <img src={view} alt="" />
                  </button>
                </Ripples>

                <ul
                  className={`${
                    openDropdowns[index] ? "visible" : "invisible"
                  } absolute z-50 w-full space-y-1 flex flex-col mt-1`}
                >
                  {items.map((item, idx) => (
                    <Link
                      to={item.path}
                      key={idx}
                      className={`bg-[#0E1330] border border-[#282D45] rounded-md text-white p-2 flex items-center gap-3 ${
                        openDropdowns[index]
                          ? "opacity-100 duration-500"
                          : "opacity-0 duration-150"
                      } hover:bg-gradient-to-br from-blue-500 to-indigo-800 w-full`}
                      style={{
                        transform: `translateY(${
                          openDropdowns[index] ? 0 : (idx + 1) * 10
                        }px)`,
                      }}
                    >
                      <img src={item.icon} alt="" className="size-5" />
                      {item.label}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
