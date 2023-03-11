import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css"

function Home() {

    const reviews = [
        {
            author: 'John Smith',
            rating: 4,
            comment: 'Neque cupiditate assumenda in maiores repudi mollitia architecto.',
            avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
        },
        {
            author: 'Lisa Cudrow',
            rating: 5,
            comment: 'Absolutely amazing experience. Highly recommend!',
            avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
        },
        {
            author: 'Maria Smantha',
            rating: 3,
            comment: 'Decent service, nothing to write home about.',
            avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
        }
    ];

    return (
        <>    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#51a9f1" }}>
            <div className="container-fluid">
                <img src="https://themeatelier.net/site-templates/clinica/img/logo/logo-header-1.png" alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">HOME</a></li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">DOCTORS</a></li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">APPOINTMENT</a></li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">DEPARTMENT</a></li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">PAGES</a></li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">ARTICLES</a></li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">CONTACT US</a></li>


                    </ul>
                    <form className="d-flex pt-5 mb-4 me-5 input-form">
                        <input className="form-control me-2" type="search" placeholder="Search Clinica" aria-label="Search" />
                        <Link className="btn btn-outline-light text-dark" to={"/"} >Signup</Link>
                    </form>
                </div>
            </div>
        </nav>

            <section className="hero container-fluid">
                <div className="hero-inner">
                    <img src="https://themeatelier.net/site-templates/clinica/img/hero/hero-bg.jpg" alt="" />
                    <h1 className="mt-4">We have Medicare plan <br /> options for you</h1>
                </div>
            </section>
            <main>
                <div className="cardContainer container d-flex">
                    <div className="card text-center" style={{
                        width: "390px", height: "390px", backgroundColor: "#51a9f1"
                    }}>
                        <div className="card-body mt-5" >
                            <img width="50px" src="https://themeatelier.net/site-templates/clinica/img/icons/icon-medical-service.png" alt="" />
                            <h6 className="card-title fs-5 mt-1">MEDICAL SERVICES</h6>
                            <p className="card-text fs-6 p-0 m-0">But I must explain to you how all this mistaken idea </p>
                            <button href="#" className="btn btn-outline-light">view all services</button>
                        </div>
                    </div>
                    <div className="card text-center mainCard" style={{ width: "390px", height: "390px", backgroundColor: "#51a9f1" }}>
                        <div className="card-body mt-5">
                            <img width="50px" src="https://themeatelier.net/site-templates/clinica/img/icons/icon-emergency-case.png" alt="" />
                            <h6 className="card-title fs-5 mt-1">MEDICAL SERVICES</h6>
                            <p className="card-text fs-6 p-0 m-0">But I must explain to you how all this mistaken idea of</p>
                            <button href="#" className="btn btn-light" style={{ color: "#51a9f1" }}>contact us</button>
                        </div>
                    </div>
                    <div className="card text-center" style={{ width: "390px", height: "390px", backgroundColor: "#51a9f1" }}>
                        <div className="card-body mt-5">
                            <img width="50px" src="https://themeatelier.net/site-templates/clinica/img/icons/icon-find-doctors.png" alt="" />
                            <h6 className="card-title fs-5 mt-1">find doctors</h6>
                            <p className="card-text fs-6 p-0 m-0">But I must explain to you how all this m </p>
                            <button href="#" className="btn btn-outline-light">view doctors</button>
                        </div>
                    </div>
                </div>

                <div className="sec2 container mt-5">
                    <img src="https://themeatelier.net/site-templates/clinica/img/icons/icon-service-title.png" alt="" />
                </div>
                <div className="sec2-container">
                    <div className="container sec2-1 mt-2">
                        <h2 className="mt-2">WHY CHOOSE CLINICA MEDICAL</h2>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
                            will give you a complete account of the system, and expound the actual teachings</p>
                    </div>
                </div>
                <div className="mainSec3 container d-flex mb-5 pb-5">
                    <div className="sec3 mt-5 container">
                        <h6 className="fw-bold cardhv">EASY APPOINTMENTS</h6>
                        <p className="mt-4 mb-4">But I must explain to you how all this mistaken idea of denouncing pleasure <br /> and
                            praising pain was born and I will give you hello must explain to you how all this mistaken idea of denouncing
                            pleasure</p>
                        <h6 className="fw-bold cardhv">REQUEST APPOINTMENT &rarr;</h6>

                        <hr className="horizontal-hr mt-5 mb-5" />

                        <h6 className="fw-bold cardhv">REGULAR CHECKS</h6>
                        <p className="mt-4 mb-4">But I must explain to you how all this mistaken idea of denouncing pleasure <br /> and
                            praising pain was born and I will give you hello must explain to you how all this mistaken idea of denouncing
                            pleasure</p>
                        <h6 className="fw-bold cardhv">LEARN MORE &rarr;</h6>
                    </div>

                    <div className="vartical-span"></div>

                    <div className="sec3 mt-5 container ">
                        <h6 className="fw-bold cardhv">BEST DOCTORS TEAM</h6>
                        <p className="mt-4 mb-4">But I must explain to you how all this mistaken idea of denouncing pleasure <br /> and
                            praising pain was born and I will give you hello must explain to you how all this mistaken idea of denouncing
                            pleasure</p>
                        <h6 className="fw-bold cardhv">CONTACT US NOW &rarr;</h6>

                        <hr className="horizontal-hr my-5 " />

                        <h6 className="fw-bold cardhv ">PHARMACEUTICAL ADVICE</h6>
                        <p className="mt-4 mb-4">But I must explain to you how all this mistaken idea of denouncing pleasure <br /> and
                            praising pain was born and I will give you hello must explain to you how all this mistaken idea of denouncing
                            pleasure</p>
                        <h6 className="fw-bold cardhv">SEE OUR DEPARTMENTS &rarr;</h6>
                    </div>
                </div>

                <div className="video-sec bgIMG">
                    <div className="sec2-container">
                        <div className="container sec2-1 mt-2">
                            <a className="fa fa-play fa-3x text-decoration-none " role="button" aria-hidden="true"
                                href="https://www.youtube.com/watch?v=OwPZIhTHDUk" target="_blank"></a>
                            <h5 className="mt-5 text-dark fw-bold fs-3">PLAY INTRO VIDEO</h5>
                        </div>
                    </div>
                </div>

                <div className="sec2 container mt-5">
                    <img src="https://themeatelier.net/site-templates/clinica/img/icons/icon-service-title.png" alt="" />
                </div>
                <div className="sec2-container">
                    <div className="container sec2-1 mt-2">
                        <h2 className="mt-2">OUR BEST DOCTORS</h2>
                        <p className="pb-5 ">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                            was born and will give you a complete account of the system, and expound the actual teachings</p>
                    </div>
                    <br />
                </div>

                <div className="container card-container d-flex flex-wrap">
                    <div className="card-group">
                        <div className="card border-0 pe-5">
                            <img src="https://themeatelier.net/site-templates/clinica/img/doctors/doctors-1.jpg" className="card-img-top"
                                alt="..." />
                            <div className="card-body text-center cardhv">
                                <h5 className="card-title ">DR. SHIMUL REON, MD</h5>
                                <p className="  fs-5 text-dark text-capitalize  ">Anethesiologist</p>
                                <p className=" fs-7 text-dark text-capitalize "><i className="fa fa-circle activedot"></i>
                                    Accept new Patients</p>
                                <hr />
                                <p className="text-dark text-capitalize">"nearest location &nbsp;"
                                    <i className="fa fa-map-marker"></i>
                                    "2144.29 mi"
                                </p>
                                <a>
                                    <h6 className="text-dark px-5">see details<i className="fa fa-long-arrow-right"></i></h6>
                                </a>
                            </div>

                        </div>
                        <div className="card border-0 pe-5 cardhv">
                            <img src="https://themeatelier.net/site-templates/clinica/img/doctors/doctors-2.jpg" className="card-img-top"
                                alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">ROBIN FIVE ROCKS</h5>
                                <p className="fs-5 text-dark text-capitalize">Anethesiologist</p>
                                <p className="fs-7 text-dark text-capitalize"><i className="fa fa-circle reddot"></i>
                                    do not Accept new Patients</p>
                                <hr />
                                <p className="text-dark text-capitalize">"nearest location &nbsp;"
                                    <i className="fa fa-map-marker"></i>
                                    "2144.29 mi"
                                </p>
                                <a>
                                    <h6 className="text-dark px-5">see details<i className="fa fa-long-arrow-right"></i></h6>
                                </a>
                            </div>

                        </div>
                        <div className="card border-0 cardhv">
                            <img src="https://themeatelier.net/site-templates/clinica/img/doctors/doctors-3.jpg" className="card-img-top"
                                alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title px-5">NUSRAT FARIYA LILI</h5>
                                <p className="fs-5 text-dark text-capitalize ">Anethesiologist</p>
                                <p className="fs-7 text-dark text-capitalize"><i className="fa fa-circle activedot"></i>
                                    Accept new Patients</p>
                                <hr />
                                <p className="text-dark text-capitalize">"nearest location &nbsp;"
                                    <i className="fa fa-map-marker"></i>
                                    "2144.29 mi"
                                </p>
                                <a>
                                    <h6 className="text-dark px-5">see details<i className="fa fa-long-arrow-right"></i></h6>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card-group">
                        <div className="card border-0 pe-5 py-5 cardhv">
                            <img src="https://themeatelier.net/site-templates/clinica/img/doctors/doctors-4.jpg" className="card-img-top"
                                alt="..." />
                            <div className="card-body text-center cardhv">
                                <h5 className="card-title ">DR GULAM FARUK</h5>
                                <p className="  fs-5 text-dark text-capitalize  ">Anethesiologist</p>
                                <p className=" fs-7 text-dark text-capitalize "><i className="fa fa-circle activedot"></i>
                                    Accept new Patients</p>
                                <hr />
                                <p className="text-dark text-capitalize">"nearest location &nbsp;"
                                    <i className="fa fa-map-marker"></i>
                                    "2144.29 mi"
                                </p>
                                <a>
                                    <h6 className="text-dark px-5">see details<i className="fa fa-long-arrow-right"></i></h6>
                                </a>
                            </div>
                        </div>
                        <div className="card border-0 pe-5 py-5">
                            <img src="https://themeatelier.net/site-templates/clinica/img/doctors/doctors-1.jpg" className="card-img-top"
                                alt="..." />
                            <div className="card-body text-center cardhv">
                                <h5 className="card-title">SAM SUMON KALI</h5>
                                <p className="fs-5 text-dark text-capitalize">Anethesiologist</p>
                                <p className="fs-7 text-dark text-capitalize"><i className="fa fa-circle activedot"></i>
                                    Accept new Patients</p>
                                <hr />
                                <p className="text-dark text-capitalize">"nearest location &nbsp;"
                                    <i className="fa fa-map-marker"></i>
                                    "2144.29 mi"
                                </p>
                                <a>
                                    <h6 className="text-dark px-5">see details<i className="fa fa-long-arrow-right"></i></h6>
                                </a>
                            </div>

                        </div>
                        <div className="card border-0 py-5">
                            <img src="https://themeatelier.net/site-templates/clinica/img/doctors/doctors-3.jpg" className="card-img-top"
                                alt="..." />
                            <div className="card-body text-center cardhv">
                                <h5 className="card-title px-5">DR ALIN KHAN, MD</h5>
                                <p className="fs-5 text-dark text-capitalize ">Anethesiologist</p>
                                <p className="fs-7 text-dark text-capitalize"><i className="fa fa-circle activedot"></i>
                                    Accept new Patients</p>
                                <hr />
                                <p className="text-dark text-capitalize">"nearest location &nbsp;"
                                    <i className="fa fa-map-marker"></i>
                                    "2144.29 mi"
                                </p>
                                <a>
                                    <h6 className="text-dark px-5">see details<i className="fa fa-long-arrow-right"></i></h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center p-5">
                    <button type="button" className="btn  btn-primary btn-lg rounded-0">VIEW ALL DOCTORS</button>
                </div>
                <div className="row">
                    <div className="col-md-12 better">
                        <div className="pt-5 px-5 w-50">
                            <h1 className="pt-5 fw-bold btrTxt">Better people means better experiences.</h1>
                            <p className="pt-3 fs-6 fw-bold btrTxt">But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                            <button type="button" className="btn btn-primary btn-lg rounded-0 p-3 mx-5 btrBtn">MAKE APPOINTMENT</button>
                        </div>
                    </div>
                </div>
                <div className="sec2 container mt-5 pt-5">
                    <img src="https://themeatelier.net/site-templates/clinica/img/icons/icon-blog-title.png" alt="" />
                </div>
                <div className="sec2-container">
                    <div className="container sec2-1 mt-2">
                        <h2 className="mt-2 fw-bold">LATEST HEALTH NEWS</h2>
                        <p className="pb-5  ">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                            was born and will give you a complete account of the system, and expound the actual teachings</p>

                    </div>
                </div>
                <div className="card-group justify-content-center">
                    <div className="card m-3 cardhv ">
                        <img src="https://themeatelier.net/site-templates/clinica/img/blog/blog-thumb-1.jpg" className="card-img-top"
                            alt="..." />
                        <div className="card-body pt-3">
                            <h5 className="card-title fw-bold">NUTRITIONAL PERSONAL CONSULTATION</h5>
                            <p className="card-text text-dark text-lowercase pt-2">But I must explain to you how all this i mistaken idea of
                                denouncing pleasure and praising pain was i born and will give you a complete account more ...</p>
                            <a>
                                <h6 className="text-dark fs-6 fw-bold ">READ more<i className="fa fa-long-arrow-right "></i></h6>
                            </a>

                        </div>
                    </div>
                    <div className="card cardhv m-3">
                        <img src="https://themeatelier.net/site-templates/clinica/img/blog/blog-thumb-2.jpg" className="card-img-top"
                            alt="..." />
                        <div className="card-body pt-3">
                            <h5 className="card-title fw-bold">NUTRITIONAL PERSONAL CONSULTATION</h5>
                            <p className="card-text text-dark text-lowercase pt-2">But I must explain to you how all this i mistaken idea of
                                denouncing pleasure and praising pain was i born and will give you a complete account more ...</p>
                            <a>
                                <h6 className="text-dark fs-6 fw-bold">READ more<i className="fa fa-long-arrow-right"></i></h6>
                            </a>
                        </div>
                    </div>
                    <div className="card cardhv m-3">
                        <img src="https://themeatelier.net/site-templates/clinica/img/blog/blog-thumb-3.jpg" className="card-img-top"
                            alt="..." />
                        <div className="card-body pt-3">
                            <h5 className="card-title fw-bold">NUTRITIONAL PERSONAL CONSULTATION</h5>
                            <p className="card-text text-dark text-lowercase pt-2">But I must explain to you how all this i mistaken idea of
                                denouncing pleasure and praising pain was i born and will give you a complete account more ...</p>
                            <a>
                                <h6 className="text-dark fs-6 fw-bold">READ more<i className="fa fa-long-arrow-right"></i></h6>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center p-5">
                    <button type="button" className="btn btn-primary btn-lg rounded-0 fw-bold ">VIEW ALL POSTS</button>
                </div>

                {/* <div className="footer">
                <div className="contact row">

                    <section className="contact-info section-blue ">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7 col-sm-8">

                                    <h2 className="text-white pt-5 mt-5 fw-bolder">CONTACT INFO &amp; LOCATION</h2>
                                    <div className="col-sm-5 xs-padding-none">
                                        <ul className="list-unstyled">
                                            <i className="fa fa-location-arrow text-white mt-4"></i>
                                            <li className="text-white d-flex">121 King Street,
                                                London<br/>United Kingdom</li>
                                            <i className="fa fa-phone text-white mt-3"></i><li className="m-3 text-white">306-868-9132<br/>1.800.458.556</li>
                                            <i className="fa fa-envelope text-white mt-3"></i><li className="m-3 text-white"><a className="text-white "
                                                href="mailto:info@clicawebsite.com ">info@clicawebsite.com</a><br/><a className="text-white"
                                                    href="mailto:contact@clicawebsit.com">contact@clicawebsit.com </a></li>
                                            <div className="col-md-12 col-sm-12 map">
                                                <div className="map" style={{position: 'relative', overflow: "hidden"}}> <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2125.100553940306!2d-0.23448017595129197!3d51.49237526402422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fb5e9a09477%3A0xa6dc08e6c9ce4413!2sSingh%20Food%20%26%20Wine!5e1!3m2!1sen!2sus!4v1674125743652!5m2!1sen!2sus"
                                                    width="400" height="250" style={{border: "0"}} allowfullscreen="" loading="lazy"
                                                    referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                                            </div>
                                        </ul>

                                    </div>


                                </div>
                                <div className="col-md-5 col-sm-4">

                                    <h2 className="text-white pt-5 fw-bold m-5">OPENING HOURS</h2>
                                    <ul className=" list-unstyled">
                                        <li className="fs-6 m-3 text-white">Monday - Friday <span className="float-end">8.00 - 17.00</span></li>
                                        <hr className="text-white"/>
                                            <li className="fs-6 m-3 text-white">Saturday <span className="float-end">9.30 - 17.30</span></li>
                                            <hr className="text-white">
                                                <li className="fs-6 m-3 text-white">Sunday <span className="float-end">9.30 - 15.00</span></li>
                                                <hr className="text-white">
                                                </ul>

                                                
                                                                                            </div>
                                        </div>
                                </div>
                            </section>

                        </footer> */}
            </main>
            <section className="footer">
                <div className="container last2Con">
                    <div className="row">
                        <div className="col-sm-4 pt-5 mt-5">
                            <div className="single-footer-widget">
                                <h5 className="pt-1 pb-3 fw-bolder">ABOUT CLINICA</h5>
                                <p className="pt-1">But I must explain to you how all this mistaken ofidea of denouncing pleasure and praising
                                    pain was born and I will give you a complete account of the.</p>
                                <p className="pt-1">System, and expound the actual teachings of ello the great explorer of the truth, the
                                    master-builder of.</p>
                                <div className="socialLogos">
                                    <ul className="footer-social d-flex list-unstyled fs-2 ">
                                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-google-plus"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-pinterest"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 pt-5 mt-5">
                            <div className="single-footer-widget ">
                                <h5 className="pt-1 pb-3 fw-bolder">MEDICAL DEPARTMENTS</h5>
                                <ul className="list-unstyled ">
                                    <li className="p-2"><a className="text-decoration-none text-dark" href="#"><i
                                        className="fa fa-angle-right text-primary"></i> General Practice</a></li>
                                    <li className="p-2"><a className="text-decoration-none text-dark" href="#"><i
                                        className="fa fa-angle-right text-primary"></i> Cardiology</a></li>
                                    <li className="p-2"><a className="text-decoration-none text-dark" href="#"><i
                                        className="fa fa-angle-right text-primary"></i> Pediatrics</a></li>
                                    <li className="p-2"><a className="text-decoration-none text-dark" href="#"><i
                                        className="fa fa-angle-right text-primary"></i> Diabetes Care</a></li>
                                    <li className="p-2"><a className="text-decoration-none text-dark" href="#"><i
                                        className="fa fa-angle-right text-primary"></i> Ultrasound Echocardiogram</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4 pt-5 mt-5">
                            <div className="single-footer-widget">
                                <h5 className="pt-1 pb-3 fw-bolder">LATEST HEALTH TIPS</h5>
                                <ul className="list-unstyled">
                                    <li className="text-black p-2"><a className="text-decoration-none text-dark" href="#"><i
                                        className="fa fa-chevron-circle-right text-primary"></i> Nutritional Personal
                                        Consultation</a></li>
                                    <li className="text-black p-2"><a className="text-decoration-none text-dark" href="#"><i
                                        className="fa fa-chevron-circle-right text-primary"></i> Discoveries offer a new
                                        explanation for diabetes</a></li>
                                    <li className="text-black p-2"><a className="text-decoration-none text-dark" href="#"><i
                                        className="fa fa-chevron-circle-right text-primary"></i> Center for Medical Technology
                                    </a></li>
                                    <li className="text-black p-2"><a className="text-decoration-none text-dark" href="#"><i
                                        className="fa fa-chevron-circle-right text-primary"></i> New study links lutein with eye
                                        health benefits</a></li>
                                    <li className="text-black p-2"><a className="text-decoration-none text-dark" href="#"><i
                                        className="fa fa-chevron-circle-right text-primary"></i> Pets may reduce risk of heart
                                        disease</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <section>

                    <div className="row text-center d-flex align-items-center container mx-5">
                        {reviews.map((review) => (
                            <div key={review.id} className="col-md-4 mb-5 mb-md-0 d-flex align-items-center">
                                <div className="card testimonial-card">
                                    <div className="card-up" style={{ backgroundColor: review.color }}></div>
                                    <div className="avatar mx-auto bg-white">
                                        <img src={review.avatar} className="rounded-circle img-fluid" alt={review.author} />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="mb-4">{review.author}</h4>
                                        <hr />
                                        <p className="text-dark mt-4">
                                            <i className="fas fa-quote-left pe-2"></i>{review.comment}
                                        </p>
                                        <p className="text-dark mt-4">
                                            <i className="fas fa-star pe-2"></i>{review.rating}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <br/>
                <footer className="footer bg-dark text-white">
                    <div className="container">
                        <div className="row pt-4 pb-4">
                            <div className="col-sm-12">
                                <p className="fw-normal">Copyright © <a href="#" className="text-decoration-none">clinica</a> 2017. All rights
                                    reserved. | Clinica Theme by <a href="#" className=" text-decoration-none ">ThemeAtelier</a></p>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>

        </>
    )
}

export default Home;