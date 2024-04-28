import AboutMe from "../AboutMe/AboutMe";
import AnimCursor from "../AnimCursor/AnimCursor";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";
import GetInTouch from "../GetInTouch/GetInTouch";
import Hero from "../Hero/Hero";
import MyServices from "../MyServices/MyServices";
import Projects from "../Projects/Projects";
import ShortResume from "../ShortResume/ShortResume";


const Home = () => {
    return (
        <div>
                <AnimCursor/>
            <Hero/>
            <AboutMe/>
            <ShortResume/>
            <Projects/>
            <MyServices/>
            {/* testimonials */}
            <Blogs/>
            <GetInTouch/>
            <Footer/>
        </div>
    );
};

export default Home;