import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-ice-blue">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">
                        <img src="Landing/images/logo-white.png" id="logo-white" alt="" />
                        <img
                            src="Landing/images/logo.png"
                            id="logo-blue"
                            style={{ display: "none" }}
                            alt=""
                        />
                    </a>
                </Link>
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
                            <Link href="/">
                                <a className="nav-link">
                                    Home <span className="sr-only">(current)</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/buyers">
                                <a className="nav-link">
                                    Buyers <span className="sr-only">(current)</span>
                                </a>
                            </Link>

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
                            <Link href="/support">
                                <a className="nav-link">
                                    Support
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link">
                                    About
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a className="nav-link">
                                    Contact
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/login">
                                <a className="nav-link">
                                    Login
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/register">
                                <a className="nav-link">
                                    Signup
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}