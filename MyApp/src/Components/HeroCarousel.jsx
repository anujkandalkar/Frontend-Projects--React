import React from "react";

function HeroCarousel() {
  const slides = [
    {
      title: "ELECTRICITY",
      subtitle: "Action Shot",
      img: "/src/assets/Images/h1_hero1.jpg",
    },
    {
      title: "STREET SHOT",
      subtitle: "Nature Beauty",
      img: "/src/assets/Images/h1_hero2.jpg",
    },
    {
      title: "SUNSET VIBES",
      subtitle: "Golden Hour",
      img: "/src/assets/Images/h1_hero3.jpg",
    },
  ];

  return (
    <section id="home" className="hero-carousel">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={slide.title}
            >
              <img src={slide.img} className="d-block w-100" alt={slide.title} />
              <div className="hero-caption">
                <p className="mb-2">{slide.subtitle}</p>
                <h1 className="display-4 fw-light">{slide.title}</h1>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}

export default HeroCarousel;
