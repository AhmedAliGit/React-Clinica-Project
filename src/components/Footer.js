import React from "react";

function Footer() {
  return (
    <section className="footer">
      <div className="container last2Con">
        <div className="row">
          <div className="col-md-4 pt-5 mt-5">
            <div className="single-footer-widget">
              <h5 className="pt-1 pb-3 fw-bolder">ABOUT CLINICA</h5>
              <p className="pt-1">
                But I must explain to you how all this mistaken ofidea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the.
              </p>
              <p className="pt-1">
                System, and expound the actual teachings of ello the great
                explorer of the truth, the master-builder of.
              </p>
              <div className="socialLogos">
                <ul className="footer-social d-flex list-unstyled fs-2 ">
                  <li>
                    <span>
                      <i className="fa-brands fa-facebook"></i>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-brands fa-twitter"></i>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-brands fa-linkedin"></i>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-brands fa-google-plus"></i>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-brands fa-pinterest"></i>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 pt-5 mt-5">
            <div className="single-footer-widget ">
              <h5 className="pt-1 pb-3 fw-bolder">MEDICAL DEPARTMENTS</h5>
              <ul className="list-unstyled ">
                <li className="p-2">
                  <span className="text-decoration-none text-dark">
                    <i className="fa fa-angle-right text-primary"></i> General
                    Practice
                  </span>
                </li>
                <li className="p-2">
                  <span className="text-decoration-none text-dark">
                    <i className="fa fa-angle-right text-primary"></i>{" "}
                    Cardiology
                  </span>
                </li>
                <li className="p-2">
                  <span className="text-decoration-none text-dark">
                    <i className="fa fa-angle-right text-primary"></i>{" "}
                    Pediatrics
                  </span>
                </li>
                <li className="p-2">
                  <span className="text-decoration-none text-dark">
                    <i className="fa fa-angle-right text-primary"></i> Diabetes
                    Care
                  </span>
                </li>
                <li className="p-2">
                  <span className="text-decoration-none text-dark">
                    <i className="fa fa-angle-right text-primary"></i>{" "}
                    Ultrasound Echocardiogram
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 pt-5 mt-5">
            <div className="single-footer-widget">
              <h5 className="pt-1 pb-3 fw-bolder">LATEST HEALTH TIPS</h5>
              <ul className="list-unstyled">
                <li className="text-black p-2">
                  <span className="text-decoration-none text-dark">
                    <i className="fa fa-chevron-circle-right text-primary"></i>{" "}
                    Pets may reduce risk of heart disease
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </section>
  );
}
export default Footer;
