import React from "react";
import { Link } from "react-router-dom";

function Navbar2() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#51a9f1" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://themeatelier.net/site-templates/clinica/img/logo/logo-header-1.png"
            alt=""
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span className="nav-link active" aria-current="page">
                HOME
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link active" aria-current="page">
                DOCTORS
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link active" aria-current="page">
                APPOINTMENT
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link active" aria-current="page">
                DEPARTMENT
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link active" aria-current="page">
                PAGES
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link active" aria-current="page">
                ARTICLES
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link active" aria-current="page">
                CONTACT US
              </span>
            </li>
          </ul>
          <form className="d-flex align-items-center pt-2 pt-lg-0 mb-2 mb-lg-0">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Clinica"
              aria-label="Search"
            />
            <button className="btn btn-outline-light text-dark" type="submit">
              Search
            </button>
            <Link className="btn btn-outline-light text-dark ms-3" to={"/"}>
              Signup
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
