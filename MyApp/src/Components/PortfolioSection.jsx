import React from "react";

const items = [
  {
    title: "STREET SHOT",
    text: "Nature Beauty",
    img: "/src/assets/Images/gallery1.jpg",
  },
  {
    title: "STREET SHOT",
    text: "Nature Beauty",
    img: "/src/assets/Images/gallery2.jpg",
  },
  {
    title: "STREET SHOT",
    text: "Nature Beauty",
    img: "/src/assets/Images/gallery3.jpg",
  },
  {
    title: "STREET SHOT",
    text: "Nature Beauty",
    img: "/src/assets/Images/gallery4.jpg",
  },
  {
    title: "STREET SHOT",
    text: "Nature Beauty",
    img: "/src/assets/Images/gallery5.jpg",
  },
  {
    title: "STREET SHOT",
    text: "Nature Beauty",
    img: "/src/assets/Images/gallery6.jpg",
  },
];

function PortfolioSection() {
  return (
    <section id="portfolios" className="section-padding">
      <div className="container">
      </div>

      <div className="container-fluid px-0">
        <div className="row g-0">
          {items.map((item) => (
            <div className="col-12 col-md-4" key={item.img}>
              <div className="position-relative">
                <img src={item.img} alt={item.title} className="img-fluid w-100" />
                <div className="position-absolute bottom-0 start-0 w-100 text-center text-white pb-4">
                  <p className="mb-1">{item.text}</p>
                  <h3 className="fw-light">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
