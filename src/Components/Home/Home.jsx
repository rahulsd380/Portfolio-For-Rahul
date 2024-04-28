import AboutMe from "../AboutMe/AboutMe";
import Blogs from "../Blogs/Blogs";
import GetInTouch from "../GetInTouch/GetInTouch";
import Hero from "../Hero/Hero";
import MyServices from "../MyServices/MyServices";
import Projects from "../Projects/Projects";
import ShortResume from "../ShortResume/ShortResume";


const Home = () => {
    return (
        <div>
            <div className="">
            <Hero/>
            </div>
            <AboutMe/>
            <ShortResume/>
            <Projects/>
            <MyServices/>
            {/* testimonials */}
            <Blogs/>
            <GetInTouch/>
        </div>
    );
};

export default Home;