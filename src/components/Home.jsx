import React from "react";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container home-container">
        <div className="left">
          <h4>Hello..........</h4>
          <h1>
            I'm<span>Koushik Saha</span>
          </h1>
          <h3>A Web Devloper</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            molestias sed harum facilis? Omnis, maiores facere aut repudiandae
            vitae, quaerat debitis voluptates repellat dignissimos id,
            voluptatibus explicabo fuga est? Nobis voluptatibus mollitia in,
            perspiciatis quos deserunt porro iste ipsa, totam, ducimus fuga
            soluta deleniti blanditiis omnis nesciunt! Ea, harum ut?
          </p>
          <button className="btn overlay">
            <span>Hire Me</span>
          </button>
          <div className="social-icons-container">
            <p>Follow me on socail media</p>
            <div className="social-icon">
              <a href="#">
                <i className="ri-facebook-line"></i>
              </a>
              <a href="#">
                <i className="ri-github-line"></i>
              </a>
              <a href="#">
                <i className="ri-twitter-line"></i>
              </a>
              <a href="#">
                <i className="ri-linkedin-line"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYWGYUvqmGYY3p9frWLnZoapcpgqkctfSAV0-NTd-uAm-v0PKHiomfmxaWVymuyVhbuXKkdz2Yqnr6zsC4Kz_xIIFXUZyLRK43D37dJhPIKt_DrPO0YO1sxJyySvfjagITlc2_kHu9MMUyiaqtNmxjRbx7XejgAdSc6rzbRziwuNJW3b8HGrLRBqrKi_U/s1600/IMG_20230120_220806.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
