import React from "react";

function Hero() {
  return (
    <section className="hero container-fluid">
      <div className="hero-inner">
        <img
          src="https://themeatelier.net/site-templates/clinica/img/hero/hero-bg.jpg"
          alt=""
        />
        <h1 className="mt-4">
          We have Medicare plan <br /> options for you
        </h1>
      </div>
    </section>
  );
}

function MainCard() {
  return (
    <div
      className="card text-center mainCard"
      style={{ backgroundColor: "#51a9f1" }}
    >
      <div className="card-body mt-5">
        <img
          width="50px"
          src="https://themeatelier.net/site-templates/clinica/img/icons/icon-emergency-case.png"
          alt=""
        />
        <h6 className="card-title fs-5 mt-1">MEDICAL SERVICES</h6>
        <p className="card-text fs-6 p-0 m-0">
          But I must explain to you how all this mistaken idea of
        </p>
        <button href="#" className="btn btn-light" style={{ color: "#51a9f1" }}>
          contact us
        </button>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card text-center" style={{ backgroundColor: "#51a9f1" }}>
      <div className="card-body mt-5">
        <img width="50px" src={props.imageSrc} alt={props.imageAlt} />
        <h6 className="card-title fs-5 mt-1">{props.cardTitle}</h6>
        <p className="card-text fs-6 p-0 m-0">{props.cardText}</p>
        <button href="#" className="btn btn-outline-light">
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}

function MainBody() {
  return (
    <main>
      <div className="cardContainer container d-flex">
        <Card
          imageSrc="https://themeatelier.net/site-templates/clinica/img/icons/icon-medical-service.png"
          imageAlt=""
          cardTitle="MEDICAL SERVICES"
          cardText="But I must explain to you how all this mistaken idea"
          buttonText="view all services"
        />
        <MainCard />
        <Card
          imageSrc="https://themeatelier.net/site-templates/clinica/img/icons/icon-find-doctors.png"
          imageAlt=""
          cardTitle="find doctors"
          cardText="But I must explain to you how all this m"
          buttonText="view doctors"
        />
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <MainBody />
      <style jsx>{`
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 36px;
            text-align: center;
          }
          .cardContainer {
            flex-wrap: wrap;
            justify-content: center;
          }
          .card {
            width: 80%;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </>
  );
}
