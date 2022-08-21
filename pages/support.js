import LayoutLanding from '../layout/LayoutLanding'

export default function Support() {
  return (
    <LayoutLanding>
      <>
        <div
          className="bg-dark mt-5 pt-5 pb-5"
          style={{
            backgroundImage: "url(Landing/images/support-01.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7 text-center mx-auto my-4 mt-5">
                {/* Title */}
                <div className="mb-4">
                  <h1 className="display-4 text-white mb-0">
                    How can we <span className="font-weight-bold">help?</span>
                  </h1>
                  <p className="text-white">
                    Find what you need on the Inspxt Support page. From Client tips to
                    Invoice tricks and everything in between.
                  </p>
                </div>
                {/* End Title */}
                {/* Input */}
                <form className="input-group input-group-lg input-group-borderless mb-4">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text bg-white border-0"
                      id="askQuestions"
                    >
                      <span className="fa fa-search" />
                    </span>
                  </div>
                  <input
                    type="search"
                    className="form-control border-0 shadow-none"
                    placeholder="Ask a question"
                    aria-label="Ask a question"
                    aria-describedby="askQuestions"
                  />
                </form>
                {/* End Input */}
                {/* Text/Links */}
                <p className="text-white">
                  Popular help topics:
                  <a className="text-info ml-1" href="#">
                    pricing,
                  </a>
                  <a className="text-info ml-1" href="#">
                    upgrade,
                  </a>
                  <a className="text-info ml-1" href="#">
                    hosting,
                  </a>
                  <a className="text-info ml-1" href="#">
                    membership
                  </a>
                </p>
                {/* End Text/Links */}
              </div>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <section className="py-5 bg-white">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-3">
                <div className="card mb-3">
                  <div className="card-body">
                    <h3>Still need help?</h3>
                    <a href="mailto:support@inspxt.com" style={{ cursor: "pointer" }}>
                      Ask a question
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5>
                      <a href="#">Most Popular</a>
                    </h5>
                    <h5>
                      <a href="#">Account Settings</a>
                    </h5>
                    <h5>
                      <a href="#">Clients</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-9">
                <h2 className="pb-5">Most Popular</h2>
                <div>
                  <a href="q1.html">
                    What should I know when migrating to the new Inspxt?
                  </a>
                  <p>
                    The new Inspxt has been rebuilt from the ground up, with over 250
                    new features to help you run y...
                  </p>
                </div>
                <div>
                  <a href="q1.html">How do I create an Invoice?</a>
                  <p>
                    Invoices allow you to bill a Client for your products and/or
                    services, and help you keep track of yo...
                  </p>
                </div>
                <div>
                  <a href="q1.html">How do I customize my account?</a>
                  <p>
                    Inspxt allows you to customize several things in your account to
                    bring it in line with your comp...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

    </LayoutLanding>
  )
}
