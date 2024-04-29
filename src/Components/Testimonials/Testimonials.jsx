import TestimonialsCard from "./TestimonialsCard";
import leftArrow from "../../assets/Icons/New folder/left-arrow.svg";
import rightArrow from "../../assets/Icons/New folder/right-arrow (2).svg";
import Ripples from 'react-ripples'


const Testimonials = () => {
    return (
        <div className="mt-[80px] bg-[#0E1330] py-[100px] relative">

<div className="hidden lg:block w-[400px] h-[400px] rounded-full bg-[#0696e799] bg-opacity-30 blur-[250px] absolute top-[50px] left-2"></div>


            <div className="">
            <p className="text-white font-Poppins mb-5 text-center">
            Experience With me
            </p>

            <h1 className="text-[#0696E7] font-Montserrat text-5xl md:text-[40px] font-bold mb-12 text-center">Testimonials</h1>
            
                <div className="max-w-6xl mx-auto px-3 xl:px-0">
                <TestimonialsCard/>
                </div>

                <div className="flex justify-center items-center gap-8 mt-14">

                <Ripples during={1500}>
                <button className="bg-[#1C2242] border border-[#282D45] w-14 h-14 flex justify-center items-center rounded-lg">
                        <img className="w-7" src={leftArrow} alt="" />
                    </button>
                </Ripples>
                    
                <Ripples during={1500}>
                <button className="bg-[#0696E7] border border-[#282D45] w-14 h-14 flex justify-center items-center rounded-lg">
                        <img className="w-7" src={rightArrow} alt="" />
                    </button>
                </Ripples>
                    
                </div>

            </div>
        </div>
    );
};

export default Testimonials;