import img1 from "../../assets/Images/1EC32BFF-A43A-40F3-85EF-BDDAE063ECD8.png";
import rihtArrow from "../../assets/Icons/New folder/right-arrow.svg";
import comment from "../../assets/Icons/New folder/comment.svg";
import like from "../../assets/Icons/New folder/like.svg";
import commentimg from "../../assets/Images/commentimg.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  const [isOpen, setIsOpen] = useState(null);
  const accordionsData = [{title: "How do I create an account?", description: 'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',}, {title: "What is your return policy?", description:"Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",}, {title: "Can I change my shipping address?", description:"Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",}, {title: "Are there any discounts for loyal customers?", description: "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",},];
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const modalContainer = document.getElementById("closeModal");
      if (isModalOpen && !modalContainer.contains(event.target)) {
        setIsModakOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleOutsideClick);
  
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen]);
  


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
          <Link to={"/blog"} className="font-Poppins text-base font-semibold text-[#0696E7] underline px-5 transition duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 pb-5 w-[157px]">
            Read more
            <img className="w-5" src={rihtArrow} alt="" />
          </Link>
          {/* <button onClick={() => setIsModakOpen(!isModalOpen)} className="font-Poppins text-base font-semibold text-[#0696E7] underline px-5 transition duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 pb-5 w-[157px]">
            Read more
            <img className="w-5" src={rihtArrow} alt="" />
          </button> */}
        </div>
      ))}

      <div onClick={() => setIsModakOpen(false)} className={`fixed z-[100] flex items-center justify-center ${isModalOpen ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 h-full w-full mx-auto backdrop-blur-sm duration-100 `}>

        <div id="closeModal" style={{ overflowY: 'auto', scrollbarWidth: 'thin' }} className={`absolute w-[600px] h-[460px] bg-[#0E1330] p-5 border border-[#282D45] rounded-xl text-white drop-shadow-2xl ${isModalOpen ? 'opacity-1 translate-y-0 duration-300' : '-translate-y-20 opacity-0 duration-150'}`}>
        <img className="w-full rounded-xl" src={img1} alt="" />

        <div className="flex justify-between items-center mt-5">
        <p className="text-[#F0F0F0] font-Poppins text-base font-normal">Published in. <span className="text-[#ADAAAA]">6 min read.  Jun 10, 2019</span></p>

<div className="flex items-center gap-5">
<div className="flex items-center gap-2">
  <div className="bg-[#0E1330] w-8 h-8 rounded-full border border-[#282D45] flex justify-center items-center">
<img className="w-5" src={like} alt="" />
  </div>
<p className="text-[#F0F0F0] font-Poppins text-lg font-normal">15</p>
</div>

<div className="flex items-center gap-2">
  <div className="bg-[#0E1330] w-8 h-8 rounded-full border border-[#282D45] flex justify-center items-center">
<img className="w-5" src={comment} alt="" />
  </div>
<p className="text-[#F0F0F0] font-Poppins text-lg font-normal">10</p>
</div>
</div>
        </div>

        <h1 className="font-Poppins text-[24px] font-semibold text-white mt-9">
        Build prototypes with thousands of components.
          </h1>

          <p className="text-[#ADAAAA] font-Poppins text-base font-normal mt-6">Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper per tem por legere me doming ngue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue vulputate velit esse molestiesoluta nobis.</p>
          
          <p className="text-[#ADAAAA] font-Poppins text-base font-normal mt-7">Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper per tem por legere me doming ngue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue vulputate velit esse molestiesoluta nobis.</p>


          <div className="w-full h-[1px] bg-gradient-to-br from-blue-500 to-indigo-800 mt-6"></div>


          <h1 className="font-Poppins text-[24px] font-semibold text-white mt-6 ">
        Comments(5)
          </h1>


          <div className=" rounded-lg font-sans">
        {accordionsData.map((PerAccordion, idx) => (
          <div key={idx} className="border-b border-gray-500 last-of-type:border-none">
            <button onClick={() => toggle(idx)} className="flex h-full w-full items-center justify-between py-4 font-medium text-white dark:text-black">
              <span className="sm:text-lg md:text-xl">{PerAccordion.title}</span>
              <span className="rounded-full p-2 ">
                <svg className="ml-8 mr-7 shrink-0 fill-[#fff]" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <rect y="7" width="16" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                  <rect y="7" width="16" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                </svg>
              </span>
            </button>
            <div className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">{PerAccordion.description}</div>
            </div>
          </div>
        ))}
      </div>

          <div className="flex items-center gap-4 mt-10">
                  <img src={commentimg} alt="" />
                  <div>
                    <h1 className="text-white font-Lato text-xl font-semibold">
                    Riyad Bhuiyan
                    </h1>

                    <p className="text-[#ADAAAA] text-[12px] font-Poppins mt-1">
                    Jun 10, 2019
                    </p>

                    
                  </div>
                </div>

                <p className="text-[#ADAAAA] font-Poppins text-base font-normal mt-4">Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper per tem por legere me doming ngue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue vulputate velit esse molestiesoluta nobis.</p>

                <div className="w-full h-[1px] bg-[#ADAAAA] bg-opacity-70 mt-4"></div>

        </div>
      </div>
    </div>
  );
};

export default BlogCard;
