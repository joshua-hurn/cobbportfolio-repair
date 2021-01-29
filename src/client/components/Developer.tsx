import React from "react";
import "../scss/app.scss"

const Developer = () => {
  return (
    <div id="developer">
      <h1 className="pagetitles">Projects</h1>
      <div className="projects">
        <div className="portal">
          <a href="https://quiet-basin-68498.herokuapp.com/">
            <h2 className="projecttitles">Professional Development Portal</h2>
          </a>
          <p className="projectdesc">
            Final project for Innovate Birmingham Full Stack Web Development
            Bootcamp. My team designed, developed and implemented a 'student'
            portal for use by future candidates of the program. Students in both
            the web development and data analytics programs can use this portal
            to organize their resources and maintain their professional
            development progress throughout their bootcamp experience. Innovate
            Birmingham Administrators will have the ability to offer feedback
            and track students’ progress throughout the course. Front end:
            ReactJS, Typescript, Bootstrap, Sass, npm | Backend: node.js,
            ExpressJS, mySQL
            <br />
            <br />
          </p>
          <img
            className="images"
            src="https://i.imgur.com/sfWKqu2.png"
            alt="thumbnail"
          />
          <div className="sitelinks">
            <a href="https://quiet-basin-68498.herokuapp.com/">
              <p className="linksite">site |</p>
            </a>
            <a href="https://github.com/sage-productions/innovate-bham-candidate-portal">
              <p className="linksite">&nbsp;code</p>
            </a>
          </div>
        </div>
        {/* <div className="blog">
          <a href="link">
            <h2 className="projecttitles">Personal Blog</h2>
          </a>
          <p className="projectdesc">
            A full stack personal blog site. Developed using Typescript, React,
            node.js, ExpressJS, mySQL.
            <br />
            <br />
          </p>
          <img className="images" src="link" alt="thumbnail" />
          <a href="link">
            <p className="linksite">&nbsp;code</p>
          </a>
        </div> */}
      </div>
    </div>
  );
};
export default Developer;
