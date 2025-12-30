import React from "react";
import {
  industriesbanner,
  slider3,
  slider4,
  weoffer1,
  weoffer2,
  weoffer3,
} from "../../../assets";
import "../../../App.css";
const Corporate = () => {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="text-white py-5 px-5">
        {/* ===== Top Carousel ===== */}
        <div
          id="corporateCarousel"
          className="carousel slide col-lg-8"
          data-bs-ride="carousel"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#corporateCarousel"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#corporateCarousel"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#corporateCarousel"
              data-bs-slide-to="2"
            ></button>
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div
              className="carousel-item active text-white"
              style={{
                background: `url(${industriesbanner})`,
              }}
            >
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h1 className="fw-bold">Protecting Corporate India</h1>
                    <p className="mt-3">
                      Comprehensive insurance solutions for businesses.
                    </p>
                    <button className="btn btn-light text-danger fw-semibold">
                      Get a Quote
                    </button>
                  </div>
                  <div className="col-md-6 text-center">
                    {/* <img
              src="../../../../public/Corporate/industries-banner1.png"
              className="img-fluid"
              alt="Corporate Insurance"
            /> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div
              className="carousel-item bg-light"
              style={{
                background: `url(${slider4})`,
              }}
            >
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h1 className="fw-bold">Risk Management Simplified</h1>
                    <p className="mt-3 text-muted">
                      Customized risk solutions across industries.
                    </p>
                    <button className="btn btn-danger fw-semibold">
                      Explore Products
                    </button>
                  </div>
                  <div className="col-md-6 text-center">
                    {/* <img
              src="https://via.placeholder.com/450"
              className="img-fluid"
              alt="Risk Management"
            /> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div
              className="carousel-item bg-secondary text-white"
              style={{
                background: `url(${slider3})`,
              }}
            >
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h1 className="fw-bold">Trusted by 10 Lakh+ Businesses</h1>
                    <p className="mt-3">
                      India’s leading corporate insurance provider.
                    </p>
                    <button className="btn btn-light fw-semibold">
                      Learn More
                    </button>
                  </div>
                  <div className="col-md-6 text-center">
                    {/* <img
              src="https://via.placeholder.com/450"
              className="img-fluid"
              alt="Trusted Brand"
            /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-we-offer py-5 bg-light w-100 m-10 rounded-5">
        <div className="container">
          <div className="flex justify-center gap-6">
            <div className="text-center">
              <img src={weoffer1} className="mx-auto mb-3" />
              <p>
                We provide customized solutions and services for your business.
              </p>
            </div>

            <div className="text-center">
              <img src={weoffer2} className="mx-auto mb-3" />
              <p>
                We offer instant claims processing and support whenever you
                need.
              </p>
            </div>

            <div className="text-center">
              <img src={weoffer3} className="mx-auto mb-3" />
              <p>
                We offer you the flexibility to easily manage your policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Products Section ===== */}
      <section className="py-5">
        <div className="container">
          <h3 className="text-center fw-bold mb-4">Our Insurance Solutions</h3>

          <div className="row g-4">
            {[
              "Motor Insurance",
              "Health Insurance",
              "Fire & Engineering",
              "Marine Insurance",
              "Cyber Insurance",
              "Liability Insurance",
            ].map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">{item}</h5>
                    <p className="card-text small text-muted">
                      Tailored insurance coverage for your business needs.
                    </p>
                    <a
                      href="#"
                      className="text-danger fw-semibold text-decoration-none"
                    >
                      Know More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Info Section ===== */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <h4 className="fw-bold">5000+</h4>
              <p className="text-muted">Cashless Hospitals</p>
            </div>
            <div className="col-md-4">
              <h4 className="fw-bold">135+</h4>
              <p className="text-muted">Branches Across India</p>
            </div>
            <div className="col-md-4">
              <h4 className="fw-bold">20+ Years</h4>
              <p className="text-muted">Industry Experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Corporate;
