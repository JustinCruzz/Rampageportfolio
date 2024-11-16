import React from "react";
import "./Projects.css";
import music from "../asset/music.jpg";
import gov from "../asset/govern.jpeg";

export default function Projects() {
  return (
    <div>
      <div className="projects font">
        <h1><u>PROJECTS</u></h1>
        <div className="cards ">
          <div className="card ">
            <img src={music} alt="MUSIC " />
            <h1>Music Genre Classification with Imbalance Handling</h1>
            <p>
              Developed a machine learning model to classify music tracks into
              various genres, focusing on addressing data imbalance issues. This
              project utilized techniques such as SMOTE and undersampling to
              improve classification accuracy across underrepresented genres.
            </p>
          </div>
          <div className="card ">
            <img src={gov} alt="Government " />
            <h1>E-Governance Review Collecting System</h1>
            <p>
              Built a web-based platform to collect and manage citizen feedback
              on government services. This system enables streamlined data
              collection, analysis, and visualization, providing valuable
              insights to enhance public service efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
