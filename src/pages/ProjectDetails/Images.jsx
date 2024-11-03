import { useRef } from 'react';
import LightGallery from 'lightgallery/react';
import img from "../../assets/Images/Project Cover (3).png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import { Navigation } from 'swiper/modules';
import lgZoom from 'lightgallery/plugins/zoom';

const Images = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="relative bg-[#0E1330] border border-[#282D45] rounded-lg h-[500px] group">
            <LightGallery speed={500} plugins={[lgZoom]} mode="lg-fade">
                <Swiper
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {[...Array(5)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <a href={img}> {/* LightGallery needs anchor tags for images */}
                                <img src={img} alt={`Slide ${index + 1}`} className="size-full rounded-lg h-[500px]" />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </LightGallery>

            {/* Custom Previous Button */}
            <button
                ref={prevRef}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 text-white bg-[#282D45] hover:bg-blue-500 duration-300 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <FaChevronLeft size={24} />
            </button>

            {/* Custom Next Button */}
            <button
                ref={nextRef}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 text-white bg-[#282D45] hover:bg-blue-500 duration-300 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <FaChevronRight size={24} />
            </button>
        </div>
    );
};

export default Images;
