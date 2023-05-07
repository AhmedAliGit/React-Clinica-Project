import React from "react";
import { Link } from "react-router-dom";

function Navbar2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#51a9f1" }}>
      <div className="container-fluid">
        <img src="https://themeatelier.net/site-templates/clinica/img/logo/logo-header-1.png" alt="" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">DOCTORS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">APPOINTMENT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">DEPARTMENT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">PAGES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">ARTICLES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">CONTACT US</a>
            </li>
          </ul>
          <form className="d-flex pt-5 mb-4 me-5 input-form">
            <input className="form-control me-2" type="search" placeholder="Search Clinica" aria-label="Search" />
            <Link className="btn btn-outline-light text-dark" to={"/"} >Signup</Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;