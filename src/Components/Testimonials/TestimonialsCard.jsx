import star from "../../assets/Icons/New folder/star.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Button from "./Button";
import { useGetAllEndorsementsQuery } from "../../redux/Features/Endorsements/endorsementsApi";
import formatDate from "../../utils/convertDate";

const TestimonialsCard = () => {
  const { data } = useGetAllEndorsementsQuery();
  return (
    <div className="">
      <Swiper
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
        {data?.data?.map((detail) => (
          <SwiperSlide key={detail?.index}>
            <div className="mt-10 bg-[#0E1330] border border-[#282D45] rounded-[20px] p-5">
              <div className="flex items-center gap-5">
                <img src={detail?.authorImg} alt="" className="size-[75px] rounded-lg object-cover" />
                <div>
                  <h1 className="text-white text-opacity-90 font-Lato text-2xl font-semibold">
                    {detail?.name}
                  </h1>

                  <p className="text-white text-opacity-50 font-Poppins mt-2">
                    {detail?.occupation}
                  </p>


                </div>
              </div>


              <p className="text-white font-Poppins text-[12px] md:text-[14px] font-normal mt-6">
                {detail?.feedback}
              </p>

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center justify-center gap-3">
                  {[...Array(detail.rating)].map((_, index) => (
                    <img
                      key={index}
                      src={star}
                      alt="star"
                      className="size-6"
                    />
                  ))}
                </div>
                <p className="text-white text-opacity-50 font-Montserrat text-base font-normal">
                  {formatDate(detail.createdAt)}
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
