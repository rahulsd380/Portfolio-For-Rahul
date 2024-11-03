import { Link } from "react-router-dom";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineDescription, MdOutlineFeaturedPlayList } from "react-icons/md";
import { GiPin } from "react-icons/gi";
import Ripples from 'react-ripples';
import view from "../../assets/Icons/Skills/view.svg";
import github from "../../assets/Icons/Skills/github.svg";
import { IoTimerOutline } from "react-icons/io5";

const Details = () => {
    const features = [
        "kjaskanasd",
        "adsfsdffs",
        "sdfsdfsdfsd",
        "sdfsdfsdfsd"
    ]
    return (
        <div className="bg-[#0E1330] border border-[#282D45] rounded-lg w-full xl:w-[35%] h-fit p-3">
            {/* Project Overview */}
            <div>
                <h1 className="text-white font-Montserrat font-semibold flex items-center gap-3">
                    <MdOutlineDescription className="text-orange-500 text-xl" />
                    Project Overview
                </h1>
                <p className="text-[#ACACAC] font-Poppins text-sm leading-5 capitalize  group-hover:text-white mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga minus enim, earum adipisci rem quod, voluptatibus, repudiandae ea maiores consequuntur alias rerum dolores reprehenderit! Fugit id maxime aspernatur
                </p>
            </div>

            {/* Technology used */}
            <div>
                <h1 className="text-white font-Montserrat font-semibold mt-5 flex items-center gap-3">
                    <GrTechnology className="text-blue-500 text-xl" />
                    Technology Used
                </h1>
                <p className="text-[#ACACAC] font-Poppins text-sm leading-5 capitalize  group-hover:text-white mt-2">
                    React.js, Tailwind CSS, Typescript
                </p>
            </div>

            {/* Project duration */}
            <div>
                <h1 className="text-white font-Montserrat font-semibold mt-5 flex items-center gap-3">
                    <IoTimerOutline className="text-yellow-600 text-xl" />
                    Project Duration
                </h1>
                <p className="text-[#ACACAC] font-Poppins text-sm leading-5 capitalize  group-hover:text-white mt-2">
                    June 2024 - July 2024
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
                        features.map((feature, index) =>
                            <div key={index} className="text-[#ACACAC] font-Poppins text-sm leading-5 capitalize mt-2 flex items-center gap-3">
                                <GiPin className="text-purple-500 text-xl" />
                                {feature}
                            </div>
                        )
                    }
                </div>

            </div>


            <div className="flex items-center gap-5 mt-5 w-full">

                <Ripples className="w-full" during={1500}>
                    <Link
                        className="flex items-center gap-2 bg-[#00042B] border border-[#282D45] font-Poppins py-3 px-1 mobileLg:px-3  sm:text-base text-white rounded sm:rounded-[10px] w-full"
                    >
                        <img className="w-5" src={github} alt="" />
                        Source Code
                    </Link>
                </Ripples>

                <Ripples className="w-full" during={1500}>
                    <Link
                        className="flex items-center gap-2 bg-gradient-to-br from-blue-500 to-indigo-800 font-Poppins py-3 px-1 mobileLg:px-3  sm:text-base text-white rounded sm:rounded-[10px] w-full"
                    >
                        <img src={view} alt="" className="w-4" />
                        View Project
                    </Link>
                </Ripples>
            </div>



        </div>
    );
};

export default Details;