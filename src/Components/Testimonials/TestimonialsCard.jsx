import quotationRight from "../../assets/Icons/New folder/bxs_quote-left (1).svg";
import quotationLeft from "../../assets/Icons/New folder/bxs_quote-left.svg";
import img from "../../assets/Icons/New folder/58.png";

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
      profession: "Creative Director",
    },
    {
      index: 2,
      quotation: quotationRight,
      review:
        "Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper",
      clientName: "Mr Jone Dose",
      clientImg: img,
      profession: "Creative Director",
    },
    {
      index: 3,
      quotation: quotationLeft,
      review:
        "Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper",
      clientName: "Mr Jone Dose",
      clientImg: img,
      profession: "Creative Director",
    },
    {
      index: 4,
      quotation: quotationRight,
      review:
        "Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper",
      clientName: "Mr Jone Dose",
      clientImg: img,
      profession: "Creative Director",
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
              <div className="relative mt-10">
                {detail?.index % 2 === 1 && (
                  <img
                    className="w-10 absolute -top-9"
                    src={quotationLeft}
                    alt=""
                  />
                )}

                <p className="text-white font-Poppins text-[12px] md:text-[14px] font-normal mt-3">
                  {detail?.review}
                </p>

                {detail?.index % 2 === 0 && (
                  <div className="flex justify-end mt-4 absolute right-0">
                    <img className="w-10" src={quotationRight} alt="" />
                  </div>
                )}

                <div className="flex items-center gap-5 mt-8">
                  <img src={detail?.clientImg} alt="" />
                  <div>
                    <h1 className="text-[#0696E7] font-Montserrat text-2xl font-semibold text-center">
                      {detail?.clientName}
                    </h1>

                    <p className="text-white font-Poppins mt-2">
                      {detail?.profession}
                    </p>
                  </div>
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
