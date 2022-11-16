import React from "react";

function Header() {
  return (
    <header className="container head-container">
      <div className="row">
        <div className="col-md-4">
          <img
            src="../images/logo.png"
            alt=""
            width="40"
            height="25"
            className="d-inline-block align-text-top"
          />
          Codetrain Campus
        </div>

        <div className="col-md-4 text-center">
          <img src="../images/Ghana-Flag.jpg" width="25" />
          <img src="../images/Flag-Nigeria.jpg" width="25" />
          <img src="../images/usa.webp" width="25" />
        </div>

        <div className="col-md-4 text-end">About Us</div>
      </div>
    </header>
  );
}

export default Header;
