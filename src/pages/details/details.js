import React from "react";
import "./details.css"; // Your custom CSS file

const Details = () => {
  return (
    <div className="container details-container my-5">
      <section className="experience mb-5">
        <h2 className="mb-3">Experience</h2>
        <div className="card mb-3">
          <div className="card-body">
            <h3 className="card-title">HCX/Absi</h3>
            <p className="card-text">2022 - Present</p>
            <h5>Jr. Software Engineer</h5>
            <ul>
              <li>Full Stack Web Developer</li>
              <li>Dev Ops</li>
              <li>Team Lead</li>
            </ul>
            <h5>Technology Used</h5>
            <div className="d-flex justify-content-center">
              <ul>
                <li>React</li>
                <li>Next</li>
                <li>PHP</li>
                <li>NodeJs</li>
                <li>ExpressJs</li>
              </ul>
              <ul>
                <li>Angular</li>
                <li>Vue</li>
                <li>MySQL</li>
                <li>Wordpress</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h3 className="card-title">DarkSpot</h3>
            <p className="card-text">2021 - Present</p>
            <h5>Freelancer</h5>
            <ul>
              <li>Full Stack Web Developer</li>
              <li>Dev Ops</li>
            </ul>
            <h5>Technology Used</h5>

            <div className="d-flex justify-content-center">
              <ul>
                <li>React</li>
                <li>Next</li>
                <li>NodeJs</li>
                <li>ExpressJs</li>
                <li>MongoDB</li>
              </ul>
              <ul>
                <li>Ruby</li>
                <li>Typescript</li>
                <li>Jira</li>
                <li>Vue</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Repeat for more experiences */}
      </section>

      <section className="education">
        <h2 className="mb-3">Education</h2>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">
              Bachelors in Computer Science - PSU Lingayen Campus
            </h3>
            <p className="card-text">2023</p>
            {/* Additional details */}
          </div>
        </div>
        {/* Repeat for more education entries */}
      </section>
    </div>
  );
};

export default Details;
