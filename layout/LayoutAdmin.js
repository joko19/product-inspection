import React from "react";
import { Helmet } from "react-helmet";
import Head from 'next/head'

function LayoutAdmin(props) {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <title>Inspxt - Product Inspection, Supplier Audit and, Amazon FBA Inspection services in Asia.</title>
                <link rel="icon" type="image/png" sizes="16x16" href="../Admin/images/fav.png" />
                <link href="Admin/plugins/pg-calendar/css/pignose.calendar.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="../Admin/plugins/chartist/css/chartist.min.css" />
                <link rel="stylesheet" href="../Admin/plugins/chartist-plugin-tooltips/css/chartist-plugin-tooltip.css" />
                <link rel="stylesheet" href="../Admin/css/custome.css" />
                <link href="../Admin/css/style.css" rel="stylesheet" />
                <link href="../Landing/css/style.css" rel="stylesheet" />
                <link href="../Admin/css/flags.css" rel="stylesheet" />
                <link href="../Admin/fa/all.css" rel="stylesheet" />


                <script src="../Admin/plugins/common/common.min.js"></script>
                <script src="../Admin/js/custom.min.js"></script>
                <script src="../Admin/js/settings.js"></script>
                <script src="../Admin/js/gleek.js"></script>
                <script src="../Admin/js/styleSwitcher.js"></script>

                <script src="../Admin/plugins/chart.js/Chart.bundle.min.js"></script>
                <script src="../Admin/plugins/circle-progress/circle-progress.min.js"></script>
                <script src="../Admin/plugins/d3v3/index.js"></script>
                <script src="../Admin/plugins/topojson/topojson.min.js"></script>
                <script src="../Admin/plugins/datamaps/datamaps.world.min.js"></script>
                <script src="../Admin/plugins/raphael/raphael.min.js"></script>
                <script src="../Admin/plugins/morris/morris.min.js"></script>
                <script src="../Admin/plugins/moment/moment.min.js"></script>
                <script src="../Admin/plugins/pg-calendar/js/pignose.calendar.min.js"></script>
                <script src="../Admin/plugins/chartist/js/chartist.min.js"></script>
                <script src="../Admin/plugins/chartist-plugin-tooltips/js/chartist-plugin-tooltip.min.js"></script>
                <script src="../Admin/js/dashboard/dashboard-1.js"></script>
                <script src="../Admin/js/jquery.flagstrap.js"></script>
            </Head>
            <div>
                {props.children}
            </div>
        </>
    )
}

export default LayoutAdmin