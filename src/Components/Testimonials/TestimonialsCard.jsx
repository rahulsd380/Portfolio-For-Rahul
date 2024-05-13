import quotationRight from "../../assets/Icons/New folder/bxs_quote-left (1).svg";
import quotationLeft from "../../assets/Icons/New folder/bxs_quote-left.svg";
import img from "../../assets/Icons/New folder/58.png";
import stars from "../../assets/Icons/New folder/stars.svg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Button from "./Button";

const TestimonialsCard = () => {
  const testimonialsDetails = [
    {
      index: 1,
      quotation: quotationLeft,
      review:
        "Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper",
      clientName: "Mr Jone Dose",
      clientImg: img,
      profession: "Founder of FashionFusion",
    },
    {
      index: 2,
      quotation: quotationRight,
      review:
        "Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper",
      clientName: "Mr Jone Dose",
      clientImg: img,
      profession: "Founder of FashionFusion",
    },
    {
      index: 3,
      quotation: quotationLeft,
      review:
        "Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper",
      clientName: "Mr Jone Dose",
      clientImg: img,
      profession: "Founder of FashionFusion",
    },
    {
      index: 4,
      quotation: quotationRight,
      review:
        "Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper",
      clientName: "Mr Jone Dose",
      clientImg: img,
      profession: "Founder of FashionFusion",
    },
  ];
  return (
    <div className="">
        <Swiper
          navigation={true}
          modules={[]}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            375: {
              slidesPerView: 1,
            },
            425: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
            1366: {
              slidesPerView: 2,
            },
            1920: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={50}
          className="carousel"
        >
          {testimonialsDetails?.map((detail) => (
            <SwiperSlide key={detail?.index}>
              <div className="mt-10 bg-[#0E1330] border border-[#282D45] rounded-[20px] p-5">
              <div className="flex items-center gap-5">
                  <img src={detail?.clientImg} alt="" />
                  <div>
                    <h1 className="text-white text-opacity-90 font-Lato text-2xl font-semibold">
                      {detail?.clientName}
                    </h1>

                    <p className="text-white text-opacity-50 font-Poppins mt-2">
                      {detail?.profession}
                    </p>

                    
                  </div>
                </div>
                

                <p className="text-white font-Poppins text-[12px] md:text-[14px] font-normal mt-6">
                  {detail?.review}
                </p>

                <div className="flex justify-between items-center mt-4">
                <img src={stars} alt="" />
                <p className="text-white text-opacity-50 font-Montserrat text-base font-normal">
                Friday,January 21 
                </p>
                </div>

              

                
              </div>
            </SwiperSlide>
          ))}
          <Button />
        </Swiper>
    </div>
  );
};

export default TestimonialsCard;
