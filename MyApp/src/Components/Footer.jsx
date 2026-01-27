import React from "react";

function Footer() {
  return (
    <footer className="footer-bg section-padding">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-md-4">
            <h4 className="mb-3">JOSANCLICK</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <div className="d-flex gap-3 mt-3">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h5>Contact</h5>
            <p>87/A, Green lane, CA 6732</p>
            <p>Real State</p>
            <p>
              <a href="mailto:info@josanclick.com">info@josanclick.com</a>
            </p>
            <p>+10 236 327 3782</p>
          </div>

          <div className="col-12 col-md-3">
            <h5>Subscribe Newsletter</h5>
            <form className="mt-3">
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Enter your email"
              />
              <button className="btn btn-outline-light w-100" type="button">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <hr className="border-secondary mt-5" />
        <p className="text-center small mb-0">
          Copyright ©2025 All rights reserved | This template is made with ♥
        </p>
      </div>
    </footer>
  );
}

export default Footer;
