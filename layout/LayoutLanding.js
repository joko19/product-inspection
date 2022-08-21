import React from "react";
import { Helmet } from "react-helmet";
import Head from 'next/head'
import Navbar from "../components/Landing/Navbar";
import Footer from "../components/Landing/Footer";

function LayoutLanding(props) {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Gurdeep singh osahan" />
                <meta name="author" content="Gurdeep singh osahan" />
                <title>Inspxt - Product Inspection, Supplier Audit and, Amazon FBA Inspection services in Asia.</title>
                <link rel="icon" type="image/png" href="images/fav.png" />
                <link href="Landing/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="Landing/vendor/fontawesome/css/font-awesome.min.css" rel="stylesheet" />
                <link href="Landing/vendor/icons/css/materialdesignicons.min.css" media="all" rel="stylesheet" type="text/css" />
                <link href="Landing/vendor/slick-master/slick/slick.css" rel="stylesheet" type="text/css" />
                <link href="Landing/vendor/lightgallery-master/dist/css/lightgallery.min.css" rel="stylesheet" />
                <link href="Landing/vendor/select2/css/select2-bootstrap.css" />
                <link href="Landing/vendor/select2/css/select2.min.css" rel="stylesheet" />
                <link href="Landing/css/style.css" rel="stylesheet" />
                <link href="Landing/fa/all.css" rel="stylesheet" />


                <script src="Landing/vendor/jquery/jquery.min.js"></script>
                <script src="Landing/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="Landing/js/jqBootstrapValidation.js"></script>
                <script src="Landing/js/contact_me.js"></script>
                <script src="Landing/vendor/slick-master/slick/slick.js" type="text/javascript" charset="utf-8"></script>
                <script src="Landing/vendor/lightgallery-master/dist/js/lightgallery-all.min.js"></script>
                <script src="Landing/vendor/select2/js/select2.min.js"></script>
                <script src="Landing/js/custom.js"></script>
            </Head>
            <div>
                <Navbar/>
                {props.children}
                <Footer/>
            </div>
        </>
    )
}

export default LayoutLanding