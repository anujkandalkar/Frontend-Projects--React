import React from "react";
import g1 from "../assets/Images/instra1.jpg";
import g2 from "../assets/Images/instra2.jpg";
import g3 from "../assets/Images/instra3.jpg";
import g4 from "../assets/Images/instra4.jpg";
import g5 from "../assets/Images/instra5.jpg";

const gallery = [g1, g2, g3, g4, g5];

function GalleryStrip() {
  return (
    <section className="gallery-strip">
      <div className="container-fluid px-0">
        <div className="row g-0">
          {gallery.map((img, index) => (
            <div className="col-6 col-md" key={index}>
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryStrip;
