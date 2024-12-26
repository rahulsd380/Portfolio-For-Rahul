/* eslint-disable no-unsafe-optional-chaining */
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineDescription, MdOutlineFeaturedPlayList } from "react-icons/md";
import { GiPin } from "react-icons/gi";
import Ripples from 'react-ripples';
import view from "../../assets/Icons/Skills/view.svg";
import github from "../../assets/Icons/Skills/github.svg";
import { IoTimerOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";

const Details = ({ projectDetails }) => {

    const { overview, duration, features, sourceCode, liveLink, technologyNames, category, projectType } = projectDetails?.data;

    return (
        <div className="bg-[#0E1330] border border-[#282D45] rounded-lg w-full xl:w-[35%] h-[500px] overflow-y-auto custom-scrollbar p-3">
            {/* Project Overview */}
            <div>
                <h1 className="text-white font-Montserrat font-semibold flex items-center gap-3">
                    <MdOutlineDescription className="text-orange-500 text-xl" />
                    Project Overview
                </h1>
                <p className="text-[#ACACAC] font-Poppins text-sm leading-5 capitalize  group-hover:text-white mt-2">
                    {overview}
                </p>
            </div>



            {/* Project Category */}
            <div>
                <h1 className="text-white font-Montserrat font-semibold mt-5 flex items-center gap-3">
                    <BiCategory className="text-pink-500 text-xl" />
                    Project Category
                </h1>
                <p className="text-[#ACACAC] font-Poppins text-sm leading-5 capitalize  group-hover:text-white mt-2">
                    {category}
                </p>
            </div>


            {/* Technology used */}
            <div>
                <h1 className="text-white font-Montserrat font-semibold mt-5 flex items-center gap-3">
                    <GrTechnology className="text-blue-500 text-xl" />
                    Technology Used
                </h1>
                <p className="text-[#ACACAC] font-Poppins text-sm leading-5 capitalize  group-hover:text-white mt-2">
                    {technologyNames.length > 0 ? technologyNames.join(", ") : "No technologies listed"}
                </p>
            </div>



            {/* Project duration */}
            <div>
                <h1 className="text-white font-Montserrat font-semibold mt-5 flex items-center gap-3">
                    <IoTimerOutline className="text-yellow-600 text-xl" />
                    Project Duration
                </h1>
                <p className="text-[#ACACAC] font-Poppins text-sm leading-5 capitalize  group-hover:text-white mt-2">
                    {duration}
                </p>
            </div>

            {/* Features */}
            <div>
                <h1 className="text-white font-Montserrat font-semibold mt-5 flex items-center gap-3">
                    <MdOutlineFeaturedPlayList className="text-green-500 text-xl" />
                    Features
                </h1>
                <div className="flex flex-col gap-1 ml-7">
                    {
                        features?.map((feature, index) =>
                            <div key={index} className="text-[#ACACAC] font-Poppins text-sm leading-5 capitalize mt-2 flex items-center gap-3">
                                <GiPin className="text-purple-500 text-xl" />
                                {feature}
                            </div>
                        )
                    }
                </div>

            </div>


            <div className="flex items-center gap-5 mt-5 w-full">
                {
                    projectType === "Personal" &&
                    <Ripples className="w-full" during={1500}>
                        <Link
                            to={sourceCode}
                            className="flex items-center justify-center gap-2 bg-[#00042B] border border-[#282D45] font-Poppins py-3 px-1 mobileLg:px-3  sm:text-base text-white rounded sm:rounded-[10px] w-full"
                        >
                            <img className="w-5" src={github} alt="" />
                            Source Code
                        </Link>
                    </Ripples>
                }


                <Ripples className="w-full" during={1500}>
                    <Link
                        to={liveLink}
                        className="flex items-center justify-center gap-2 bg-gradient-to-br from-blue-500 to-indigo-800 font-Poppins py-3 px-1 mobileLg:px-3  sm:text-base text-white rounded sm:rounded-[10px] w-full"
                    >
                        <img src={view} alt="" className="w-4" />
                        View Project
                    </Link>
                </Ripples>
            </div>



        </div>
    );
};

Details.propTypes = {
    projectDetails: PropTypes.shape({
        data: PropTypes.shape({
            overview: PropTypes.string.isRequired,
            duration: PropTypes.string.isRequired,
            features: PropTypes.arrayOf(PropTypes.string).isRequired,
            sourceCode: PropTypes.string.isRequired,
            liveLink: PropTypes.string.isRequired,
            technologyNames: PropTypes.arrayOf(PropTypes.string).isRequired,
            category: PropTypes.string.isRequired,
            projectType: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default Details;