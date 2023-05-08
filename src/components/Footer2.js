import React from "react";

function Footer2() {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row pt-4 pb-4">
          <div className="col-12 col-md-6">
            <p className="fw-normal">
              Copyright ©{" "}
              <a href="#" className="text-decoration-none">
                clinica
              </a>{" "}
              2017. All rights reserved.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <p className="fw-normal text-md-end">
              Clinica Theme by{" "}
              <a href="#" className=" text-decoration-none ">
                ThemeAtelier
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
