import { IoIosReturnLeft } from "react-icons/io";
import img from "../../assets/Images/Project Cover (3).png"
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const BlogDetails = () => {
    const location = useLocation();
    const contents = [
        {
            title : "New Blog",
            path : "/blog"
        },
        {
            title : "Old Blog",
            path : "/olf-blog"
        },
        {
            title : "Upcoming Blog",
            path : "/upcoming-blog"
        },
    ]
    return (
        <div className="max-w-6xl mx-auto mt-14 px-3 xl:px-0">
            {/* Header with title back icon */}
            <div className="flex items-center justify-between pb-4 border-b border-[#282D45]">
                <h1 className="text-white font-Montserrat text-xl md:text-2xl font-semibold capitalize">
                    Lorem ipsum dolor sit amet consectetur adip
                </h1>

                <IoIosReturnLeft className="text-blue-500 text-3xl cursor-pointer" />
            </div>

            <img src={img} alt="" className="size-full rounded-3xl max-h-[700px] mt-8" />

            <div className="flex flex-col lg:flex-row gap-12 mt-8">


                {/* left side blog description */}

                <div className="w-full xl:w-[70%]">
                    <p className="text-white font-Poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quo repudiandae dignissimos odio reprehenderit officiis accusamus sed dolorum corrupti ad reiciendis ea esse fugiat excepturi molestias cumque voluptates adipisci nostrum quisquam sapiente, quaerat cupiditate. Ratione et excepturi quos expedita, maxime aut similique dolor! Enim alias commodi autem ratione? Error, velit odio omnis explicabo doloribus ut quasi ipsum aliquid deleniti voluptatem sunt vitae, culpa illum modi quibusdam temporibus consequatur. Nam ut laborum consequatur quasi ullam. Impedit officiis tempore neque minus magnam dolorem iure odio error quas. Officiis rem tenetur quisquam incidunt quod, quaerat cumque, suscipit odio dolorem enim, exercitationem assumenda nulla!</p>
                </div>

                <div className="bg-[#0E1330] border border-[#282D45] rounded-lg w-full xl:w-[30%] h-fit p-3">
                    <h1 className="text-white font-Montserrat font-semibold flex items-center gap-3 pb-4 border-b border-[#282D45]">
                        <MdOutlineFeaturedPlayList className="text-green-500 text-xl" />
                        Table of contents
                    </h1>
                
                
                

                <div className="mt-5 flex flex-col">
                    {
                        contents.map((content, index) => (
                            <Link key={index} to={content.path} className={`${location.pathname === content.path ? "text-white bg-blue-500/20 border-l-2 border-blue-500 w-full" : "text-[#ACACAC]"}  px-5 py-[14px] font-Poppins text-sm capitalize`}>
                            {content.title}
                            </Link>
                        ))
                    }
                </div>

                </div>
            </div>
        </div>
    );
};

export default BlogDetails;