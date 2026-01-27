import React from "react";

const services = [
  {
    title: "Event Photography",
    img: "/src/assets/Images/blog01.jpg",
  },
  {
    title: "Wedding Photography",
    img: "/src/assets/Images/blog02.jpg",
  },
  {
    title: "Family Photography",
    img: "/src/assets/Images/blog03.jpg",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-light">
      <div className="container">
        <h2 className="mb-5 text-center">I do for you</h2>
        <div className="row gy-4">
          {services.map((service) => (
            <div className="col-12 col-md-4" key={service.title}>
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={service.img}
                  className="card-img-top"
                  alt={service.title}
                />
                <div className="card-body">
                  <h4 className="card-title">{service.title}</h4>
                  <p className="card-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
