import React from "react";

function InteriorPlans() {
  return (
    <section className="container">
      <h2 className="text-center">INTERIOR PLANS</h2>
      <br />
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img src="../images/virtual-office.png" height="175px" />
            <div className="card-body">
              <h6 className="text-center">VIRTUAL OFFICE</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src="../images/customized-office.webp"
              height="175px"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="text-center">CUSTOMIZED OFFICE</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src="../images/serviced-office.jpg"
              height="175px"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="text-center">SERVICED OFFICE</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src="images/executive-board-room.jpg"
              height="175px"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="text-center">MEETING OFFICE</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
    </section>
  );
}

export default InteriorPlans;
