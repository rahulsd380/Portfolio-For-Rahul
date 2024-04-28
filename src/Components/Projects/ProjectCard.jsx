import img1 from "../../assets/Images/Project Cover (1).png";
import img2 from "../../assets/Images/Project Cover (2).png";
import img3 from "../../assets/Images/Project Cover (3).png";
import img4 from "../../assets/Images/Project Cover.png";
import view from "../../assets/Icons/Skills/view.svg";
import github from "../../assets/Icons/Skills/github.svg";
import { Link } from "react-router-dom";
import Ripples from 'react-ripples'

const ProjectCard = () => {
    const projectsDetails = [
        {
            title : "Food Share",
            subTitle : "Share food, share joy.",
            img : img1,
            technologyUsed : "React, Typescript, Node.JS, Express.JS, MongoDB, Firebase",
            sourceCode : "sss",
            liveLink : "sss"
        },
        {
            title : "Food Share",
            subTitle : "Share food, share joy.",
            img : img2,
            technologyUsed : "React, Typescript, Node.JS, Express.JS, MongoDB, Firebase",
            sourceCode : "",
            liveLink : ""
        },
        {
            title : "Food Share",
            subTitle : "Share food, share joy.",
            img : img3,
            technologyUsed : "React, Typescript, Node.JS, Express.JS, MongoDB, Firebase",
            sourceCode : "",
            liveLink : ""
        },
        {
            title : "Food Share",
            subTitle : "Share food, share joy.",
            img : img4,
            technologyUsed : "React, Typescript, Node.JS, Express.JS, MongoDB, Firebase",
            sourceCode : "",
            liveLink : ""
        },
    ]
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {
                    projectsDetails.map((detail, index) => 
                    <div key={index} className="flex flex-col gap-6">
                    <h1><span className="text-white font-Montserrat text-xl font-semibold">{detail?.title} - </span> - 
                    <span className="text-gray-300 font-Poppins text-base font-normal">{detail?.subTitle}</span></h1>

                    <img src={detail?.img} alt="" />

                    <h1><span className="text-white font-Montserrat text-base font-semibold">Technology Used : </span> 
                    <span className="text-gray-300 font-Poppins text-base font-normal">{detail?.technologyUsed}</span></h1>

                    <div className="w-full h-[1px] bg-gradient-to-br from-blue-500 to-indigo-800"></div>

                    <div className="flex items-center justify-between">


                        <Link to={`/${detail?.sourceCode}`} className="flex items-center gap-2 transition duration-300 transform hover:-translate-y-0.5">
                        <img className="w-10" src={github} alt="" />
                        <p className="text-white font-Montserrat text-base font-semibold">Source Code</p>
                            
                        </Link>

                        <Ripples during={1500}>
                        <Link to={`/${detail?.liveLink}`} className="bg-gradient-to-br from-blue-500 to-indigo-800 font-Poppins py-3 px-5 text-xs sm:text-base text-white rounded sm:rounded-[7px] flex items-center gap-2 transition duration-300 transform hover:-translate-y-0.5">
                VIew Project
          
        <img src={view} alt="" />
        </Link>
                        </Ripples>

                
                </div>

                {/* <div className="w-full h-[1px] bg-gradient-to-br from-blue-500 to-indigo-800"></div> */}
                </div>
                )
                }
            </div>
        </div>
    );
};

export default ProjectCard;