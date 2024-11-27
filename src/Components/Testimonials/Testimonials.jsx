import Heading from "../Reusable/Heading";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <div className="mt-[80px] bg-[#0E1330] py-[100px] relative">
      <div className="hidden lg:block w-[400px] h-[400px] rounded-full bg-[#0696e799] bg-opacity-30 blur-[250px] absolute top-[50px] left-2"></div>

      <div className="">
        <Heading
          subHeading={"Experience With Me"}
          heading={"Endorsements"}
        />

        <div className="max-w-6xl mx-auto px-3 xl:px-0">
          <TestimonialsCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
