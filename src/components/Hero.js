import React from "react";
import "./Hero.css";
import pic1 from "../asset/pic.jpg"
import mail from "../asset/Gmail.svg";
import linkedin from "../asset/Linkedin.svg";
import github from "../asset/Github.svg";

export default function Hero() {
  return (
    <div>
      <div className="container1">
        <div className="container">
          <div className="about font">
            <h1>VAMSHI RAMAVATH</h1>
            <h3>B.Tech Student in Computer Science and Engineering</h3>
            <div className="links">
              <a href="https://www.linkedin.com/in/vamshi-ramavath/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Linkedin"></img></a>
              <a href="https://github.com/JustinCruzz" target="_blank" rel="noopener noreferrer"> <img src={github} alt="GitHub"></img></a>
              <a href="mailto:ramavathvamsi4@gmail.com" target="_blank" rel="noopener noreferrer"><img src={mail} alt="Mail"></img></a>
              
            </div>
            <p>
              Computer Science and Engineering student with hands-on experience
              in software development, specializing in full-stack projects and
              data science. Skilled in Python, Java, and JavaScript, I’m
              passionate about tackling technical challenges and continuously
              expanding my knowledge.
            </p>
            <button className="resume font"><a href="../asset/Resume.pdf" download>Download RESUME</a>
            </button>
          </div>
          <div className="profilePic"> 
            <img src={pic1} alt="Profile Pic" />
          </div>
        </div>
      </div>
    </div>
  );
}
