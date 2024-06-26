import { useEffect, useState } from "react";
import AboutMe from "../AboutMe/AboutMe";
import AnimCursor from "../AnimCursor/AnimCursor";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";
import GetInTouch from "../GetInTouch/GetInTouch";
import Hero from "../Hero/Hero";
import MyServices from "../MyServices/MyServices";
import Projects from "../Projects/Projects";
import ShortResume from "../ShortResume/ShortResume";
import PreLoader from "../PreLoader/PreLoader";
import Navbar from "../Navbar/Navbar";
import Testimonials from "../Testimonials/Testimonials";
import InfoCard from "../InfoCard/InfoCard";

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
        <div>
          <AnimCursor />
          <Navbar />
          <Hero />
          {/* <InfoCard /> */}
          <AboutMe />
          <ShortResume />
          <Projects />
          <MyServices />
          <Testimonials />
          <Blogs />
          <GetInTouch />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
