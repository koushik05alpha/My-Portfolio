import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <div className="left">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLg7YOJPh0VGdeApfBpGIa-LC008kkuQp9See0SRVjhHvR8Jte58Wx2L_z7MplB86VBlPmQrwZo38LJZ_jE227bLROP0OvvfBlRY8ZspI9FZbo9q-bjy-7N1cujbF_mh702vTvodJ3cE_tFR1ST0ms4KghlfKeW0OMGp2r5VCGokRo6VVEIbE81f6hz0E/s1600/IMG_20230118_134427.jpg"
            alt=""
          />
        </div>
        <div className="right">
          <div className="title">
            <h2>
              About <span>Me</span>
            </h2>
          </div>
          <h3>
            I'm <span>Koushik Saha</span> a Devloper & Designer
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo
            enim voluptatibus nihil, recusandae, quisquam, eveniet dolores omnis
            nostrum perspiciatis libero saepe.
          </p>
          <button className="btn overlay">
            <span>Download CV</span>
          </button>
          <div className="container">
            <div className="progress-bar">
              <div className="outer-cricle">
                <div className="inner-cricle">
                  <div className="html-number number">
                    <h4>HTML5/CSS3</h4>
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#9b2fff" />
                    <stop offset="100%" stopColor="#ff2f48" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" strokeLinecap="round" />
              </svg>
            </div>

            <div className="progress-bar">
              <div className="outer-cricle">
                <div className="inner-cricle">
                  <div className="html-number number">
                    <h4>JavaScript</h4>
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#9b2fff" />
                    <stop offset="100%" stopColor="#ff2f48" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" strokeLinecap="round" />
              </svg>
            </div>

            <div className="progress-bar">
              <div className="outer-cricle">
                <div className="inner-cricle">
                  <div className="html-number number">
                    <h4>React JS</h4>
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#9b2fff" />
                    <stop offset="100%" stopColor="#ff2f48" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
