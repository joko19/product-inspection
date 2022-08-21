import LayoutLanding from '../layout/LayoutLanding'

export default function Buyers() {
  return (
    <LayoutLanding>
      <section className="section-padding bg-dark py-5 inner-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="mt-5 mb-3 text-white">Buyer List</h1>
              <div className="breadcrumbs">
                <p className="mb-0 text-white">
                  <a className="text-white" href="#">
                    Home
                  </a>{" "}
                  / <span className="text-primary">Buyer List</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Inner Header */}
      {/* Contact Us */}
      <section className="py-5 bg-white">
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-sm-6 col-md-2 col-lg-2">
              <div className="supplier-box">
                <div className="supplier-circle bg-supplier-darkblue">
                  <i className="far fa-box-open" />
                </div>
                <div className="supplier-title">Inspection</div>
              </div>
            </div>
            <div className="col-sm-6 col-md-2 col-lg-2">
              <div className="supplier-box">
                <div className="supplier-service-circle bg-supplier-lytblue">
                  PSI
                </div>
                <div className="supplier-service-title">
                  <a href="add-buyer.html">Product Shipment Inspection</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-2 col-lg-2">
              <div className="supplier-box">
                <div className="supplier-service-circle bg-supplier-lytblue">
                  CLS
                </div>
                <div className="supplier-service-title">
                  <a href="add-buyer.html">Container Loading Supervision</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-2 col-lg-2">
              <div className="supplier-box">
                <div className="supplier-service-circle bg-supplier-lytblue">
                  DPI
                </div>
                <div className="supplier-service-title">
                  <a href="add-buyer.html">During Production Inspection</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-2 col-lg-2">
              <div className="supplier-box">
                <div className="supplier-service-circle bg-supplier-lytblue">
                  PPI
                </div>
                <div className="supplier-service-title">
                  <a href="add-buyer.html">Pre Production Inspection</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-2 col-lg-2">
              <div className="supplier-box">
                <div className="supplier-circle bg-supplier-darkorange">
                  <i className="far fa-industry-alt" />
                </div>
                <div className="supplier-title">Inspection</div>
              </div>
            </div>
            <div className="col-sm-6 col-md-2 col-lg-2">
              <div className="supplier-box">
                <div className="supplier-service-circle bg-supplier-lytorange">
                  PSI
                </div>
                <div className="supplier-service-title">
                  <a href="add-buyer.html">Product Shipment Inspection</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-2 col-lg-2">
              <div className="supplier-box">
                <div className="supplier-service-circle bg-supplier-lytorange">
                  CLS
                </div>
                <div className="supplier-service-title">
                  <a href="add-buyer.html">Container Loading Supervision</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-2 col-lg-2">
              <div className="supplier-box">
                <div className="supplier-service-circle bg-supplier-lytorange">
                  DPI
                </div>
                <div className="supplier-service-title">
                  <a href="add-buyer.html">During Production Inspection</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-2 col-lg-2">
              <div className="supplier-box">
                <div className="supplier-service-circle bg-supplier-lytorange">
                  PPI
                </div>
                <div className="supplier-service-title">
                  <a href="add-buyer.html">Pre Production Inspection</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutLanding>
  )
}
