import React from "react";
import { Fade } from "react-swift-reveal";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { experience } from "../../portfolio"
import ExperienceImg from "./ExperienceImg";
import ExperienceContainer from "../../containers/experiencecontainer/ExperienceContainer";
function Experience(props) {
  const theme = props.theme;
  return (
    <div className="experience-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div>
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                {experience.title}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                {experience["subtitle"]}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {experience["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <ExperienceContainer sections={experience["sections"]} theme={theme} />
      <Footer theme={theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Experience;
