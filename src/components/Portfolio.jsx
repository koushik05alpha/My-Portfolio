import { useState } from "react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabOpen = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-title title">
        <h2>
          My <span>Works</span>
        </h2>
      </div>
      <div className="container portfolio-container">
        <div className="portfolio-buttons">
          <button
            className={`btn portfolio-tab ${
              activeTab === "all" ? "active" : ""
            }`}
            onClick={() => tabOpen("all")}
          >
            All
          </button>
          <button
            className={`btn portfolio-tab ${
              activeTab === "webDevelop" ? "active" : ""
            }`}
            onClick={() => tabOpen("webDevelop")}
          >
            Web Develop
          </button>
          <button
            className={`btn portfolio-tab ${
              activeTab === "appDevelop" ? "active" : ""
            }`}
            onClick={() => tabOpen("appDevelop")}
          >
            App Develop
          </button>
          <button
            className={`btn portfolio-tab ${
              activeTab === "digitalMarketing" ? "active" : ""
            }`}
            onClick={() => tabOpen("digitalMarketing")}
          >
            Digital Marketing
          </button>
        </div>

        <div
          className={`tab-content ${
            activeTab === "all" ? "active-content" : ""
          }`}
          id="all"
        >
          <div className="image">
            <img src="./assets/images/portfolio (1).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (2).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (3).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (21).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (4).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (19).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (18).jpg" alt="" />
          </div>
        </div>

        <div
          className={`tab-content ${
            activeTab === "webDevelop" ? "active-content" : ""
          }`}
          id="webDevelop"
        >
          <div className="image">
            <img src="./assets/images/portfolio (18).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (6).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (11).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (12).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (8).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (9).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (7).jpg" alt="" />
          </div>
        </div>

        <div
          className={`tab-content ${
            activeTab === "appDevelop" ? "active-content" : ""
          }`}
          id="appDevelop"
        >
          <div className="image">
            <img src="./assets/images/portfolio (1).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (5).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (8).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (13).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (4).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (14).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (11).jpg" alt="" />
          </div>
        </div>

        <div
          className={`tab-content ${
            activeTab === "digitalMarketing" ? "active-content" : ""
          }`}
          id="digitalMarketing"
        >
          <div className="image">
            <img src="./assets/images/portfolio (10).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (20).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (6).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (5).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (4).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (9).jpg" alt="" />
          </div>
          <div className="image">
            <img src="./assets/images/portfolio (16).jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
