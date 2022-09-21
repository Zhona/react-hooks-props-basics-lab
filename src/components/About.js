import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* if the app.s js had valur of prop.bio then it will render */}
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
