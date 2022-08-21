import Head from 'next/head'
import Link from 'next/link'

export default function Register() {
  return (
    <>
      <Head>
        <title>
          Inspxt - Product Inspection, Supplier Audit and, Amazon FBA Inspection
          services in Asia.
        </title>
        <link rel="icon" type="image/png" href="/Landing/images/fav.png" />
        <link href="Landing/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="Landing/vendor/fontawesome/css/font-awesome.min.css" rel="stylesheet" />
        <link
          href="Landing/vendor/icons/css/materialdesignicons.min.css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        {/* Slick */}
        <link
          href="Landing/vendor/slick-master/slick/slick.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="Landing/vendor/lightgallery-master/dist/css/lightgallery.min.css"
          rel="stylesheet"
        />
        <link href="Landing/vendor/select2/css/select2-bootstrap.css" />
        <link href="Landing/vendor/select2/css/select2.min.css" rel="stylesheet" />
        <link href="Landing/css/style.css" rel="stylesheet" />
      </Head>
      <div className="inspector-login-container">
        <div className="container-fluid">
          <div className="col-md-2 ml-auto mr-auto pt-5 pb-5">
            <Link href="/">
              <a>
                <img className="w-100" src="Landing/images/logo.png" alt="" />
              </a>
            </Link>
          </div>
          <div className="row justify-content-center d-flex">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 pr-0 d-none d-lg-block d-xl-block">
              <div className="login-mobile-bg">
                <img src="Landing/images/signup-mobile-screen.png" alt="" />
              </div>
            </div>
            <div className="card col-sm-12 col-md-6 col-lg-6 col-xl-4">
              <div className=" osahan-login register-box-pad">
                <div className="text-center mb-4">
                  <h5 className="font-weight-bold mt-3">
                    Streamline Product Inspection &amp; QA operation with Inspxt
                    Mobile App
                  </h5>
                </div>
                <form action="https://inspxt.immershift.com/index.html">
                  <div className="form-row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="position-relative icon-form-control">
                          {/* <i class="mdi mdi-account position-absolute"></i> */}
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="position-relative icon-form-control">
                          {/* <i class="mdi mdi-account position-absolute"></i> */}
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="position-relative icon-form-control">
                      {/* <i class="mdi mdi-email-outline position-absolute"></i> */}
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Business Email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="position-relative icon-form-control">
                      {/* <i class="mdi mdi-key-variant position-absolute"></i> */}
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 text-center ml-auto mr-auto">
                    <button
                      className="btn btn-lg btn-primary text-uppercase"
                      type="submit"
                    >
                      {" "}
                      Sign Up{" "}
                    </button>
                  </div>
                  <div className="pt-5 text-center">
                    <span className="text-center">
                      Already have an account?
                      <Link href="/login">
                        <a>Log in</a>
                      </Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="form-group text-center mt-3">
            <label className="mb-1">
              By signing up, you agree to the Inspxt{" "}
              <Link href="/terms">
                <a>Terms of Service</a>
              </Link>
              , and{" "}
              <Link href="/privacy">
                <a>Privacy Policy</a>
              </Link>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
