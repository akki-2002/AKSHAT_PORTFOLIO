import React from "react";
import "./about.css";
import ME from "../../assets/meabout.jpg";
import { MdEngineering } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { TbLibrary } from "react-icons/tb";

function About() {
  return (
    <section id="about">
      <h4>Get To Know</h4>
      <h2>ABOUT ME</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Img" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
          <a href="#experience"><article className="about_card">
              <MdEngineering className="about_icon" />
              <h5>Experience</h5>
              <small>6 Months Internship</small>
            </article></a> 

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>Acewears & Pipetech</small>
            </article>

            <a href="#portfolio"><article className="about_card">
              <TbLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article></a> 
          </div>

          <p>
            Hello! I'm Mr. Akshat Agrawal from Navi Mumbai, Pursuing a B.Tech
            from Bharati Vidyapeeth Deemed To Be University Department of
            Engineering & Technology. I recently completed 3 Months Internship
            in Red Fiber as a Full Stack Developer. I'm passionate about coding
            in Frontend as well as Backend Programming. My Soft skills include
            Leadership, communication skills, Team collaboration & Teamwork. My
            Career objective is to pursue a dynamic role in a progressive
            organization that provides me an opportunity to upgrade myself and
            use my skills & knowledge for organizational growth.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
