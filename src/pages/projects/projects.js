import React from "react";
import "./projects.css";
import hcImage from "../../assets/hc.png";
import formBulderImage from "../../assets/formbuilder.png";
import twiceShopImage from "../../assets/twiceShop.png";
import PmaGridImage from "../../assets/PMA Gird.png";
import noImg from "../../assets/No_picture_available_png.png";
import co2 from "../../assets/co2.jpg";

const Projects = () => {
  return (
    <div className="projects mt-4 d-flex p-3">
      {/* Web Projects */}
      <div className="col-md-6 webprojects p-5 rounded">
        <h1 class="mb-5">DarkSpot Projects</h1>
        {/* Repeat this structure for each web project */}
        <div className="row mt-3 mb-3 p-5 border-bottom">
          {/* Thumbnail */}
          <div className="col-md-4">
            <img
              src={PmaGridImage}
              alt="EuCannaJobs Thumbnail"
              className="img-fluid"
            />
          </div>
          {/* Project Name and Details */}
          <div className="col-md-8">
            <h3>PMA - Grid</h3>
            <p>Details about the project...</p>
          </div>
        </div>
        <div className="row mb-3 p-5 border-bottom">
          {/* Thumbnail */}
          <div className="col-md-4">
            <img
              src={formBulderImage}
              alt="EuCannaJobs Thumbnail"
              className="img-fluid"
            />
          </div>
          {/* Project Name and Details */}
          <div className="col-md-8">
            <h3>React Form Builder</h3>
            <p>Details about the project...</p>
          </div>
        </div>
        <div className="row mb-3 p-5 border-bottom">
          {/* Thumbnail */}
          <div className="col-md-4">
            <img
              src={noImg}
              alt="EuCannaJobs Thumbnail"
              className="img-fluid"
            />
          </div>
          {/* Project Name and Details */}
          <div className="col-md-8">
            <h3>MP Expense App</h3>
            <p>Details about the project...</p>
          </div>
          {/* Project Name and Details */}
        </div>
        <div className="row mb-3 p-5 border-bottom">
          {/* Thumbnail */}
          <div className="col-md-4">
            <img
              src={twiceShopImage}
              alt="EuCannaJobs Thumbnail"
              className="img-fluid"
            />
          </div>
          {/* Project Name and Details */}
          <div className="col-md-8">
            <h3>Twice Shop</h3>
            <p>Details about the project...</p>
          </div>
          {/* Project Name and Details */}
        </div>
        <div className="row mb-3 p-5 border-bottom">
          {/* Thumbnail */}
          <div className="col-md-4">
            <img
              src={hcImage}
              alt="EuCannaJobs Thumbnail"
              className="img-fluid"
            />
          </div>
          {/* Project Name and Details */}
          <div className="col-md-8">
            <h3>Habit Companion</h3>
            <p>Details about the project...</p>
          </div>
        </div>
      </div>

      {/* Product Prototypes */}
      <div className="col-md-6 prototypes p-5">
        <h1 class="mb-5">HCX/Absi</h1>
        <p>
          *Signed an NDA so I can't provide images and details about the
          projects *
        </p>
        <div className="row mt-2 mb-3 p-5 border-bottom ">
          {/* Thumbnail */}
          <div className="col-md-4">
            <img src={noImg} alt="Prototype Thumbnail" className="img-fluid" />
          </div>
          {/* Project Name and Details */}
          <div className="col-md-8">
            <h3>Emergency Employee Assistance</h3>
            <p>Details about the prototype...</p>
          </div>
        </div>
        <div className="row mb-3 p-5 border-bottom ">
          {/* Thumbnail */}
          <div className="col-md-4">
            <img src={noImg} alt="Prototype Thumbnail" className="img-fluid" />
          </div>
          {/* Project Name and Details */}
          <div className="col-md-8">
            <h3>Job Portal</h3>
            <p>Details about the prototype...</p>
          </div>
        </div>
        <div className="row mb-3 p-5 border-bottom">
          {/* Thumbnail */}
          <div className="col-md-4">
            <img
              src={noImg}
              alt="EuCannaJobs Thumbnail"
              className="img-fluid"
            />
          </div>
          {/* Project Name and Details */}
          <div className="col-md-8">
            <h3>Employee Management System</h3>
            <p>Details about the project...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
