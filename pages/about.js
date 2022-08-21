import LayoutLanding from '../layout/LayoutLanding'

export default function About() {
  return (
    <LayoutLanding>
      <>
        <section
          className="py-5 bg-dark inner-header"
          style={{
            backgroundImage: "url(Landing/images/about-head.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="mt-5 mb-3 text-white" style={{ visibility: "hidden" }}>
                  About Us
                </h1>
                <div className="breadcrumbs">
                  <p className="mb-0 text-white">
                    <a className="text-white" href="#">
                      Home
                    </a>{" "}
                    / <span className="text-primary">About Us</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Inner Header */}
        {/* About */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="pl-4 col-lg-5 col-md-5 pr-4">
                <img
                  className="rounded img-fluid"
                  src="/Landing/images/About-Us-images-01.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="col-lg-6 col-md-6 pl-5 pr-5">
                <h2 className="mb-5">
                  The leading product inspection and quality control company for
                  importers and retailers.
                </h2>
                <h5 className="mt-2">Our Vision</h5>
                <p>
                  Inspxt was incepted from(by?) IDFL Laboratory and Institute, an ISO
                  17025 and ISO 1706 accredited laboratory and certification body.
                  Inspext specializes in hardline and softline consumer product
                  inspections, factory evaluations and audits.
                </p>
                <p>
                  With operations in Salt Lake City, Switzerland, China, Taipei,
                  Vietnam, Turkey, India, Pakistan, Bangladesh, and Ukraine, Inspxt
                  ensures that consumer products are compliant with the standards and
                  quality required by North American and European importers and
                  retailers.
                </p>
                <h5 className="mt-4">Our Mission</h5>
                <p>
                  Quality is our habits. Inspxt is committed to guaranteeing the
                  quality of the product that we inspected. We also guarantee the
                  integrity, transparency, and sustainability of the related supply
                  chains.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End About */}
        {/* What We Provide */}
        <section className="py-5">
          <div className="section-title text-center mb-5">
            <h2>What We Provide?</h2>
            <p>Product inspections, factory evaluations and audits.</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 text-center">
                <div className="mt-4 mb-4">
                  <i
                    className="fad fa-microphone-alt text-primary"
                    style={{ fontSize: 48 }}
                  />
                </div>
                <h5 className="mt-3">10+ years of experience</h5>
                <p>A successful track record tells</p>
              </div>
              <div className="col-lg-4 col-md-4 text-center">
                <div className="mt-4 mb-4">
                  <i className="far fa-globe text-primary" style={{ fontSize: 48 }} />
                </div>
                <h5>Worldwide Sales Offices</h5>
                <p>America, Europe, Asia</p>
              </div>
              <div className="col-lg-4 col-md-4 text-center">
                <div className="mt-4 mb-4">
                  <i
                    className="far fa-smile-plus text-primary"
                    style={{ fontSize: 48 }}
                  />
                </div>
                <h5 className="mt-3">Dazzling the clients</h5>
                <p>Thundered of happy customers and still counting</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 text-center">
                <div className="mt-4">
                  <i
                    className="far fa-globe-asia text-primary"
                    style={{ fontSize: 48 }}
                  />
                </div>
                <h5 className="mb-3">Operating across Asia</h5>
                <p>in 14 countries and regions</p>
              </div>
              <div className="col-lg-4 col-md-4 text-center">
                <div className="mt-1">
                  <i
                    className="far fa-file-certificate text-primary"
                    style={{ fontSize: 48 }}
                  />
                </div>
                <h5 className="mt-3">Accreditations</h5>
                <div>ISO 17025: 2016</div>
                <div>ISO 17065: 2018</div>
              </div>
              <div className="col-lg-4 col-md-4 text-center">
                <div className="mt-4">
                  <i
                    className="far fa-certificate text-primary"
                    style={{ fontSize: 48 }}
                  />
                </div>
                <h5>Certificates and Training</h5>
                <div>ISO 19011</div>
                <div>SA8000</div>
                <div>Inditex Product Traceability</div>
              </div>
            </div>
          </div>
        </section>
        {/* End What We Provide */}
        {/* Trusted Agents */}
        <section className=" bg-white">
          <img src="/Landing/images/map.jpg" alt="" className="w-100" />
        </section>
      </>

    </LayoutLanding>
  )
}
