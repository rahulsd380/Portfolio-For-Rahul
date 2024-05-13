import html from "../../../assets/Icons/Skills/html.svg";
import react from "../../../assets/Images/react.png";
import js from "../../../assets/Images/js.png";
import ts from "../../../assets/Images/ts.png";
import tailwindcss from "../../../assets/Images/tailwind.png";
import node from "../../../assets/Images/nodejs.png";
import mongodb from "../../../assets/Images/mongodb.png";
import github from "../../../assets/Images/github.png";
import css from "../../../assets/Images/css.png";
import "./CircularAnimatedImg.css";

const CircularAnimatedImg = () => {
  return (
    <div className="container">
      <div className="hero-circle">
        <img className="inner-img animate-pulse" src={react} alt="" />
        <div className="hero-rotate" id="circle">
          <div className="planet">
            <img src={css} alt="" />
          </div>
          <div className="planet">
            <img src={js} alt="" />
          </div>
          <div className="planet">
            <img src={ts} alt="" />
          </div>
          <div className="planet">
            <img className="" src={tailwindcss} alt="" />
          </div>
          <div className="planet">
            <img src={node} alt="" />
          </div>
          <div className="planet">
            <img src={mongodb} alt="" />
          </div>
          <div className="planet">
            <img src={github} alt="" />
          </div>
          <div className="planet">
            <img src={html} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularAnimatedImg;
