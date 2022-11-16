import React from "react";

function Slider() {
  return (
    <nav className="container caro-nav">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../images/carousel-1.jpg"
              className="d-block img-fluid "
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={{ fontWeight: "900" }}>Lecture Room</h2>
              <p style={{ fontWeight: "900" }}>
                CodeTrain CEO - Richard Brandt having an interaction with a
                section of students in one of the current Gens.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../images/carousel-2.jpg"
              className="img-fluid d-block "
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={{ fontWeight: "900" }}>Compound</h2>
              <p style={{ fontWeight: "900" }}>
                A sneak peak of the evironment and surrounding of our campus in
                Accra - East Legon
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../images/carousel-3.jpeg"
              className="d-block  img-fluid"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={{ fontWeight: "900" }}>Demo Days</h2>
              <p style={{ fontWeight: "900" }}>
                This is a picture of a Codetrain presentation and Demo Day. Some
                representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <br />
      <br />
    </nav>
  );
}

export default Slider;
