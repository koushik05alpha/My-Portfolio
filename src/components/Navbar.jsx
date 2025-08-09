import { useEffect, useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 50) {
        nav.classList.add("scrolling");
      } else {
        nav.classList.remove("scrolling");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className="logo">
          Port<span>folio</span>
        </Link>

        <ul className={`navlist ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/service">services</Link>
          </li>
          <li>
            <Link to="/portfolio">portfolio</Link>
          </li>
          <li>
            <Link to="/testimonial">testimonial</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/photogallery">photogallery</Link>
          </li>
        </ul>

        <div className="nav-icons">
          <div
            id="menu-btn"
            className={`ri-menu-line ${
              isMenuOpen ? "ri-arrow-up-doulbe-line" : ""
            }`}
            onClick={handleMenuClick}
          ></div>
          <div id="theme-btn" className="ri-moon-line"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;