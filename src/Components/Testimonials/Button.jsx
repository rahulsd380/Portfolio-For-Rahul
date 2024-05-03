import { useSwiper } from "swiper/react";
import leftArrow from "../../assets/Icons/New folder/left-arrow.svg";
import rightArrow from "../../assets/Icons/New folder/right-arrow (2).svg";
import Ripples from 'react-ripples'

const Button = () => {
    const swipper = useSwiper();
    return (
        <div className="flex justify-center items-center gap-8 mt-14">

                <Ripples during={1500}>
                <button onClick={() => swipper.slidePrev()} className="bg-[#1C2242] border border-[#282D45] w-14 h-14 flex justify-center items-center rounded-lg">
                        <img className="w-7" src={leftArrow} alt="" />
                    </button>
                </Ripples>
                    
                <Ripples during={1500}>
                <button onClick={() => swipper.slideNext()} className="bg-[#0696E7] border border-[#282D45] w-14 h-14 flex justify-center items-center rounded-lg">
                        <img className="w-7" src={rightArrow} alt="" />
                    </button>
                </Ripples>
                    
                </div>
    );
};

export default Button;