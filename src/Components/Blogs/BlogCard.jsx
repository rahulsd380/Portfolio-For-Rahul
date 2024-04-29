import img1 from "../../assets/Images/1EC32BFF-A43A-40F3-85EF-BDDAE063ECD8.png";
import rihtArrow from "../../assets/Icons/New folder/right-arrow.svg";
import { useState } from "react";

const BlogCard = () => {
  const blogDetails = [
    {
      id: 1,
      img: img1,
      title: "Build prototypes with thousands of components.",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
    },
    {
      id: 2,
      img: img1,
      title: "Build prototypes with thousands of components.",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
    },
    {
      id: 3,
      img: img1,
      title: "Build prototypes with thousands of components.",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
    },
  ];

  const [isModalOpen, setIsModakOpen] = useState(false);
  console.log(isModalOpen);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {blogDetails.map((detail) => (
        <div
        data-aos="fade-up" 
        data-aos-duration="2000"
          key={detail?.id}
          className="flex flex-col gap-5 bg-[#0E1330] border border-[#282D45] rounded-3xl"
        >
          <img className="rounded-t-3xl" src={detail?.img} alt="" />
          <h1 className="font-Poppins text-[18px] font-semibold text-white px-5">
            {detail?.title}
          </h1>
          <p className="font-Poppins text-base font-normal text-[#939393] px-5">
            {detail?.description}
          </p>
          <button onClick={() => setIsModakOpen(!isModalOpen)} className="font-Poppins text-base font-semibold text-[#0696E7] underline px-5 transition duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 pb-5 w-[157px]">
            Read more
            <img className="w-5" src={rihtArrow} alt="" />
          </button>
        </div>
      ))}

      <div onClick={() => setIsModakOpen(false)} className={`fixed z-[100] flex items-center justify-center ${isModalOpen ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 h-full w-full mx-auto backdrop-blur-sm duration-100 `}>

        <div className={`absolute w-full h-[300px] bg-[#0E1330] p-5 border border-[#282D45] rounded-xl text-white drop-shadow-2xl sm:w-[500px] ${isModalOpen ? 'opacity-1 translate-y-0 duration-300' : '-translate-y-20 opacity-0 duration-150'}`}>
        hi
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
