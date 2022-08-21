import Link from "next/link"

export default function Footer() {
    return (
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
                                    <Link href="/about">
                                        <a>About Inspxt</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms">
                                        <a>Terms of service</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy">
                                        <a>Privacy Policy</a>
                                    </Link>
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
    )
}