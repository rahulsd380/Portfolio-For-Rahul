import BlogCard from "./BlogCard";


const Blogs = () => {
    return (
        <div className="max-w-6xl mx-auto mt-[80px] px-3 xl:px-0 relative">
            <div className="hidden lg:block w-[800px] h-[600px] rounded-full bg-[#0696E7]/50 bg-opacity-30 blur-[300px] absolute top-[50px] left-44"></div>


            <div className="relative z-10">
            <p className="text-white font-Poppins mb-5 text-center">
            New Every Day
            </p>

            <h1 className="text-[#0696E7] font-Montserrat text-5xl md:text-[40px] font-bold mb-12 text-center">Latest From Blog</h1>

            <div className="z-10">
            <BlogCard/>
            </div>


            </div>
        </div>
    );
};

export default Blogs;