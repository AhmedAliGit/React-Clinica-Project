import React from "react";

function DoctorCard() {
  return (
    <div className="container card-container d-flex flex-wrap">
      <div className="card-group">
        <div className="card border-0 pe-5">
          <img
            src="https://themeatelier.net/site-templates/clinica/img/doctors/doctors-1.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center cardhv">
            <h5 className="card-title">DR. SHIMUL REON, MD</h5>
            <p className="fs-5 text-dark text-capitalize">Anethesiologist</p>
            <p className="fs-7 text-dark text-capitalize">
              <i className="fa fa-circle activedot"></i> Accept new Patients
            </p>
            <hr />
            <p className="text-dark text-capitalize">
              "nearest location &nbsp;" <i className="fa fa-map-marker"></i> "
              2144.29 mi"
            </p>
            <a>
              <h6 className="text-dark px-5">
                see details<i className="fa fa-long-arrow-right"></i>
              </h6>
            </a>
          </div>
        </div>
        <div className="card border-0 pe-5 cardhv">
          <img
            src="https://themeatelier.net/site-templates/clinica/img/doctors/doctors-2.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">ROBIN FIVE ROCKS</h5>
            <p className="fs-5 text-dark text-capitalize">Anethesiologist</p>
            <p className="fs-7 text-dark text-capitalize">
              <i className="fa fa-circle reddot"></i> do not Accept new Patients
            </p>
            <hr />
            <p className="text-dark text-capitalize">
              "nearest location &nbsp;" <i className="fa fa-map-marker"></i> "
              2144.29 mi"
            </p>
            <a>
              <h6 className="text-dark px-5">
                see details<i className="fa fa-long-arrow-right"></i>
              </h6>
            </a>
          </div>
        </div>
        <div className="card border-0 cardhv">
          <img
            src="https://themeatelier.net/site-templates/clinica/img/doctors/doctors-3.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title px-5">NUSRAT FARIYA LILI</h5>
            <p className="fs-5 text-dark text-capitalize">Anethesiologist</p>
            <p className="fs-7 text-dark text-capitalize">
              <i className="fa fa-circle activedot"></i> Accept new Patients
            </p>
            <hr />
            <p className="text-dark text-capitalize">
              "nearest location &nbsp;" <i className="fa fa-map-marker"></i> "
              2144.29 mi"
            </p>
            <a>
              <h6 className="text-dark px-5">
                see details<i className="fa fa-long-arrow-right"></i>
              </h6>
            </a>
          </div>
        </div>
      </div>
      </div>
      );
}
export default DoctorCard;

