import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import ScrollReveal from "scrollreveal";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  useEffect(() => {
    // Theme toggler
    const themeBtn = document.getElementById("theme-btn");

    const toggleTheme = () => {
      themeBtn.classList.toggle("ri-sun-line");
      document.body.classList.toggle("active");
    };

    themeBtn.addEventListener("click", toggleTheme);

    // Scrolling animation
    const sr = ScrollReveal({
      distance: "80px",
      duration: 2500,
      delay: 200,
      reset: true,
    });

    sr.reveal(".home-container .left", { origin: "top" });
    sr.reveal(".home-container .right", { origin: "left" });
    sr.reveal(".about-container .right", { origin: "top" });
    sr.reveal(".about-container .left", { origin: "left" });
    sr.reveal(".service", { origin: "bottom" });
    sr.reveal(".portfolio-title", { origin: "bottom" });
    sr.reveal(".portfolio-container", { origin: "left" });
    sr.reveal(".portfolio-buttons", { origin: "top" });
    sr.reveal(".testimonial", { origin: "bottom" });
    sr.reveal(".contact", { origin: "top" });
    sr.reveal(".copyright", { origin: "bottom" });

    return () => {
      themeBtn.removeEventListener("click", toggleTheme);
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <div className="copyright">
        <p>
          Copyright &copy; | This template is created
          <i className="ri-heart-line">
            by
            <a href="https://www.facebook.com/koushik05alpha" target="_blank">
              Koushik05Alpha
            </a>
          </i>
        </p>
        <p>
          <a href="https://www.facebook.com/watcher0005" target="_blank">
            I am the Watcher
          </a>
        </p>
      </div>
    </Router>
  );
}

export default App;
