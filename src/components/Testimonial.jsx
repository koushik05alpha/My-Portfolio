// components/Testimonial.jsx
import { useEffect } from "react";
import "../index.css";

const Testimonial = () => {
  useEffect(() => {
    // ScrollReveal animations will work as defined in your main.js
    // No need for additional JS here since it's handled globally
  }, []);

  return (
    <section className="testimonial" id="testimonial">
      <div className="title">
        <h2>
          Testi<span>monial</span>
        </h2>
      </div>

      <div className="main-container">
        <div className="container testimonial-container scrollbar">
          <div className="card">
            <img src="./assets/images/t (1).jpg" alt="John Doe" />
            <div className="info">
              <h3>John Doe</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum expedita tempore harum repudiandae reiciendis nulla
                temporibus animi eius, amet, necessitatibus, deleniti neque!
              </p>
            </div>
          </div>

          <div className="card">
            <img src="./assets/images/t (2).jpg" alt="Nina Williams" />
            <div className="info">
              <h3>Nina Williams</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum expedita tempore harum repudiandae reiciendis nulla
                temporibus animi eius, amet, necessitatibus, deleniti neque!
              </p>
            </div>
          </div>

          <div className="card">
            <img src="./assets/images/t (3).jpg" alt="Izabella Stress" />
            <div className="info">
              <h3>Izabella Stress</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum expedita tempore harum repudiandae reiciendis nulla
                temporibus animi eius, amet, necessitatibus, deleniti neque!
              </p>
            </div>
          </div>

          <div className="card">
            <img src="./assets/images/t (4).jpg" alt="John Doe" />
            <div className="info">
              <h3>John Doe</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum expedita tempore harum repudiandae reiciendis nulla
                temporibus animi eius, amet, necessitatibus, deleniti neque!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
