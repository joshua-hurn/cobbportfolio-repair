import React from "react";
import "../scss/app.scss"



const Meet = () => {
  return (
    <div className="meetcontent">
      <img
        className="meetimage"
        src="https://i.imgur.com/laAGjHj.jpg"
        alt="christopher's headshot"
      />
      <h6 className="descriptions">
        <a href="https://drive.google.com/file/d/1mahVWLWJhYzvnhymwsCzwbl-7A6xR-l9/view?usp=sharing">
          <h6 className="resume">Resume</h6>
        </a>
        <br />
        Developer - More info about myself. 
         <br />
        <br /> Insert more information about myself here.  <br />
        <br />
        And, developing is art. It is starting with nothing and building an app
        that is equally inviting, responsive, and captivating. <br />
        <br />
        I've spent the last 10 years as a chef in multiple roles.
        <br />
        I'm a full stack developer who most enjoys working with React, node.js,
        ExpressJS, and mySQL.
        <br />
        <br />
        My name is Christopher, and I look forward to bringing your vision to life.
      </h6>
    </div>
  );
};

export default Meet;
