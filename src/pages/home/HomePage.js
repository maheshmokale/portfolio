import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Skills from "../../skills/Skills"
import Greeting from "../../greeting/Greeting"

function HomePage(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default HomePage;
