import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <span className="me-2">

            <span
              style={{
                display: "inline-block",
                width: 32,
                height: 40
              }}
            />
          </span>
          <span><img src="src\assets\Images\logo.png" alt="" /></span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {["Home", "Portfolios", "Services", "About", "Blog", "Contact"].map(
              (item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link" href={`#${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="d-none d-lg-flex gap-3">
            <i className="bi bi-facebook text-white"></i>
            <i className="bi bi-instagram text-white"></i>
            <i className="bi bi-twitter text-white"></i>
            <i className="bi bi-youtube text-white"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
