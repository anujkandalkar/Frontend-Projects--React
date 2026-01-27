import React from "react";

const testimonials = [
  {
    text: "Vivamus aliquet felis eu diam ultricies congue. Morbi porta lorem nec consectetur porta.",
    name: "Graham Cracker, Designer at Colorlib",
    img: "/src/assets/Images/founder-img.png",
  },
  {
    text: "Sed quis dui elit. Pellentesque habitant morbi tristique senectus et netus.",
    name: "Alex Johnson, Photographer",
    img: "/src/assets/Images/founder-img.png",
  },
];

function TestimonialsSection() {
  return (
    <section id="blog" className="section-padding bg-dark text-white">
      <div className="container text-center">
        <h2 className="mb-5">Testimonial</h2>

        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonials.map((t, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={t.name}
              >
                <p className="lead mb-4">“{t.text}”</p>
                <img
                  src={t.img}
                  alt={t.name}
                  className="rounded-circle mb-3"
                  style={{ width: 80, height: 80, objectFit: "cover" }}
                />
                <p className="mb-0">{t.name}</p>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
