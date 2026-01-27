import React from "react";
import aboutImg from "../assets/Images/about1.jpg";

function AboutSection() {
  return (
    <section id="about" className="section-padding bg-light">
      <div className="container">
        <div className="row align-items-center gy-4">

          <div className="col-12 col-md-6 col-lg-5">
            <h2 className="about-title mb-4">
              I Click Moment,
              <br />
              that you love
            </h2>

            <p className="mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi architecto beatae vitae dicta.
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-4 text-md-center">
            <img
              src={aboutImg}
              className="img-fluid rounded"
              alt="Photographer"
            />
          </div>

          <div className="col-12 col-lg-3 text-center text-lg-start">
            <h1 className="display-3">08</h1>
            <p className="mb-4">Years of Experience</p>

            <p className="fst-italic mb-4">
              "A gray cat slinks past a wooden house. There's something a little
              intimidating attempting to describe."
            </p>

            <button className="btn btn-outline-dark">MY WORK</button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
