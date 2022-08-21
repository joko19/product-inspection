import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LayoutLanding from '../layout/LayoutLanding'
import LayoutAdmin from '../layout/LayoutAdmin'

export default function Home() {
  return (
    <LayoutLanding><>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-ice-blue">
        <div className="container-fluid">
          <a className="navbar-brand" href="index-2.html">
            <img src="Landing/images/logo-white.png" id="logo-white" alt="" />
            <img
              src="Landing/images/logo.png"
              id="logo-blue"
              style={{ display: "none" }}
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav justify-content-end ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="index-2.html">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="buyer-list.html">
                  Buyers <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="dropdown menu-large nav-item">
                {" "}
                <a
                  href="#"
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  Service
                </a>
                <ul className="dropdown-menu megamenu">
                  <div className="row">
                    <li className="col-sm-12 col-20 dropdown-item">
                      <ul>
                        <li className="dropdown-header">
                          <span>
                            <i className="far fa-tshirt" />
                          </span>{" "}
                          Quality Control Softlines
                        </li>
                        <li>
                          <a href="#">
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Textiles &amp; Garments
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Footwear
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Fabric
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Bags &amp; Accessories
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Amazon FBA Inspection
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="col-sm-12 col-20 dropdown-item">
                      <ul>
                        <li className="dropdown-header">
                          <span>
                            <i className="fa-solid fa-chair" />
                          </span>{" "}
                          Quality Control Hardlines
                        </li>
                        <li>
                          <a href="#">
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Furniture Inspection
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Homeware &amp; Kitchenware
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Building Materials
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Machinery &amp; Machinery Parts
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="col-sm-12 col-20 dropdown-item">
                      <ul>
                        <li className="dropdown-header">
                          <span>
                            <i className="fad fa-football-ball" />
                          </span>{" "}
                          Quality Control Toys
                        </li>
                        <li>
                          <a href="#">
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Children &amp; Baby Toys (Wood)
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Children &amp; Baby Toys (Stuffed)
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Children &amp; Baby Toys (Plastic)
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="col-sm-12 col-17 dropdown-item">
                      <ul>
                        <li className="dropdown-header">
                          <span>
                            <i className="far fa-shield-check" />
                          </span>{" "}
                          supplier Audit
                        </li>
                        <li>
                          <a href="#">
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Factory Assessment
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Textile QMS Evaluation
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Textile Technical Audit
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="col-sm-12 col-20 dropdown-item">
                      <ul>
                        <li className="dropdown-header">
                          <span>
                            <i className="fad fa-mobile-alt" />
                          </span>{" "}
                          Inspxt Mobile App Features
                        </li>
                        <li>
                          <a href="mobile-app.html" target="_blank">
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Streamline Supply Chain Operation
                          </a>
                        </li>
                        <li>
                          <a
                            href="mobile-app.html#Customize-to-Textile"
                            target="_blank"
                          >
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Customize to Textile Inspection
                          </a>
                        </li>
                        <li>
                          <a href="mobile-app.html#Easy-to-Start" target="_blank">
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Get Inspection Done Fast &amp; Accurate
                          </a>
                        </li>
                        <li>
                          <a
                            href="mobile-app.html#Real-time-Seamlessly"
                            target="_blank"
                          >
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Collaborate on Projects Seamlessly
                          </a>
                        </li>
                        <li>
                          <a
                            href="mobile-app.html#Empower-Your-Team"
                            target="_blank"
                          >
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Empower Your Team in the Field
                          </a>
                        </li>
                        <li>
                          <a
                            href="mobile-app.html#Share-Automated-Reports"
                            target="_blank"
                          >
                            <span className="dot">
                              <i className="fas fa-circle" />
                            </span>{" "}
                            Share Automated Reports
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="support.html" target="_blank">
                  Support{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html" target="_blank">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html" target="_blank">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login.html" target="_blank">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="register.html" target="_blank">
                  Signup
                </a>
              </li>
              <li className="nav-item dropdown no-arrow no-caret dropdown-user">
                <a
                  className="btn btn-icon btn-transparent-dark dropdown-toggle"
                  id="navbarDropdownUserImage"
                  href="javascript:void(0);"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img className="img-fluid" src="Landing/images/user/s4.png" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up"
                  aria-labelledby="navbarDropdownUserImage"
                >
                  <h6 className="dropdown-header d-flex align-items-center">
                    <img className="dropdown-user-img" src="Landing/images/user/s4.png" />
                    <div className="dropdown-user-details">
                      <div className="dropdown-user-details-name">Askbootstrap</div>
                      <div className="dropdown-user-details-email">
                        ben@gmail.com
                      </div>
                    </div>
                  </h6>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="account.html">
                    <div className="dropdown-item-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-settings"
                      >
                        <circle cx={12} cy={12} r={3} />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </svg>
                    </div>
                    Account
                  </a>
                  <a className="dropdown-item" href="#">
                    <div className="dropdown-item-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-log-out"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1={21} y1={12} x2={9} y2={12} />
                      </svg>
                    </div>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End INSPXT NAV */}
      {/* Begin Page Content */}
      <section className="homepage-search-block homepage-search-block-2 position-relative hero-banner">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide carousel-fade"
          data-ride="carousel"
          data-interval={5000}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div
                  style={{ position: "absolute", zIndex: 1, top: "15%" }}
                  className="big-banner"
                >
                  <div className="col-sm-12 col-md-9 col-lg-8 col-xl-7 pt-5">
                    <h1 className="text-shadow text-white font-weight-bold">
                      Hire The Professional
                      <br /> Product Inspection Team For Your Next Order
                    </h1>
                    <h5
                      className="text-shadow text-white font-weight-normal"
                      style={{ color: "#555555 !important" }}
                    >
                      Thousands of Importers (OEMs) and Manufacturers
                      <br /> (suppliers) Trust Inspxt For Quality Control.
                    </h5>
                  </div>
                  <div className="col-sm-12 col-md-9 col-lg-8 col-xl-7 hero-pricing-btn">
                    <a href="pricing.html" className="btn btn-green btn-green-lg">
                      Hire Now &amp; Save
                    </a>
                    <img
                      src="Landing/images/app-store-badge.svg"
                      alt="app-store-badge.svg"
                      width={140}
                    />
                    <img
                      src="Landing/images/google-play-badge.svg"
                      alt="google-play-badge.svg"
                      width={150}
                    />
                  </div>
                </div>
              </div>
              <img
                className="d-block w-100"
                src="Landing/images/bg-hero-inspxt-1792-x1.jpg"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div
                  style={{ position: "absolute", zIndex: 1, top: "15%" }}
                  className="big-banner"
                >
                  <div className="col-sm-12 col-md-9 col-lg-8 col-xl-8 pt-5">
                    <h1 className="text-shadow text-white font-weight-bold">
                      Streamline Supply Chain Operation with <br /> Inspxt Mobile
                      App
                    </h1>
                    <h5
                      className="text-shadow text-white font-weight-normal"
                      style={{ color: "#555555 !important" }}
                    >
                      Thousands of Importers (OEMs) and Manufacturers
                      <br /> (suppliers) Trust Inspxt For Quality Control.
                    </h5>
                  </div>
                  <div className="col-sm-12 col-md-9 col-lg-8 col-xl-7 hero-pricing-btn">
                    <a href="pricing.html" className="btn btn-green btn-green-lg">
                      Buy Now &amp; Save
                    </a>
                    <img
                      src="Landing/images/app-store-badge.svg"
                      alt="app-store-badge.svg"
                      width={140}
                    />
                    <img
                      src="Landing/images/google-play-badge.svg"
                      alt="google-play-badge.svg"
                      width={150}
                    />
                  </div>
                </div>
              </div>
              <img
                className="d-block w-100"
                src="Landing/images/mobile-1.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div
                  style={{ position: "absolute", zIndex: 1, top: "15%" }}
                  className="big-banner"
                >
                  <div className="col-sm-12 col-md-9 col-lg-8 col-xl-8 pt-5">
                    <h1 className="text-shadow text-white font-weight-bold">
                      Streamline Supply Chain Operation with <br /> Inspxt Mobile
                      App
                    </h1>
                    <h5
                      className="text-shadow text-white font-weight-normal"
                      style={{ color: "#555555 !important" }}
                    >
                      Thousands of Importers (OEMs) and Manufacturers
                      <br /> (suppliers) Trust Inspxt For Quality Control.
                    </h5>
                  </div>
                  <div className="col-sm-12 col-md-9 col-lg-8 col-xl-7 hero-pricing-btn">
                    <a href="pricing.html" className="btn btn-green btn-green-lg">
                      Buy Now &amp; Save
                    </a>
                    <img
                      src="Landing/images/app-store-badge.svg"
                      alt="app-store-badge.svg"
                      width={140}
                    />
                    <img
                      src="Landing/images/google-play-badge.svg"
                      alt="google-play-badge.svg"
                      width={150}
                    />
                  </div>
                </div>
              </div>
              <img
                className="d-block w-100"
                src="Landing/images/mobile-2.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div
                  style={{ position: "absolute", zIndex: 1, top: "15%" }}
                  className="big-banner"
                >
                  <div className="col-sm-12 col-md-9 col-lg-8 col-xl-8 pt-5">
                    <h1 className="text-shadow text-white font-weight-bold">
                      Streamline Supply Chain Operation with <br /> Inspxt Mobile
                      App
                    </h1>
                    <h5
                      className="text-shadow text-white font-weight-normal"
                      style={{ color: "#555555 !important" }}
                    >
                      Thousands of Importers (OEMs) and Manufacturers
                      <br /> (suppliers) Trust Inspxt For Quality Control.
                    </h5>
                  </div>
                  <div className="col-sm-12 col-md-9 col-lg-8 col-xl-7 hero-pricing-btn">
                    <a href="pricing.html" className="btn btn-green btn-green-lg">
                      Buy Now &amp; Save
                    </a>
                    <img
                      src="Landing/images/app-store-badge.svg"
                      alt="app-store-badge.svg"
                      width={140}
                    />
                    <img
                      src="Landing/images/google-play-badge.svg"
                      alt="google-play-badge.svg"
                      width={150}
                    />
                  </div>
                </div>
              </div>
              <img
                className="d-block w-100"
                src="Landing/images/mobile-3.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div
                  style={{ position: "absolute", zIndex: 1, top: "15%" }}
                  className="big-banner"
                >
                  <div className="col-sm-12 col-md-9 col-lg-8 col-xl-8 pt-5">
                    <h1 className="text-shadow text-white font-weight-bold">
                      Streamline Supply Chain Operation with <br /> Inspxt Mobile
                      App
                    </h1>
                    <h5
                      className="text-shadow text-white font-weight-normal"
                      style={{ color: "#555555 !important" }}
                    >
                      Thousands of Importers (OEMs) and Manufacturers
                      <br /> (suppliers) Trust Inspxt For Quality Control.
                    </h5>
                  </div>
                  <div className="col-sm-12 col-md-9 col-lg-8 col-xl-7 hero-pricing-btn">
                    <a href="pricing.html" className="btn btn-green btn-green-lg">
                      Buy Now &amp; Save
                    </a>
                    <img
                      src="Landing/images/app-store-badge.svg"
                      alt="app-store-badge.svg"
                      width={140}
                    />
                    <img
                      src="Landing/images/google-play-badge.svg"
                      alt="google-play-badge.svg"
                      width={150}
                    />
                  </div>
                </div>
              </div>
              <img
                className="d-block w-100"
                src="Landing/images/mobile-4.jpg"
                alt="Second slide"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Small Screen Banner */}
      <section className="homepage-search-block homepage-search-block-2 position-relative small-banner">
        <div className="small-banner-height">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide carousel-fade"
            data-ride="carousel"
            data-interval={3000}
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container-fluid">
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 small-slider-padd">
                    <h1 className="text-shadow text-white font-weight-bold">
                      Hire The Professional Product Inspection Team For Your Next
                      Order
                    </h1>
                    <h5
                      className="mb-1 text-shadow text-white font-weight-normal"
                      style={{ color: "#555555 !important" }}
                    >
                      Thousands of Importers (OEMs) and Manufacturers (suppliers)
                      Trust Inspxt For Quality Control.
                    </h5>
                    <a
                      href="pricing.html"
                      className="btn btn-green hero-pricing-btn"
                    >
                      Hire Now &amp; Save
                    </a>
                    <img
                      src="Landing/images/app-store-badge.svg"
                      alt="app-store-badge.svg"
                    />
                    <img
                      src="Landing/images/google-play-badge.svg"
                      alt="google-play-badge.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container-fluid">
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 small-slider-padd">
                    <h1 className="text-shadow text-white font-weight-bold">
                      Streamline Supply Chain Operation with Inspxt Mobile App
                    </h1>
                    <h5
                      className="mb-1 text-shadow text-white font-weight-normal"
                      style={{ color: "#555555 !important" }}
                    >
                      Thousands of Importers (OEMs) and Manufacturers (suppliers)
                      Trust Inspxt For Quality Control.
                    </h5>
                    <a
                      href="pricing.html"
                      className="btn btn-green hero-pricing-btn"
                    >
                      Buy Now &amp; Save
                    </a>
                    <img
                      src="Landing/images/app-store-badge.svg"
                      alt="app-store-badge.svg"
                    />
                    <img
                      src="Landing/images/google-play-badge.svg"
                      alt="google-play-badge.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*       social */}
      <div className="trusted-by">
        <div className="trusted-icon amazon">
          <img src="Landing/images/clients/a1.png" />
        </div>
        <div className="trusted-icon costco">
          <img src="Landing/images/clients/a2.png" />
        </div>
        <div className="trusted-icon columbia">
          <img src="Landing/images/clients/a3.png" />
        </div>
        <div className="trusted-icon cratebarrel">
          <img src="Landing/images/clients/a4.png" />
        </div>
        <div className="trusted-icon macy">
          <img src="Landing/images/clients/a5.png" />
        </div>
        <div className="trusted-icon migro">
          <img src="Landing/images/clients/a6.png" />
        </div>
        <div className="trusted-icon zara">
          <img src="Landing/images/clients/a7.png" />
        </div>
      </div>
      {/*       social */}
      {/*     market   */}
      {/*       freelancer projects */}
      <div className="freelance-projects py-5">
        <div className="container-fluid">
          <h2>
            Get Inspired With Inspxt Quality Control Service for your Next Order.
            <a href="#" className="float-right">
              See More &gt;
            </a>
          </h2>
          <div className="row freelance-slider">
            <div className="col">
              <div className="freelancer">
                <img src="Landing/images/senatopcustudio.jpg" />
                <div className="freelancer-footer">
                  <img src="Landing/images/user/s7.png" />
                  <h5>
                    Logo Design
                    <span>
                      by <i>John</i>
                    </span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="freelancer">
                <img src="Landing/images/vnuggz.jpg" />
                <div className="freelancer-footer">
                  <img src="Landing/images/user/s8.png" />
                  <h5>
                    Web &amp; Mobile Design
                    <span>
                      by <i>John</i>
                    </span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="freelancer">
                <img src="Landing/images/digitalgeria.jpg" />
                <div className="freelancer-footer">
                  <img src="Landing/images/user/s1.png" />
                  <h5>
                    Packaging Design
                    <span>
                      by <i>John</i>
                    </span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="freelancer">
                <img src="Landing/images/artsi3d.jpg" />
                <div className="freelancer-footer">
                  <img src="Landing/images/user/s2.png" />
                  <h5>
                    Brand Style Guides
                    <span>
                      by <i>John</i>
                    </span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="freelancer">
                <img src="Landing/images/designerheather.jpg" />
                <div className="freelancer-footer">
                  <img src="Landing/images/user/s3.png" />
                  <h5>
                    Illustration
                    <span>
                      by <i>John</i>
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*    about section */}
      <div className="container-fluid">
        <div className="about-section py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>
                Get Product Inspection Job Done Faster and Accurate via Inspxt, With
                Confidence
              </h2>
              <ul>
                <li>
                  <span>
                    <img src="Landing/images/checkmark.svg" /> Your Trusted Partner for
                    Global Supply Chain
                  </span>
                  Ensure products quality and streamline your supply chain daily
                  operations with Inspxt mobile App. Inspxt simply the product
                  quality control process for you.
                </li>
                <li>
                  <span>
                    <img src="Landing/images/checkmark.svg" /> Improve Productivity and
                    Reduce Downtime.
                  </span>
                  Hire Inspxt qualified inspectors, or use Inspxt mobile App to do
                  your product inspection. You know what you’ll pay to improve
                  productivity and reduce downtime.
                </li>
                <li>
                  <span>
                    <img src="Landing/images/checkmark.svg" /> We’re Your One-Stop Shop for
                    Quality Control Need
                  </span>
                  Inspxt has a product inspection mobile App and an inspector
                  network covering China, Taiwan, Vietnam, India, Bangladesh,
                  Pakistan＆Turkey. We’re Here for You 24/7
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src="Landing/images/video.png" className="video-img w-100" />
            </div>
          </div>
        </div>
      </div>
      {/*    about section */}
      <div className="market-wrapper py-5 bg-white">
        <div className="container-fluid">
          <h2 className="text-center">Improve Your Supply Chain</h2>
          <ul className="categories-list mb-0">
            <li>
              <a href="#">
                <div className="market-icons">
                  <i className="fal fa-clipboard-list-check" />
                </div>
                Product Inspection
              </a>
            </li>
            <li>
              <a href="#">
                <div className="market-icons">
                  <i className="fal fa-box-full" />
                </div>
                Amazon FBA Inspection
              </a>
            </li>
            <li>
              <a href="#">
                <div className="market-icons">
                  <i className="fal fa-box-check" />
                </div>
                Initial Production Check
              </a>
            </li>
            <li>
              <a href="#">
                <div className="market-icons">
                  <i className="fal fa-industry-alt" />
                </div>
                During Production Inspection
              </a>
            </li>
            <li>
              <a href="#">
                <div className="market-icons">
                  <i className="fal fa-ship" />
                </div>
                Pre-Shipment Inspection
              </a>
            </li>
            <li>
              <a href="#">
                <div className="market-icons">
                  <i className="fal fa-list-ol" />
                </div>
                Digital Forms &amp; Checklist
              </a>
            </li>
            <li>
              <a href="#">
                <div className="market-icons">
                  <i className="far fa-handshake" />
                </div>
                Inspection Scheduling
              </a>
            </li>
            <li>
              <a href="#">
                <div className="market-icons">
                  <i className="fal fa-file-chart-line" />
                </div>
                Automated Reports
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*       testimonials */}
      <div className="testi-wrap border-top border-bottom">
        <div className="container-fluid">
          <div className="testimonial">
            <div className="video-modal">
              <div className="picture-wrapper">
                <img src="Landing/images/guide-02.jpg" />
              </div>
            </div>
            <div className="p-5">
              {/* <h4>Say Goodbye to Paper Based Inspections</h4>
           <p>"Paper inspection forms are often compiled over time and without a logical sequence. Inspxt mobile app
              allows our in-house inspectors to follow a sequence and ensures all answers are completely answered
              which ensure a higher level of detail and accuracy that pen and paper inspections cannot accomplish."
           </p>
           <span>Richard Wilson, V.P. of Global Supply Chain</span> */}
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-ride="carousel"
                data-interval={3000}
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <h4>Ensure Quality Assurance &amp; Compliance</h4>
                    <p>
                      "Being in Ecommerce business and a growing Amazon seller, we
                      have to definitely do a lot more with less. And when you want
                      to create a business bigger than yourself, you’re going to
                      need help. Inspxt ensures product quality throughout our
                      entire supply chain. And that’s what Inspxt does"
                      <br />
                      <br />
                      <span>Judy and Samuel, Co-founders Faith Fashion</span>
                    </p>
                  </div>
                  <div className="carousel-item">
                    <h4>Say Goodbye to Paper Based Inspections</h4>
                    <p>
                      "Paper inspection forms are often compiled over time and
                      without a logical sequence. Inspxt mobile app allows our
                      in-house inspectors to follow a sequence and ensures all
                      answers are completely answered which ensure a higher level of
                      detail and accuracy that pen and paper inspections cannot
                      accomplish."
                      <br />
                      <br />
                      <span>Richard Wilson, V.P. of Global Supply Chain</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="get-started">
          <div className="content">
            <h2>Get Quality Control Job Done Fast and Accurate Today</h2>
            <p>We've got you covered for all your Quality Control needs</p>
            <a href="#" className="c-btn c-fill-color-btn-blue">
              Get Started
            </a>
            <div className="pt-3">
              <img
                src="Landing/images/app-store-badge.svg"
                alt="app-store-badge.svg"
                width={90}
              />
              <img
                src="Landing/images/google-play-badge.svg"
                alt="google-play-badge.svg"
                width={100}
              />
            </div>
          </div>
        </div>
      </div>
      {/* get started */}
      {/*       footer */}
      <footer>
        <div className="bg-lyt-blue p-5">
          <div className="container-fluid">
            <div className="d-flex justify-content-between">
              <div className="footer-list">
                <h2>Quality Control Inspections</h2>
                <ul className="list">
                  <li>
                    <a href="#">Amazon FBA Inspection</a>
                  </li>
                  <li>
                    <a href="#">Initial Production Check </a>
                  </li>
                  <li>
                    <a href="#">During Production Inspection</a>
                  </li>
                  <li>
                    <a href="#">Pre-Shipment Inspection</a>
                  </li>
                  <li>
                    <a href="#">Container Loading Monitoring</a>
                  </li>
                  <li>
                    <a href="#">Production Monitoring</a>
                  </li>
                  <li>
                    <a href="#">Sample Collection</a>
                  </li>
                  <li>
                    <a href="#">Fabric &amp; raw material inspection</a>
                  </li>
                </ul>
              </div>
              <div className="footer-list">
                <h2>Supplier Audit Services</h2>
                <ul className="list">
                  <li>
                    <a href="#">Factory Assessment</a>
                  </li>
                  <li>
                    <a href="#">Textile QMS Evaluation</a>
                  </li>
                  <li>
                    <a href="#">Textile Technical Audit</a>
                  </li>
                </ul>
              </div>
              <div className="footer-list">
                <h2>Inspxt Support</h2>
                <ul className="list">
                  <li>
                    <a href="inspxt-admin/buyers.html">Online Booking</a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="support.html">Help &amp; Support</a>
                  </li>
                  <li>
                    <a href="inspector-register.html">Inspector Signup</a>
                  </li>
                </ul>
              </div>
              <div className="footer-list">
                <h2>Company</h2>
                <ul className="list">
                  <li>
                    <a href="about.html">About Inspxt</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="terms.html">Terms of service</a>
                  </li>
                  <li>
                    <a href="privacy.html">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="footer-list txt-white">
                <h2>Inspxt Mobile App</h2>
                <ul className="list">
                  <li>
                    <a href="mobile-app.html" target="_blank">
                      Streamline Supply Chain Operation
                    </a>
                  </li>
                  <li>
                    <a href="mobile-app.html#Customize-to-Textile" target="_blank">
                      Customize to Textile Inspection
                    </a>
                  </li>
                  <li>
                    <a href="mobile-app.html#Easy-to-Start" target="_blank">
                      Get Inspection Done Fast &amp; Accurate
                    </a>
                  </li>
                  <li>
                    <a href="mobile-app.html#Real-time-Seamlessly" target="_blank">
                      Collaborate on Projects Seamlessly
                    </a>
                  </li>
                  <li>
                    <a href="mobile-app.html#Empower-Your-Team" target="_blank">
                      Empower Your Team in the Field
                    </a>
                  </li>
                  <li>
                    <a
                      href="mobile-app.html#Share-Automated-Reports"
                      target="_blank"
                    >
                      Share Automated Reports
                    </a>
                  </li>
                </ul>
                <br />
                <img
                  src="Landing/images/app-store-badge.svg"
                  alt="app-store-badge.svg"
                  width={90}
                />
                <img
                  src="Landing/images/google-play-badge.svg"
                  alt="google-play-badge.svg"
                  width={100}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-ice-blue">
          <div className="container-fluid">
            <div className="copyright">
              <div className="logo">
                <a href="index-2.html">
                  <img src="Landing/images/logo.png" />
                </a>
              </div>
              <p>© Copyright 2020 Inspxt. All Rights Reserved</p>
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest-p" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>

    </LayoutLanding>
  )
}
