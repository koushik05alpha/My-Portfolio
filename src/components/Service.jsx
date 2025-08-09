import React from "react";

const Service = () => {
  return (
    <section className="service" id="service">
      <div className="title">
        <h2>
          My <span>Services</span>
        </h2>
      </div>

      <div className="container service-container">
        <div className="box overlay">
          <div className="content">
            <i className="ri-html5-fill"></i>
            <h4>Web Devlopement</h4>
            <button className="btn">Book Service</button>
          </div>
        </div>

        <div className="box overlay">
          <div className="content">
            <i className="ri-paint-fill"></i>
            <h4>Web Designing</h4>
            <button className="btn">Book Service</button>
          </div>
        </div>

        <div className="box overlay">
          <div className="content">
            <i className="ri-stack-fill"></i>
            <h4>Full Stack</h4>
            <button className="btn">Book Service</button>
          </div>
        </div>

        <div className="box overlay">
          <div className="content">
            <i className="ri-css3-fill"></i>
            <h4>App Devlopement</h4>
            <button className="btn">Book Service</button>
          </div>
        </div>

        <div className="box overlay">
          <div className="content">
            <i className="ri-bug-fill"></i>
            <h4>Bug Fixing</h4>
            <button className="btn">Book Service</button>
          </div>
        </div>

        <div className="box overlay">
          <div className="content">
            <i className="ri-javascript-fill"></i>
            <h4>JavaScript Devloper</h4>
            <button className="btn">Book Service</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
