import React from "react";
import "./About.css";
import AboutImg from "../../assets/about.jpeg";
import resume from "../../assets/Omar Abdullah_KPI_CMT2.pdf";
import Info from "./Info";
import { CiViewList } from "react-icons/ci";
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My introduction</span>

      <div className="about_container container grid">
        <img src={AboutImg} alt="" className="about_img" />

        <div className="about_data">
          <Info></Info>
          <p className="about_description">
            Frontend devloper, I create web pages with UI/UX user interface
          </p>
          <a download="" href={resume} className="button button-flex">
            Download Resume{" "}
            <i className="cvicon">
              <CiViewList></CiViewList>
            </i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
