/* eslint-disable no-unsafe-optional-chaining */
import { useLoaderData } from "react-router-dom";
import { GrTechnology } from "react-icons/gr";
import { MdOndemandVideo } from "react-icons/md";
import { IoIosReturnLeft } from "react-icons/io";
import { useState } from "react";
import Images from "./Images";
import TechnologyUsed from "./TechnologyUsed";
import NoVideo from "./NoVideo";
import Details from "./Details";

const ProjectDetails = () => {
    const [tab, setTab] = useState("Technology Used")
    const projectDetails = useLoaderData();
    console.log(projectDetails);

    const { name, tagline, images, technologyLogos } = projectDetails?.data;

    const tabButtons = [
        {
            label: "Technology Used",
            icon: <GrTechnology className="text-blue-500 text-xl" />
        },
        {
            label: "Overview Video",
            icon: <MdOndemandVideo className="text-orange-500 text-xl" />
        },
    ];
    return (
        <div className="text-white max-w-6xl mx-auto mt-14 px-3 xl:px-0">

            {/* Header with title back icon */}
            <div className="flex items-center justify-between pb-4 border-b border-[#282D45]">
                <h1>
                    <span className="text-white font-Montserrat text-xl md:text-2xl font-semibold capitalize">
                        {name} -{" "}
                    </span>
                    <span className="text-gray-300 font-Poppins text-sm md:text-base font-normal capitalize">
                        {tagline}
                    </span>
                </h1>

                <IoIosReturnLeft className="text-blue-500 text-3xl cursor-pointer" />
            </div>


            <div className="flex flex-col xl:flex-row gap-8 mt-5">
                <div className="w-full xl:w-[65%]">
                    {/* Left side */}
                    {/* Images */}
                    <Images images={images} />



                    {/* Tabs */}
                    <div className="flex items-center gap-8 pb-4 border-b border-[#282D45] mt-8">
                        {
                            tabButtons.map((button, index) =>
                                <button key={index} onClick={() => setTab(button.label)} className={`${tab === button.label ? "text-blue-500" : "text-[#ACACAC]"} font-Poppins font-medium leading-5 capitalize mt-5 flex items-center gap-3`}>
                                    {button.icon}
                                    {button.label}
                                </button>
                            )
                        }
                    </div>


                    <div className="bg-[#0E1330] border border-[#282D45] rounded-lg h-fit p-3 mt-5">
                        {
                            tab === "Technology Used" ?
                                <TechnologyUsed technologyLogos={technologyLogos} />

                                :
                                <NoVideo />
                        }

                    </div>
                </div>



                {/* Right side */}
                <Details projectDetails={projectDetails} />
            </div>

        </div>
    );
};

export default ProjectDetails;