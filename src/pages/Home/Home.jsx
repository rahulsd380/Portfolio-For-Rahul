import { useEffect, useState } from "react";
// import InfoCard from "../InfoCard/InfoCard";
// import SmoothScroll from "../SmoothScroll/SmoothScroll.jsx";
import PreLoader from './../../Components/PreLoader/PreLoader';
import AnimCursor from './../../Components/AnimCursor/AnimCursor';
import Navbar from './../../Components/Navbar/Navbar';
import Hero from './../../Components/Hero/Hero';
import AboutMe from './../../Components/AboutMe/AboutMe';
import ShortResume from './../../Components/ShortResume/ShortResume';
import Projects from './../../Components/Projects/Projects';
import MyServices from './../../Components/MyServices/MyServices';
import Testimonials from './../../Components/Testimonials/Testimonials';
import Blogs from './../../Components/Blogs/Blogs';
import GetInTouch from './../../Components/GetInTouch/GetInTouch';
import Footer from './../../Components/Footer/Footer';
import Education from "../../Components/Education/Education";
import Experience from "../../Components/Experience/Experience";

const Home = () => {
  const [isLoading, setISLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setISLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        // <SmoothScroll>
        <>
          <AnimCursor />
          <Navbar />
          <Hero />
          {/* <InfoCard /> */}
          <AboutMe />
          <ShortResume />
          <div className="mt-12 text-white bg-[#0E1330] py-[100px] relative">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
            <Education/>
            <Experience/>
          </div>
          <div className="hidden lg:block size-[400px] rounded-full bg-[#0696e799] bg-opacity-30 blur-[280px] absolute top-[50px] left-10"></div>
          <div className="hidden lg:block size-[400px] rounded-full bg-[#0696e799] bg-opacity-30 blur-[250px] absolute top-[50px] right-10"></div>
          </div>
          <Projects />
          <MyServices />
          <Testimonials />
          <Blogs />
          <GetInTouch />
          <Footer />
          </>
        // </SmoothScroll>
      )}
    </>
  );
};

export default Home;
