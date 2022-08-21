import LayoutAdmin from "../../layout/LayoutAdmin"
import Head from "next/head";
import { Helmet } from "react-helmet";

export default function BookNow() {
    return (
        <>
            <LayoutAdmin>
                <div id="main-wrapper">
                    {/***********************************
      Nav header start
  ************************************/}
                    <div className="nav-header">
                        <div className="brand-logo">
                            <a href="index.html">
                                <b className="logo-abbr">
                                    <img src="../Admin/images/icon.html" alt="" />{" "}
                                </b>
                                <span className="logo-compact">
                                    <img src="../Admin/images/logo.png" alt="" />
                                </span>
                                <span className="brand-title">
                                    <img src="../Admin/images/logo-white.png" className="w-100" alt="" />
                                </span>
                            </a>
                        </div>
                    </div>
                    {/***********************************
      Nav header end
  ************************************/}
                    {/***********************************
      Header start
  ************************************/}
                    <div className="header">
                        <div className="header-content clearfix">
                            <div className="nav-control">
                                <div className="hamburger">
                                    <span className="toggle-icon">
                                        <i className="icon-menu" />
                                    </span>
                                </div>
                            </div>
                            <div className="header-left">
                                <div className="input-group icons">
                                    <div className="input-group-prepend">
                                        <span
                                            className="input-group-text bg-transparent border-0 pr-2 pr-sm-3"
                                            id="basic-addon1"
                                        >
                                            <i className="mdi mdi-magnify" />
                                        </span>
                                    </div>
                                    <input
                                        type="search"
                                        className="form-control"
                                        placeholder="Search Dashboard"
                                        aria-label="Search Dashboard"
                                    />
                                    <div className="drop-down animated flipInX d-md-none">
                                        <form action="#">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search"
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="header-right">
                                <ul className="clearfix">
                                    <li className="icons dropdown">
                                        <a href="javascript:void(0)" data-toggle="dropdown">
                                            <i className="mdi mdi-email-outline" />
                                            <span className="badge badge-pill gradient-1">3</span>
                                        </a>
                                        <div className="drop-down animated fadeIn dropdown-menu">
                                            <div className="dropdown-content-heading d-flex justify-content-between">
                                                <span className="">3 New Messages</span>
                                                <a href="javascript:void()" className="d-inline-block">
                                                    <span className="badge badge-pill gradient-1">3</span>
                                                </a>
                                            </div>
                                            <div className="dropdown-content-body">
                                                <ul>
                                                    <li className="notification-unread">
                                                        <a href="javascript:void()">
                                                            <img
                                                                className="float-left mr-3 avatar-img"
                                                                src="../Admin/images/avatar/1.jpg"
                                                                alt=""
                                                            />
                                                            <div className="notification-content">
                                                                <div className="notification-heading">Saiful Islam</div>
                                                                <div className="notification-timestamp">
                                                                    08 Hours ago
                                                                </div>
                                                                <div className="notification-text">
                                                                    Hi Teddy, Just wanted to let you ...
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="notification-unread">
                                                        <a href="javascript:void()">
                                                            <img
                                                                className="float-left mr-3 avatar-img"
                                                                src="../Admin/images/avatar/2.jpg"
                                                                alt=""
                                                            />
                                                            <div className="notification-content">
                                                                <div className="notification-heading">Adam Smith</div>
                                                                <div className="notification-timestamp">
                                                                    08 Hours ago
                                                                </div>
                                                                <div className="notification-text">
                                                                    Can you do me a favour?
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void()">
                                                            <img
                                                                className="float-left mr-3 avatar-img"
                                                                src="../Admin/images/avatar/3.jpg"
                                                                alt=""
                                                            />
                                                            <div className="notification-content">
                                                                <div className="notification-heading">Barak Obama</div>
                                                                <div className="notification-timestamp">
                                                                    08 Hours ago
                                                                </div>
                                                                <div className="notification-text">
                                                                    Hi Teddy, Just wanted to let you ...
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void()">
                                                            <img
                                                                className="float-left mr-3 avatar-img"
                                                                src="../Admin/images/avatar/4.jpg"
                                                                alt=""
                                                            />
                                                            <div className="notification-content">
                                                                <div className="notification-heading">
                                                                    Hilari Clinton
                                                                </div>
                                                                <div className="notification-timestamp">
                                                                    08 Hours ago
                                                                </div>
                                                                <div className="notification-text">Hello</div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="icons dropdown">
                                        <a href="javascript:void(0)" data-toggle="dropdown">
                                            <i className="mdi mdi-bell-outline" />
                                            <span className="badge badge-pill gradient-2">3</span>
                                        </a>
                                        <div className="drop-down animated fadeIn dropdown-menu dropdown-notfication">
                                            <div className="dropdown-content-heading d-flex justify-content-between">
                                                <span className="">2 New Notifications</span>
                                                <a href="javascript:void()" className="d-inline-block">
                                                    <span className="badge badge-pill gradient-2">5</span>
                                                </a>
                                            </div>
                                            <div className="dropdown-content-body">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void()">
                                                            <span className="mr-3 avatar-icon bg-success-lighten-2">
                                                                <i className="icon-present" />
                                                            </span>
                                                            <div className="notification-content">
                                                                <h6 className="notification-heading">
                                                                    Events near you
                                                                </h6>
                                                                <span className="notification-text">
                                                                    Within next 5 days
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void()">
                                                            <span className="mr-3 avatar-icon bg-danger-lighten-2">
                                                                <i className="icon-present" />
                                                            </span>
                                                            <div className="notification-content">
                                                                <h6 className="notification-heading">Event Started</h6>
                                                                <span className="notification-text">One hour ago</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void()">
                                                            <span className="mr-3 avatar-icon bg-success-lighten-2">
                                                                <i className="icon-present" />
                                                            </span>
                                                            <div className="notification-content">
                                                                <h6 className="notification-heading">
                                                                    Event Ended Successfully
                                                                </h6>
                                                                <span className="notification-text">One hour ago</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void()">
                                                            <span className="mr-3 avatar-icon bg-danger-lighten-2">
                                                                <i className="icon-present" />
                                                            </span>
                                                            <div className="notification-content">
                                                                <h6 className="notification-heading">Events to Join</h6>
                                                                <span className="notification-text">
                                                                    After two days
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="icons dropdown d-none d-md-flex">
                                        <a
                                            href="javascript:void(0)"
                                            className="log-user"
                                            data-toggle="dropdown"
                                        >
                                            <span>English</span>{" "}
                                            <i className="fa fa-angle-down f-s-14" aria-hidden="true" />
                                        </a>
                                        <div className="drop-down dropdown-language animated fadeIn  dropdown-menu">
                                            <div className="dropdown-content-body">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void()">English</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void()">Dutch</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="icons dropdown">
                                        <div
                                            className="user-img c-pointer position-relative"
                                            data-toggle="dropdown"
                                        >
                                            <span className="activity active" />
                                            <img src="../Admin/images/user/1.png" height={40} width={40} alt="" />
                                        </div>
                                        <div className="drop-down dropdown-profile animated fadeIn dropdown-menu">
                                            <div className="dropdown-content-body">
                                                <ul>
                                                    <li>
                                                        <a href="app-profile.html">
                                                            <i className="icon-user" />
                                                            <span>Profile</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void()">
                                                            <i className="icon-envelope-open" /> <span>Inbox</span>
                                                            <div className="badge gradient-3 badge-pill gradient-1">
                                                                3
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <hr className="my-2" />
                                                    <li>
                                                        <a href="page-lock.html">
                                                            <i className="icon-lock" /> <span>Lock Screen</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="page-login.html">
                                                            <i className="icon-key" /> <span>Logout</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/***********************************
      Header end ti-comment-alt
  ************************************/}
                    {/***********************************
      Sidebar start
  ************************************/}
                    <div className="nk-sidebar">
                        <div className="nk-nav-scroll">
                            <ul className="metismenu" id="menu">
                                {/* <li class="nav-label">Dashboard</li>
              <li>
                  <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                      <i class="icon-speedometer menu-icon"></i><span class="nav-text">Dashboard</span>
                  </a>
                  <ul aria-expanded="false">
                      <li><a href="./index.html">Home 1</a></li>
                  </ul>
              </li> */}
                                <li>
                                    <a href="index.html" aria-expanded="false">
                                        <i className="icon-speedometer menu-icon" />
                                        <span className="nav-text">Buyer Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="index.html" aria-expanded="false">
                                        <i className="icon-speedometer menu-icon" />
                                        <span className="nav-text">Supplier Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="dashboard-freelancer.html" aria-expanded="false">
                                        <i className="icon-speedometer menu-icon" />
                                        <span className="nav-text">Freelancer Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="buyersv2.html" aria-expanded="false">
                                        <i className="fal fa-bookmark" />
                                        <span className="nav-text">Book Now</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="booking-summary.html" aria-expanded="false">
                                        <i className="far fa-list" />
                                        <span className="nav-text">Bookings</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="schedule-summary.html" aria-expanded="false">
                                        <i className="fal fa-calendar" />
                                        <span className="nav-text">Schedules</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="report-summary.html" aria-expanded="false">
                                        <i className="fal fa-file-chart-line" />
                                        <span className="nav-text">Reports</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="page-error-404.html" aria-expanded="false">
                                        <i className="far fa-clipboard-list-check" />
                                        <span className="nav-text">Actions</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="supplier-summary.html" aria-expanded="false">
                                        <i className="far fa-industry-alt" />
                                        <span className="nav-text">Supplier</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="page-error-404.html" aria-expanded="false">
                                        <i className="far fa-map-marker" />
                                        <span className="nav-text">Contact</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="subscription.html" aria-expanded="false">
                                        <i className="fal fa-money-bill-wave" />
                                        <span className="nav-text">Subscription</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="page-error-404.html" aria-expanded="false">
                                        <i className="fal fa-chart-bar" />
                                        <span className="nav-text">Analytics</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="profile.html" aria-expanded="false">
                                        <i className="far fa-user-circle" />
                                        <span className="nav-text">Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="settings.html" aria-expanded="false">
                                        <i className="fal fa-cog" />
                                        <span className="nav-text">Settings</span>
                                    </a>
                                </li>
                                <li className="nav-label">Supplier Dashboard</li>
                                <li>
                                    <a href="page-error-404.html" aria-expanded="false">
                                        <i className="fal fa-hand-holding-magic" />
                                        <span className="nav-text">Buyer</span>
                                    </a>
                                </li>
                                <li className="nav-label">Inspector Dashboard</li>
                                <li>
                                    <a href="index.html" aria-expanded="false">
                                        <i className="far fa-money-bill-wave" />
                                        <span className="nav-text">Earnings</span>
                                    </a>
                                </li>
                                <li className="nav-label">Admin Dashboard</li>
                                <li>
                                    <a
                                        className="has-arrow"
                                        href="javascript:void()"
                                        aria-expanded="false"
                                    >
                                        <i className="fal fa-flag-alt" />
                                        <span className="nav-text">Gigs</span>
                                    </a>
                                    <ul aria-expanded="false">
                                        <li>
                                            <a href="page-error-404.html">Post Gig</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="page-error-404.html" aria-expanded="false">
                                        <i className="far fa-ballot-check" />
                                        <span className="nav-text">Checklist Library</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="has-arrow"
                                        href="javascript:void()"
                                        aria-expanded="false"
                                    >
                                        <i className="fal fa-users" />
                                        <span className="nav-text">Team</span>
                                    </a>
                                    <ul aria-expanded="false">
                                        <li>
                                            <a href="page-error-404.html">Staff</a>
                                        </li>
                                        <li>
                                            <a href="page-error-404.html">Freelancer</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a
                                        className="has-arrow"
                                        href="javascript:void()"
                                        aria-expanded="false"
                                    >
                                        <i className="far fa-money-bill-wave" />
                                        <span className="nav-text">Payments</span>
                                    </a>
                                    <ul aria-expanded="false">
                                        <li>
                                            <a href="page-error-404.html">Unpaid Booking</a>
                                        </li>
                                        <li>
                                            <a href="page-error-404.html">Paid Booking</a>
                                        </li>
                                        <li>
                                            <a href="page-error-404.html">Invoices</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/***********************************
      Sidebar end
  ************************************/}
                    {/***********************************
      Content body start
  ************************************/}
                    <div className="content-body">
                        <div className="row page-titles mx-0">
                            <div className="col p-md-0">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="javascript:void(0)">Dashboard</a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        <a href="javascript:void(0)">Buyers List</a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        {/* row */}
                        <div className="container-fluid">
                            <div className="row">
                                <div
                                    className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-3"
                                    style={{ marginLeft: 36 }}
                                >
                                    <div className="circle-box blue-category mr-2 cb-icon">
                                        <i className="far fa-box-open" />
                                    </div>
                                    <h5 style={{ marginTop: 15 }}>Product Inspection</h5>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div id="accordion-two" className="accordion">
                                    <div className="card">
                                        <div className="row mr-0">
                                            <div className="col-sm-12 col-md-12 col-lg-11">
                                                <div className="card-header border-0 pr-0">
                                                    <h5
                                                        className="mb-0"
                                                        data-toggle="collapse"
                                                        data-target="#collapseOne1"
                                                        aria-expanded="true"
                                                        aria-controls="collapseOne1"
                                                    >
                                                        <i
                                                            className="fa"
                                                            aria-hidden="true"
                                                            style={{ paddingTop: 30 }}
                                                        />{" "}
                                                        Amazon FBA Inspection
                                                        <div className="circle-box blue-list mr-2">FBAI</div>
                                                    </h5>
                                                    <strong>
                                                        <p
                                                            data-toggle="collapse"
                                                            data-target="#collapseOne1"
                                                            aria-expanded="true"
                                                            aria-controls="collapseOne1"
                                                        >
                                                            Amazon FBA inspection(FBAI）is the inspection that is
                                                            carried out at the end of the production in the supply
                                                            chain when the products are packed and ready for shipment.
                                                        </p>
                                                    </strong>
                                                </div>
                                                <div
                                                    id="collapseOne1"
                                                    className="collapse"
                                                    data-parent="#accordion-two"
                                                >
                                                    <div className="card-body" style={{ marginLeft: 70 }}>
                                                        <p>
                                                            Amazon FBA inspection(FBAI）is the inspection that is
                                                            carried out at the end of the production in the supply
                                                            chain when the products are packed and ready for shipment.
                                                            FBAI will ensure that your product makes it to the Amazon
                                                            warehouse and is not rejected because of any Amazon FBA
                                                            violations.
                                                        </p>
                                                        <p>
                                                            The Amazon FBA inspections can help you greatly improve
                                                            the quality of your deliverables. With proper labeling and
                                                            packaging inspections, you will ensure that the products
                                                            will end up in the right warehouse, avoiding any penalties
                                                            and poor customer reviews. The FBA inspection will help
                                                            you avoid any last-minute surprises that can cost you
                                                            greatly in terms of time, money and customer satisfaction.
                                                            Amazon FBA inspection(FBAI）covered:
                                                        </p>
                                                        <ul>
                                                            <li>Quality Conformity</li>
                                                            <li>Quantity Conformity</li>
                                                            <li>Amazon Label Requirements</li>
                                                            <li>Amazon Packaging Requirements</li>
                                                            <li>Measurements</li>
                                                            <li>Carton Weight &amp; Dimensions</li>
                                                        </ul>
                                                        <strong>
                                                            <a
                                                                className="btn btn-info btn-sm"
                                                                href="booking-FBAInspection.html"
                                                            >
                                                                Book now
                                                            </a>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-1 pl-0 ">
                                                <a
                                                    className="btn btn-sm btn-info w-100"
                                                    style={{ marginTop: 36, marginRight: 10 }}
                                                    href="booking-FBAInspection.html"
                                                >
                                                    Book now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="row mr-0">
                                            <div className="col-sm-12 col-md-12 col-lg-11">
                                                <div className="card-header border-0 pr-0">
                                                    <h5
                                                        className="mb-0 collapsed"
                                                        data-toggle="collapse"
                                                        data-target="#collapseTwo2"
                                                        aria-expanded="false"
                                                        aria-controls="collapseTwo2"
                                                    >
                                                        <i
                                                            className="fa"
                                                            aria-hidden="true"
                                                            style={{ paddingTop: 30 }}
                                                        />{" "}
                                                        Initial Production Check
                                                        <div className="circle-box blue-list mr-2">IPC</div>
                                                    </h5>
                                                    <strong>
                                                        <p
                                                            data-toggle="collapse"
                                                            data-target="#collapseTwo2"
                                                            aria-expanded="false"
                                                            aria-controls="collapseTwo2"
                                                        >
                                                            Initial Pre-Production checks (IPC), also known as,
                                                            Pre-Production Inspections (PPI). It is the next step
                                                            after the identification and the evaluation of your
                                                            vendor/factory.
                                                        </p>
                                                    </strong>
                                                </div>
                                                <div
                                                    id="collapseTwo2"
                                                    className="collapse"
                                                    data-parent="#accordion-two"
                                                >
                                                    <div className="card-body" style={{ marginLeft: 70 }}>
                                                        <p>
                                                            Initial Pre-Production checks (IPC), also known as,
                                                            Pre-Production Inspections (PPI). It is the next step
                                                            after the identification and the evaluation of your
                                                            vendor/factory. Initial Pre-Production checks if the
                                                            vendor is understood well your product specifications and
                                                            ready for production. It should be performed before the
                                                            mass production start.
                                                        </p>
                                                        <p>
                                                            Apparel or home furnishing or upholstery whatever may be
                                                            the final merchandise the quality of final product depends
                                                            on the quality of the fabric that goes into its making.
                                                            So, to avoid all the Non-conformance at the end product,
                                                            it is important to do Fabric inspection at the initial
                                                            stage. It allows you to identify quality risks before
                                                            manufacturing commences and is an integral part of your
                                                            risk assessment and quality assurance management.
                                                        </p>
                                                        <p>
                                                            For this inspection, components and materials are
                                                            inspected and validated to make sure they match your
                                                            requirements. A pre-production inspection verifies your
                                                            supplier is able to start the production on schedule and
                                                            all your products specifications and quality requirements
                                                            are understood.
                                                        </p>
                                                        <strong>
                                                            <a
                                                                className="btn btn-sm btn-info"
                                                                href="booking-InitialProductionCheck.html"
                                                            >
                                                                Book now
                                                            </a>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-1 pl-0">
                                                <a
                                                    className="btn btn-sm btn-info w-100"
                                                    style={{ marginTop: 36 }}
                                                    href="booking-InitialProductionCheck.html"
                                                >
                                                    Book now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="row mr-0">
                                            <div className="col-sm-12 col-md-12 col-lg-11">
                                                <div className="card-header border-0 pr-0">
                                                    <h5
                                                        className="mb-0 collapsed"
                                                        data-toggle="collapse"
                                                        data-target="#collapseThree3"
                                                        aria-expanded="false"
                                                        aria-controls="collapseThree3"
                                                    >
                                                        <i
                                                            className="fa"
                                                            aria-hidden="true"
                                                            style={{ paddingTop: 30 }}
                                                        />{" "}
                                                        During Production Inspection
                                                        <div className="circle-box blue-list mr-2">DPI</div>
                                                    </h5>
                                                    <strong>
                                                        <p
                                                            data-toggle="collapse"
                                                            data-target="#collapseThree3"
                                                            aria-expanded="false"
                                                            aria-controls="collapseThree3"
                                                        >
                                                            Initial Pre-Production checks (IPC), also known as,
                                                            Pre-Production Inspections (PPI). It is the next step
                                                            after the identification and the evaluation of your
                                                            vendor/factory.
                                                        </p>
                                                    </strong>
                                                </div>
                                                <div
                                                    id="collapseThree3"
                                                    className="collapse"
                                                    data-parent="#accordion-two"
                                                >
                                                    <div className="card-body" style={{ marginLeft: 70 }}>
                                                        <p>
                                                            Initial Pre-Production checks (IPC), also known as,
                                                            Pre-Production Inspections (PPI). It is the next step
                                                            after the identification and the evaluation of your
                                                            vendor/factory. Initial Pre-Production checks if the
                                                            vendor is understood well your product specifications and
                                                            ready for production. It should be performed before the
                                                            mass production start.
                                                        </p>
                                                        <p>
                                                            Apparel or home furnishing or upholstery whatever may be
                                                            the final merchandise the quality of final product depends
                                                            on the quality of the fabric that goes into its making.
                                                            So, to avoid all the Non-conformance at the end product,
                                                            it is important to do Fabric inspection at the initial
                                                            stage. It allows you to identify quality risks before
                                                            manufacturing commences and is an integral part of your
                                                            risk assessment and quality assurance management.
                                                        </p>
                                                        <p>
                                                            For this inspection, components and materials are
                                                            inspected and validated to make sure they match your
                                                            requirements. A pre-production inspection verifies your
                                                            supplier is able to start the production on schedule and
                                                            all your products specifications and quality requirements
                                                            are understood.
                                                        </p>
                                                        <strong>
                                                            <a
                                                                className="btn btn-sm btn-info"
                                                                href="booking-DuringProductionInspection.html"
                                                            >
                                                                Book now
                                                            </a>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-1 pl-0">
                                                <a
                                                    className="btn btn-sm btn-info w-100"
                                                    style={{ marginTop: 36 }}
                                                    href="booking-DuringProductionInspection.html"
                                                >
                                                    Book now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="row mr-0">
                                            <div className="col-sm-12 col-md-12 col-lg-11">
                                                <div className="card-header border-0 pr-0">
                                                    <h5
                                                        className="mb-0 collapsed"
                                                        data-toggle="collapse"
                                                        data-target="#collapseFour4"
                                                        aria-expanded="false"
                                                        aria-controls="collapseFour4"
                                                    >
                                                        <i
                                                            className="fa"
                                                            aria-hidden="true"
                                                            style={{ paddingTop: 30 }}
                                                        />
                                                        Pre-Shipment Inspection
                                                        <div className="circle-box blue-list mr-2">PSI</div>
                                                    </h5>
                                                    <strong>
                                                        <p
                                                            data-toggle="collapse"
                                                            data-target="#collapseFour4"
                                                            aria-expanded="false"
                                                            aria-controls="collapseFour4"
                                                        >
                                                            Pre-shipment inspections (PSI) also known as the Final
                                                            Random Inspection (FRI) occur when 100% production is
                                                            completed, and 80% of the goods have been packaged.
                                                        </p>
                                                    </strong>
                                                </div>
                                                <div
                                                    id="collapseFour4"
                                                    className="collapse"
                                                    data-parent="#accordion-two"
                                                >
                                                    <div className="card-body" style={{ marginLeft: 70 }}>
                                                        <p>
                                                            Pre-shipment inspections (PSI) also known as the Final
                                                            Random Inspection (FRI) occur when 100% production is
                                                            completed, and 80% of the goods have been packaged.
                                                        </p>
                                                        <p>
                                                            PSI makes sure your goods are packed, marked, palletized,
                                                            documented, and checked before being loaded and
                                                            transported. And most importantly, ensure you are being
                                                            sent what your factory promised to deliver.
                                                        </p>
                                                        <strong>
                                                            <a
                                                                className="btn btn-sm btn-info"
                                                                href="booking-Pre-Shipment.html"
                                                            >
                                                                Book now
                                                            </a>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-1 pl-0">
                                                <a
                                                    className="btn btn-sm btn-info w-100"
                                                    style={{ marginTop: 36 }}
                                                    href="booking-Pre-Shipment.html"
                                                >
                                                    Book now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="row mr-0">
                                            <div className="col-sm-12 col-md-12 col-lg-11">
                                                <div className="card-header border-0 pr-0">
                                                    <h5
                                                        className="mb-0 collapsed"
                                                        data-toggle="collapse"
                                                        data-target="#collapseFive5"
                                                        aria-expanded="false"
                                                        aria-controls="collapseFive5"
                                                    >
                                                        <i
                                                            className="fa"
                                                            aria-hidden="true"
                                                            style={{ paddingTop: 30 }}
                                                        />{" "}
                                                        Container Loading Monitoring
                                                        <div className="circle-box blue-list mr-2">CLM</div>
                                                    </h5>
                                                    <strong>
                                                        <p
                                                            data-toggle="collapse"
                                                            data-target="#collapseFive5"
                                                            aria-expanded="false"
                                                            aria-controls="collapseFive5"
                                                        >
                                                            Container Loading Monitoring （CLM）checks if the
                                                            containers condition for transport and the proper loading
                                                            of the goods. One to two containers are checked per
                                                            man-day.
                                                        </p>
                                                    </strong>
                                                </div>
                                                <div
                                                    id="collapseFive5"
                                                    className="collapse"
                                                    data-parent="#accordion-two"
                                                >
                                                    <div className="card-body" style={{ marginLeft: 70 }}>
                                                        <p>
                                                            Pre-shipment inspections (PSI) also known as the Final
                                                            Random Inspection (FRI) occur when 100% production is
                                                            completed, and 80% of the goods have been packaged.
                                                        </p>
                                                        <p>
                                                            PSI makes sure your goods are packed, marked, palletized,
                                                            documented, and checked before being loaded and
                                                            transported. And most importantly, ensure you are being
                                                            sent what your factory promised to deliver.
                                                        </p>
                                                        <strong>
                                                            <a
                                                                className="btn btn-sm btn-info"
                                                                href="booking-ContainerMonitor.html"
                                                            >
                                                                Book now
                                                            </a>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-1 pl-0">
                                                <a
                                                    className="btn btn-sm btn-info w-100"
                                                    style={{ marginTop: 36 }}
                                                    href="booking-ContainerMonitor.html"
                                                >
                                                    Book now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="row mr-0">
                                            <div className="col-sm-12 col-md-12 col-lg-11">
                                                <div className="card-header border-0 pr-0">
                                                    <h5
                                                        className="mb-0 collapsed"
                                                        data-toggle="collapse"
                                                        data-target="#collapseSix6"
                                                        aria-expanded="false"
                                                        aria-controls="collapseSix6"
                                                    >
                                                        <i
                                                            className="fa"
                                                            aria-hidden="true"
                                                            style={{ paddingTop: 30 }}
                                                        />{" "}
                                                        Production Monitoring
                                                        <div className="circle-box blue-list mr-2">PM</div>
                                                    </h5>
                                                    <strong>
                                                        <p
                                                            data-toggle="collapse"
                                                            data-target="#collapseSix6"
                                                            aria-expanded="false"
                                                            aria-controls="collapseSix6"
                                                        >
                                                            The benefits of production monitoring are that it gives
                                                            you a wide look at all the manufacturing processes at work
                                                            in the factory. It's typically a combination of all three
                                                            types of product inspection
                                                        </p>
                                                    </strong>
                                                </div>
                                                <div
                                                    id="collapseSix6"
                                                    className="collapse"
                                                    data-parent="#accordion-two"
                                                >
                                                    <div className="card-body" style={{ marginLeft: 70 }}>
                                                        <p>
                                                            Pre-shipment inspections (PSI) also known as the Final
                                                            Random Inspection (FRI) occur when 100% production is
                                                            completed, and 80% of the goods have been packaged.
                                                        </p>
                                                        <p>
                                                            PSI makes sure your goods are packed, marked, palletized,
                                                            documented, and checked before being loaded and
                                                            transported. And most importantly, ensure you are being
                                                            sent what your factory promised to deliver.
                                                        </p>
                                                        <strong>
                                                            <a
                                                                className="btn btn-sm btn-info"
                                                                href="booking-ProductionMonitor.html"
                                                            >
                                                                Book now
                                                            </a>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-1 pl-0">
                                                <a
                                                    className="btn btn-sm btn-info w-100"
                                                    style={{ marginTop: 36 }}
                                                    href="booking-ProductionMonitor.html"
                                                >
                                                    Book now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="row mr-0">
                                            <div className="col-sm-12 col-md-12 col-lg-11">
                                                <div className="card-header border-0 pr-0">
                                                    <h5
                                                        className="mb-0 collapsed"
                                                        data-toggle="collapse"
                                                        data-target="#collapseSeven7"
                                                        aria-expanded="false"
                                                        aria-controls="collapseSeven7"
                                                    >
                                                        <i
                                                            className="fa"
                                                            aria-hidden="true"
                                                            style={{ paddingTop: 30 }}
                                                        />{" "}
                                                        Sample Collection
                                                        <div className="circle-box blue-list mr-2">SC</div>
                                                    </h5>
                                                    <strong>
                                                        <p
                                                            data-toggle="collapse"
                                                            data-target="#collapseSeven7"
                                                            aria-expanded="false"
                                                            aria-controls="collapseSeven7"
                                                        >
                                                            The Sample Collection (SC) Process is to perfect the idea
                                                            that you have, by getting samples from the factory or
                                                            people that will produce your final products.
                                                        </p>
                                                    </strong>
                                                </div>
                                                <div
                                                    id="collapseSeven7"
                                                    className="collapse"
                                                    data-parent="#accordion-two"
                                                >
                                                    <div className="card-body" style={{ marginLeft: 70 }}>
                                                        <p>
                                                            Pre-shipment inspections (PSI) also known as the Final
                                                            Random Inspection (FRI) occur when 100% production is
                                                            completed, and 80% of the goods have been packaged.
                                                        </p>
                                                        <p>
                                                            PSI makes sure your goods are packed, marked, palletized,
                                                            documented, and checked before being loaded and
                                                            transported. And most importantly, ensure you are being
                                                            sent what your factory promised to deliver.
                                                        </p>
                                                        <strong>
                                                            <a
                                                                className="btn btn-sm btn-info"
                                                                href="booking-SampleCollection.html"
                                                            >
                                                                Book now
                                                            </a>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-1 pl-0">
                                                <a
                                                    className="btn btn-sm btn-info w-100"
                                                    style={{ marginTop: 36 }}
                                                    href="booking-SampleCollection.html"
                                                >
                                                    Book now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="row mr-0">
                                            <div className="col-sm-12 col-md-12 col-lg-11">
                                                <div className="card-header border-0 pr-0">
                                                    <h5
                                                        className="mb-0 collapsed"
                                                        data-toggle="collapse"
                                                        data-target="#collapseEight8"
                                                        aria-expanded="false"
                                                        aria-controls="collapseEight8"
                                                    >
                                                        <i
                                                            className="fa"
                                                            aria-hidden="true"
                                                            style={{ paddingTop: 30 }}
                                                        />{" "}
                                                        Fabric &amp; Raw Material Inspection
                                                        <div className="circle-box blue-list mr-2">RMI</div>
                                                    </h5>
                                                    <strong>
                                                        <p
                                                            data-toggle="collapse"
                                                            data-target="#collapseEight8"
                                                            aria-expanded="false"
                                                            aria-controls="collapseEight8"
                                                        >
                                                            Apparel or home furnishing or upholstery whatever may be
                                                            the final merchandise the quality of final product depends
                                                            on the quality of the fabric that goes into its making.
                                                        </p>
                                                    </strong>
                                                </div>
                                                <div
                                                    id="collapseEight8"
                                                    className="collapse"
                                                    data-parent="#accordion-two"
                                                >
                                                    <div className="card-body" style={{ marginLeft: 70 }}>
                                                        <p>
                                                            Pre-shipment inspections (PSI) also known as the Final
                                                            Random Inspection (FRI) occur when 100% production is
                                                            completed, and 80% of the goods have been packaged.
                                                        </p>
                                                        <p>
                                                            PSI makes sure your goods are packed, marked, palletized,
                                                            documented, and checked before being loaded and
                                                            transported. And most importantly, ensure you are being
                                                            sent what your factory promised to deliver.
                                                        </p>
                                                        <strong>
                                                            <a
                                                                className="btn btn-sm btn-info"
                                                                href="booking-FabricRaw.html"
                                                            >
                                                                Book now
                                                            </a>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-1 pl-0">
                                                <a
                                                    className="btn btn-sm btn-info w-100"
                                                    style={{ marginTop: 36 }}
                                                    href="booking-FabricRaw.html"
                                                >
                                                    Book now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="row mr-0">
                                            <div className="col-sm-12 col-md-12 col-lg-11">
                                                <div className="card-header border-0 pr-0">
                                                    <h5
                                                        className="mb-0 collapsed"
                                                        data-toggle="collapse"
                                                        data-target="#collapseNine9"
                                                        aria-expanded="false"
                                                        aria-controls="collapseNine9"
                                                    >
                                                        <i
                                                            className="fa"
                                                            aria-hidden="true"
                                                            style={{ paddingTop: 30 }}
                                                        />{" "}
                                                        Incoming Material Control
                                                        <div className="circle-box blue-list mr-2">IMC</div>
                                                    </h5>
                                                    <strong>
                                                        <p
                                                            data-toggle="collapse"
                                                            data-target="#collapseNine9"
                                                            aria-expanded="false"
                                                            aria-controls="collapseNine9"
                                                        >
                                                            Incoming Material Control (IMC) looks for quality input
                                                            (materials) from suppliers to have the desired output or
                                                            use. Components and accessories are inspected upon arrival
                                                            at the finished product manufacturer.
                                                        </p>
                                                    </strong>
                                                </div>
                                                <div
                                                    id="collapseNine9"
                                                    className="collapse"
                                                    data-parent="#accordion-two"
                                                >
                                                    <div className="card-body" style={{ marginLeft: 70 }}>
                                                        <p>
                                                            Pre-shipment inspections (PSI) also known as the Final
                                                            Random Inspection (FRI) occur when 100% production is
                                                            completed, and 80% of the goods have been packaged.
                                                        </p>
                                                        <p>
                                                            PSI makes sure your goods are packed, marked, palletized,
                                                            documented, and checked before being loaded and
                                                            transported. And most importantly, ensure you are being
                                                            sent what your factory promised to deliver.
                                                        </p>
                                                        <strong>
                                                            <a
                                                                className="btn btn-sm btn-info"
                                                                href="booking-Incoming.html"
                                                            >
                                                                Book now
                                                            </a>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-1 pl-0">
                                                <a
                                                    className="btn btn-sm btn-info w-100"
                                                    style={{ marginTop: 36 }}
                                                    href="booking-Incoming.html"
                                                >
                                                    Book now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="row mr-0">
                                            <div className="col-sm-12 col-md-12 col-lg-11">
                                                <div className="card-header border-0 pr-0">
                                                    <h5
                                                        className="mb-0 collapsed"
                                                        data-toggle="collapse"
                                                        data-target="#collapseTen10"
                                                        aria-expanded="false"
                                                        aria-controls="collapseTen10"
                                                    >
                                                        <i
                                                            className="fa"
                                                            aria-hidden="true"
                                                            style={{ paddingTop: 30 }}
                                                        />{" "}
                                                        Inline Textile Inspection
                                                        <div className="circle-box blue-list mr-2">ITI</div>
                                                    </h5>
                                                    <strong>
                                                        <p
                                                            data-toggle="collapse"
                                                            data-target="#collapseTen10"
                                                            aria-expanded="false"
                                                            aria-controls="collapseTen10"
                                                        >
                                                            Inline Inspection means checking the quality of the
                                                            product in the process instead of checking at the end of
                                                            the process when product is completely made.
                                                        </p>
                                                    </strong>
                                                </div>
                                                <div
                                                    id="collapseTen10"
                                                    className="collapse"
                                                    data-parent="#accordion-two"
                                                >
                                                    <div className="card-body" style={{ marginLeft: 70 }}>
                                                        <p>
                                                            Pre-shipment inspections (PSI) also known as the Final
                                                            Random Inspection (FRI) occur when 100% production is
                                                            completed, and 80% of the goods have been packaged.
                                                        </p>
                                                        <p>
                                                            PSI makes sure your goods are packed, marked, palletized,
                                                            documented, and checked before being loaded and
                                                            transported. And most importantly, ensure you are being
                                                            sent what your factory promised to deliver.
                                                        </p>
                                                        <strong>
                                                            <a
                                                                className="btn btn-sm btn-info"
                                                                href="booking-Inline.html"
                                                            >
                                                                Book now
                                                            </a>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-1 pl-0">
                                                <a
                                                    className="btn btn-sm btn-info w-100"
                                                    style={{ marginTop: 36 }}
                                                    href="booking-Inline.html"
                                                >
                                                    Book now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="row mr-0">
                                            <div className="col-sm-12 col-md-12 col-lg-11">
                                                <div className="card-header border-0 pr-0">
                                                    <h5
                                                        className="mb-0 collapsed"
                                                        data-toggle="collapse"
                                                        data-target="#collapseEleven11"
                                                        aria-expanded="false"
                                                        aria-controls="collapseEleven11"
                                                    >
                                                        <i
                                                            className="fa"
                                                            aria-hidden="true"
                                                            style={{ paddingTop: 30 }}
                                                        />{" "}
                                                        Final Textile Inspection
                                                        <div className="circle-box blue-list mr-2">FTI</div>
                                                    </h5>
                                                    <strong>
                                                        <p
                                                            data-toggle="collapse"
                                                            data-target="#collapseEleven11"
                                                            aria-expanded="false"
                                                            aria-controls="collapseEleven11"
                                                        >
                                                            Final Textile Inspection is the final stage of the
                                                            inspection process and is carried out before the delivery
                                                            of an order. Fabric inspection is usually done on fabric
                                                            inspection machine.
                                                        </p>
                                                    </strong>
                                                </div>
                                                <div
                                                    id="collapseEleven11"
                                                    className="collapse"
                                                    data-parent="#accordion-two"
                                                >
                                                    <div className="card-body" style={{ marginLeft: 70 }}>
                                                        <p>
                                                            Pre-shipment inspections (PSI) also known as the Final
                                                            Random Inspection (FRI) occur when 100% production is
                                                            completed, and 80% of the goods have been packaged.
                                                        </p>
                                                        <p>
                                                            PSI makes sure your goods are packed, marked, palletized,
                                                            documented, and checked before being loaded and
                                                            transported. And most importantly, ensure you are being
                                                            sent what your factory promised to deliver.
                                                        </p>
                                                        <strong>
                                                            <a
                                                                className="btn btn-sm btn-info"
                                                                href="booking-FinalTextile.html"
                                                            >
                                                                Book now
                                                            </a>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-1 pl-0">
                                                <a
                                                    className="btn btn-sm btn-info w-100"
                                                    style={{ marginTop: 36 }}
                                                    href="booking-FinalTextile.html"
                                                >
                                                    Book now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="row mr-0">
                                            <div className="col-sm-12 col-md-12 col-lg-11">
                                                <div className="card-header border-0 pr-0">
                                                    <h5
                                                        className="mb-0 collapsed"
                                                        data-toggle="collapse"
                                                        data-target="#collapseTwelve12"
                                                        aria-expanded="false"
                                                        aria-controls="collapseTwelve12"
                                                    >
                                                        <i
                                                            className="fa"
                                                            aria-hidden="true"
                                                            style={{ paddingTop: 30 }}
                                                        />{" "}
                                                        100% Textile Inspection
                                                        <div className="circle-box blue-list mr-2">TI</div>
                                                    </h5>
                                                    <strong>
                                                        <p
                                                            data-toggle="collapse"
                                                            data-target="#collapseTwelve12"
                                                            aria-expanded="false"
                                                            aria-controls="collapseTwelve12"
                                                        >
                                                            Fabric Inspection is an important aspect followed prior to
                                                            garment manufacturing to avoid rejects due to fabric
                                                            quality and facing with unexpected loss in manufacturing.
                                                        </p>
                                                    </strong>
                                                </div>
                                                <div
                                                    id="collapseTwelve12"
                                                    className="collapse"
                                                    data-parent="#accordion-two"
                                                >
                                                    <div className="card-body" style={{ marginLeft: 70 }}>
                                                        <p>
                                                            Pre-shipment inspections (PSI) also known as the Final
                                                            Random Inspection (FRI) occur when 100% production is
                                                            completed, and 80% of the goods have been packaged.
                                                        </p>
                                                        <p>
                                                            PSI makes sure your goods are packed, marked, palletized,
                                                            documented, and checked before being loaded and
                                                            transported. And most importantly, ensure you are being
                                                            sent what your factory promised to deliver.
                                                        </p>
                                                        <strong>
                                                            <a
                                                                className="btn btn-sm btn-info"
                                                                href="booking-100.html"
                                                            >
                                                                Book now
                                                            </a>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-1 pl-0">
                                                <a
                                                    className="btn btn-sm btn-info w-100"
                                                    style={{ marginTop: 36 }}
                                                    href="booking-100.html"
                                                >
                                                    Book now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div
                                    className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-3"
                                    style={{ marginLeft: 36 }}
                                >
                                    <div className="circle-box orange-category mr-2 cb-icon">
                                        <i className="far fa-industry-alt" />
                                    </div>
                                    <h5 style={{ marginTop: 15 }}>Supplier Audit</h5>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div id="accordion-three" className="accordion">
                                    <div className="card">
                                        <div className="row mr-0">
                                            <div className="col-sm-12 col-md-12 col-lg-11">
                                                <div className="card-header border-0 pr-0">
                                                    <h5
                                                        className="mb-0"
                                                        data-toggle="collapse"
                                                        data-target="#collapse13"
                                                        aria-expanded="true"
                                                        aria-controls="collapse13"
                                                    >
                                                        <i
                                                            className="fa"
                                                            aria-hidden="true"
                                                            style={{ paddingTop: 30 }}
                                                        />{" "}
                                                        Textile Factory Assessment
                                                        <div className="circle-box orange-list mr-2">TFA</div>
                                                    </h5>
                                                    <strong>
                                                        <p
                                                            data-toggle="collapse"
                                                            data-target="#collapse13"
                                                            aria-expanded="true"
                                                            aria-controls="collapse13"
                                                        >
                                                            Amazon FBA inspection(FBAI）is the inspection that is
                                                            carried out at the end of the production in the supply
                                                            chain when the products are packed and ready for shipment.
                                                        </p>
                                                    </strong>
                                                </div>
                                                <div
                                                    id="collapse13"
                                                    className="collapse"
                                                    data-parent="#accordion-three"
                                                >
                                                    <div className="card-body" style={{ marginLeft: 70 }}>
                                                        <p>
                                                            Amazon FBA inspection(FBAI）is the inspection that is
                                                            carried out at the end of the production in the supply
                                                            chain when the products are packed and ready for shipment.
                                                            FBAI will ensure that your product makes it to the Amazon
                                                            warehouse and is not rejected because of any Amazon FBA
                                                            violations.
                                                        </p>
                                                        <p>
                                                            The Amazon FBA inspections can help you greatly improve
                                                            the quality of your deliverables. With proper labeling and
                                                            packaging inspections, you will ensure that the products
                                                            will end up in the right warehouse, avoiding any penalties
                                                            and poor customer reviews. The FBA inspection will help
                                                            you avoid any last-minute surprises that can cost you
                                                            greatly in terms of time, money and customer satisfaction.
                                                            Amazon FBA inspection(FBAI）covered:
                                                        </p>
                                                        <ul>
                                                            <li>Quality Conformity</li>
                                                            <li>Quantity Conformity</li>
                                                            <li>Amazon Label Requirements</li>
                                                            <li>Amazon Packaging Requirements</li>
                                                            <li>Measurements</li>
                                                            <li>Carton Weight &amp; Dimensions</li>
                                                        </ul>
                                                        <strong>
                                                            <a
                                                                className="btn btn-info btn-sm"
                                                                href="booking-FactoryAudit.html"
                                                            >
                                                                Book now
                                                            </a>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-1 pl-0 ">
                                                <a
                                                    className="btn btn-sm btn-info w-100"
                                                    style={{ marginTop: 36, marginRight: 10 }}
                                                    href="booking-FactoryAudit.html"
                                                >
                                                    Book now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="row mr-0">
                                            <div className="col-sm-12 col-md-12 col-lg-11">
                                                <div className="card-header border-0 pr-0">
                                                    <h5
                                                        className="mb-0"
                                                        data-toggle="collapse"
                                                        data-target="#collapse14"
                                                        aria-expanded="true"
                                                        aria-controls="collapse14"
                                                    >
                                                        <i
                                                            className="fa"
                                                            aria-hidden="true"
                                                            style={{ paddingTop: 30 }}
                                                        />{" "}
                                                        Textile QMS Evaluation
                                                        <div className="circle-box orange-list mr-2">QMSE</div>
                                                    </h5>
                                                    <strong>
                                                        <p
                                                            data-toggle="collapse"
                                                            data-target="#collapse14"
                                                            aria-expanded="true"
                                                            aria-controls="collapse14"
                                                        >
                                                            Textile QMS Evaluation (QMSE) checks the supplier quality
                                                            management process based on ISO 9001 and provides other
                                                            checkpoints for a comprehensive information of your
                                                            supplier.
                                                        </p>
                                                    </strong>
                                                </div>
                                                <div
                                                    id="collapse14"
                                                    className="collapse"
                                                    data-parent="#accordion-three"
                                                >
                                                    <div className="card-body" style={{ marginLeft: 70 }}>
                                                        <p>
                                                            Amazon FBA inspection(FBAI）is the inspection that is
                                                            carried out at the end of the production in the supply
                                                            chain when the products are packed and ready for shipment.
                                                            FBAI will ensure that your product makes it to the Amazon
                                                            warehouse and is not rejected because of any Amazon FBA
                                                            violations.
                                                        </p>
                                                        <p>
                                                            The Amazon FBA inspections can help you greatly improve
                                                            the quality of your deliverables. With proper labeling and
                                                            packaging inspections, you will ensure that the products
                                                            will end up in the right warehouse, avoiding any penalties
                                                            and poor customer reviews. The FBA inspection will help
                                                            you avoid any last-minute surprises that can cost you
                                                            greatly in terms of time, money and customer satisfaction.
                                                            Amazon FBA inspection(FBAI）covered:
                                                        </p>
                                                        <ul>
                                                            <li>Quality Conformity</li>
                                                            <li>Quantity Conformity</li>
                                                            <li>Amazon Label Requirements</li>
                                                            <li>Amazon Packaging Requirements</li>
                                                            <li>Measurements</li>
                                                            <li>Carton Weight &amp; Dimensions</li>
                                                        </ul>
                                                        <strong>
                                                            <a
                                                                className="btn btn-info btn-sm"
                                                                href="booking-QMSEvaluation.html"
                                                            >
                                                                Book now
                                                            </a>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-1 pl-0 ">
                                                <a
                                                    className="btn btn-sm btn-info w-100"
                                                    style={{ marginTop: 36, marginRight: 10 }}
                                                    href="booking-QMSEvaluation.html"
                                                >
                                                    Book now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="row mr-0">
                                            <div className="col-sm-12 col-md-12 col-lg-11">
                                                <div className="card-header border-0 pr-0">
                                                    <h5
                                                        className="mb-0"
                                                        data-toggle="collapse"
                                                        data-target="#collapse15"
                                                        aria-expanded="true"
                                                        aria-controls="collapse14"
                                                    >
                                                        <i
                                                            className="fa"
                                                            aria-hidden="true"
                                                            style={{ paddingTop: 30 }}
                                                        />{" "}
                                                        Textile Technical Audit
                                                        <div className="circle-box orange-list mr-2">TTA</div>
                                                    </h5>
                                                    <strong>
                                                        <p
                                                            data-toggle="collapse"
                                                            data-target="#collapse15"
                                                            aria-expanded="true"
                                                            aria-controls="collapse15"
                                                        >
                                                            Textile Technical Audit (TTA) is a very crucial task for
                                                            garment manufacturing. Textile Technical Audit evaluates
                                                            the effectiveness of the production organization, the
                                                            production capacity and know-how of a specific factory.
                                                        </p>
                                                    </strong>
                                                </div>
                                                <div
                                                    id="collapse15"
                                                    className="collapse"
                                                    data-parent="#accordion-three"
                                                >
                                                    <div className="card-body" style={{ marginLeft: 70 }}>
                                                        <p>
                                                            Amazon FBA inspection(FBAI）is the inspection that is
                                                            carried out at the end of the production in the supply
                                                            chain when the products are packed and ready for shipment.
                                                            FBAI will ensure that your product makes it to the Amazon
                                                            warehouse and is not rejected because of any Amazon FBA
                                                            violations.
                                                        </p>
                                                        <p>
                                                            The Amazon FBA inspections can help you greatly improve
                                                            the quality of your deliverables. With proper labeling and
                                                            packaging inspections, you will ensure that the products
                                                            will end up in the right warehouse, avoiding any penalties
                                                            and poor customer reviews. The FBA inspection will help
                                                            you avoid any last-minute surprises that can cost you
                                                            greatly in terms of time, money and customer satisfaction.
                                                            Amazon FBA inspection(FBAI）covered:
                                                        </p>
                                                        <ul>
                                                            <li>Quality Conformity</li>
                                                            <li>Quantity Conformity</li>
                                                            <li>Amazon Label Requirements</li>
                                                            <li>Amazon Packaging Requirements</li>
                                                            <li>Measurements</li>
                                                            <li>Carton Weight &amp; Dimensions</li>
                                                        </ul>
                                                        <strong>
                                                            <a
                                                                className="btn btn-info btn-sm"
                                                                href="booking-TechnicalAudit.html"
                                                            >
                                                                Book now
                                                            </a>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-1 pl-0 ">
                                                <a
                                                    className="btn btn-sm btn-info w-100"
                                                    style={{ marginTop: 36, marginRight: 10 }}
                                                    href="booking-TechnicalAudit.html"
                                                >
                                                    Book now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="row mr-0">
                                            <div className="col-sm-12 col-md-12 col-lg-11">
                                                <div className="card-header border-0 pr-0">
                                                    <h5
                                                        className="mb-0"
                                                        data-toggle="collapse"
                                                        data-target="#collapse16"
                                                        aria-expanded="true"
                                                        aria-controls="collapse14"
                                                    >
                                                        <i
                                                            className="fa"
                                                            aria-hidden="true"
                                                            style={{ paddingTop: 30 }}
                                                        />
                                                        Product Traceability Audit
                                                        <div className="circle-box orange-list mr-2">PTA</div>
                                                    </h5>
                                                    <strong>
                                                        <p
                                                            data-toggle="collapse"
                                                            data-target="#collapse16"
                                                            aria-expanded="true"
                                                            aria-controls="collapse16"
                                                        >
                                                            Product Traceability Audit (PTA) goes beyond Tier 1 in
                                                            their supply chain and enable you to trace your products
                                                            back to source. It let you know where raw materials and
                                                            components originate and verify supply chain risk.
                                                        </p>
                                                    </strong>
                                                </div>
                                                <div
                                                    id="collapse16"
                                                    className="collapse"
                                                    data-parent="#accordion-three"
                                                >
                                                    <div className="card-body" style={{ marginLeft: 70 }}>
                                                        <p>
                                                            Amazon FBA inspection(FBAI）is the inspection that is
                                                            carried out at the end of the production in the supply
                                                            chain when the products are packed and ready for shipment.
                                                            FBAI will ensure that your product makes it to the Amazon
                                                            warehouse and is not rejected because of any Amazon FBA
                                                            violations.
                                                        </p>
                                                        <p>
                                                            The Amazon FBA inspections can help you greatly improve
                                                            the quality of your deliverables. With proper labeling and
                                                            packaging inspections, you will ensure that the products
                                                            will end up in the right warehouse, avoiding any penalties
                                                            and poor customer reviews. The FBA inspection will help
                                                            you avoid any last-minute surprises that can cost you
                                                            greatly in terms of time, money and customer satisfaction.
                                                            Amazon FBA inspection(FBAI）covered:
                                                        </p>
                                                        <ul>
                                                            <li>Quality Conformity</li>
                                                            <li>Quantity Conformity</li>
                                                            <li>Amazon Label Requirements</li>
                                                            <li>Amazon Packaging Requirements</li>
                                                            <li>Measurements</li>
                                                            <li>Carton Weight &amp; Dimensions</li>
                                                        </ul>
                                                        <strong>
                                                            <a
                                                                className="btn btn-info btn-sm"
                                                                href="booking-TraceabilityAudit.html"
                                                            >
                                                                Book now
                                                            </a>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-1 pl-0 ">
                                                <a
                                                    className="btn btn-sm btn-info w-100"
                                                    style={{ marginTop: 36, marginRight: 10 }}
                                                    href="booking-TraceabilityAudit.html"
                                                >
                                                    Book now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* #/ container */}
                        {/* #/ container */}
                    </div>
                    {/***********************************
      Content body end
  ************************************/}
                    {/***********************************
      Footer start
  ************************************/}
                    <div className="footer">
                        <div className="copyright">
                            <p>
                                Copyright © Designed &amp; Developed by <a href="#">Inspxt</a> 2021
                            </p>
                        </div>
                    </div>
                    {/***********************************
      Footer end
  ************************************/}
                </div>

            </LayoutAdmin>
        </>
    )
}