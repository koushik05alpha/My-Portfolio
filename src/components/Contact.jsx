import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="title">
        <h2>
          Contact <span>Me</span>
        </h2>
      </div>
      <div className="contact-content">
        <div className="row">
          <div className="box">
            <div className="box-icon">
              <i className="ri-phone-line"></i>
            </div>
            <div className="box-info">
              <h3>Phone Number:</h3>
              <span>+8801731054747</span>
            </div>
          </div>

          <div className="box">
            <div className="box-icon">
              <i className="ri-home-line"></i>
            </div>
            <div className="box-info">
              <h3>Address:</h3>
              <span>5200, Dinajpur, Bangladesh</span>
            </div>
          </div>

          <div className="box">
            <div className="box-icon">
              <i className="ri-mail-line"></i>
            </div>
            <div className="box-info">
              <h3>Email Address:</h3>
              <span>Koushiksaha0022@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="row">
          <form action="" className="contact-form">
            <div className="form-box">
              <input type="text" placeholder="Enter Your Name" required />
            </div>
            <div className="form-box">
              <input type="email" placeholder="Enter Your Email" required />
            </div>
            <div className="form-box">
              <textarea name="message" id="" cols="10" rows="10"></textarea>
            </div>
            <button type="submit" className="btn overlay">
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
