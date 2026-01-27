import React from "react";

const plans = [
  { name: "Photography", price: 400, featured: false },
  { name: "Photography", price: 400, featured: false },
  { name: "Photography", price: 400, featured: true },
];

function PricingSection() {
  return (
    <section className="section-padding" id="contact">
      <div className="container">
        <h2 className="text-center mb-5">Choose a plan that suit you</h2>
        <div className="row gy-4">
          {plans.map((plan, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div
                className={`card h-100 border-0 shadow-sm ${
                  plan.featured ? "border border-dark" : ""
                }`}
              >
                <div className="card-body text-center">
                  <span className="badge rounded-pill bg-dark mb-3">
                    {plan.name}
                  </span>
                  <h2 className="mb-0">${plan.price}</h2>
                  <span className="text-muted"> USD</span>

                  <ul className="list-unstyled mt-4 mb-4 text-muted">
                    <li>Sed ut perspiciatis unde omnis iste.</li>
                    <li>Natus error sit voluptatem.</li>
                    <li>Accusantium Doloremque lauda.</li>
                    <li>Totam rem aperiam.</li>
                    <li>Eaque ipsa quae.</li>
                  </ul>

                  <button
                    className={`btn ${
                      plan.featured ? "btn-dark" : "btn-outline-dark"
                    } w-100`}
                  >
                    CHOOSE THIS PLAN
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
