import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LayoutLanding from '../layout/LayoutLanding'
import LayoutAdmin from '../layout/LayoutAdmin'

export default function Home() {
  return (
    <LayoutLanding>
      <>
        <section
          className="section-padding bg-dark py-5 inner-header"
          style={{
            backgroundImage: "url(Landing/images/say-good-to.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="mt-5 mb-3 text-white">Contact Us</h1>
                <div className="breadcrumbs">
                  <p className="mb-0 text-white">
                    <a className="text-white" href="#">
                      Home
                    </a>{" "}
                    / <span className="text-primary">Contact Us</span>
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
            <div className="row mt-5">
              <h2>Contact Inspxt</h2>
              <h5>
                We process hundreds of quality control and audit service every month
                from around the globe. Our company takes tremendous pride in
                delivering the most reliable and impartial quality control services
                with a cutting-edge technology platform for our clients.
              </h5>
              <h5>
                We will continue to look for new ways to innovate and find new ways to
                support our clients along the supply chain by offering tailored and
                efficient QC services in China and Asia. We love to chat and help
                you today.
              </h5>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-8">
                <div className="mt-4">
                  <h3>Company Headquaters (USA)</h3>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.088828951308!2d-111.86181118459426!3d40.73807087932906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528aaafcefcb49%3A0xce11e4160f9770cd!2s1100%20E%20%26%201455%20S%2C%20Salt%20Lake%20City%2C%20UT%2084105%2C%20USA!5e0!3m2!1sen!2s!4v1619830158498!5m2!1sen!2s"
                      width="100%"
                      height={274}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-6">
                    <h5>Salt Lake City, Utah</h5>
                    <h6 className="text-dark">
                      <i className="fal fa-map-marker-alt" /> Address :
                    </h6>
                    <p> 1455 South 1100 East Salt Lake City, UT 84105</p>
                    <h6 className="text-dark">
                      <i className="far fa-phone" /> Phone :
                    </h6>
                    <p> +1 (801)467-7611</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3>Europe Offices</h3>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.2770469607826!2d8.904955115506509!3d47.562397779181666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a921099337a91%3A0x2de7e15c9179186a!2sZ%C3%BCrcherstrasse%20282%2C%208500%20Frauenfeld%2C%20Switzerland!5e0!3m2!1sen!2s!4v1619830259459!5m2!1sen!2s"
                      width="100%"
                      height={274}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-6">
                    <h5>Frauenfeld, Switzerland</h5>
                    <h6 className="text-dark">
                      <i className="fal fa-map-marker-alt" /> Address :
                    </h6>
                    <p> Zürcherstrasse 282 CH-8500 Frauenfeld Switzerland</p>
                    <h6 className="text-dark">
                      <i className="far fa-phone" /> Phone :
                    </h6>
                    <p> +1 (41) 52 765 1574 </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3>China Offices</h3>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.0462746485064!2d120.2839212149614!3d30.17867208183371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344c84dcb3a7d30f%3A0x43a137f5694ae9e3!2sJinlu%20Yinzuo%2C%20Xiaoshan%20Qu%2C%20Hangzhou%20Shi%2C%20Zhejiang%20Sheng%2C%20China!5e0!3m2!1sen!2s!4v1619830516612!5m2!1sen!2s"
                      width="100%"
                      height={274}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-6">
                    <h5>Hangzhou, China</h5>
                    <h6 className="text-dark">
                      <i className="fal fa-map-marker-alt" /> Address :
                    </h6>
                    <p>
                      {" "}
                      Tonghui Mid-Road 688 Jinlu Yinzuo Building 1 Floor 5 Xiaoshan,
                      Hangzhou Zhejiang 311200, China
                    </p>
                    <h6 className="text-dark">
                      <i className="far fa-phone" /> Phone :
                    </h6>
                    <p>+1 86 (571)8273-6561 </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="card mb-1 text-white bg-ice-blue">
                  <div className="card-body text-center">
                    <h5>Call Us </h5>
                    <h5>+1 (801)467-7611 (USA)</h5>
                    <h5>+86 (571)8273-6561 (PRC)</h5>
                  </div>
                </div>
                <div className="card mb-1 text-white bg-ice-blue">
                  <div className="card-body text-center">
                    <h5>Email Us </h5>
                    <h5>info@inspext.com</h5>
                  </div>
                </div>
                <div className="card mb-1">
                  <div className="card-body">
                    <h5>Have a Question about using Inspxt?</h5>
                    <p>
                      Find your answers quickly on <a href="#"> support page</a> or
                      reach out to our award-winning Support team.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 section-title text-left mb-4">
                  <h4>Ask a Question</h4>
                </div>
                <form
                  name="sentMessage"
                  className="col-lg-12 col-md-12"
                  id="contactForm"
                  noValidate=""
                  style={{ backgroundColor: "#F5F8FA" }}
                >
                  <div className="form-row">
                    <div className="control-group col form-group">
                      <div className="controls">
                        <label>
                          First Name <small className="text-danger">*</small>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          id="fname"
                          required=""
                          data-validation-required-message="Please enter your first name."
                        />
                      </div>
                    </div>
                    <div className="control-group col form-group">
                      <div className="controls">
                        <label>
                          Last Name <small className="text-danger">*</small>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          id="lname"
                          required=""
                          data-validation-required-message="Please enter your last name."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="control-group col form-group">
                      <div className="controls">
                        <label>
                          Company Name<small className="text-danger">*</small>
                        </label>
                        <input
                          type="tel"
                          placeholder=""
                          className="form-control"
                          id="phone"
                          required=""
                          data-validation-required-message="Please enter company name."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="control-group col form-group">
                      <div className="js-form-message">
                        <div className="form-group">
                          <label>
                            Industry<small className="text-danger">*</small>
                          </label>
                          <select
                            className="form-control custom-select"
                            required=""
                            data-msg="Please select Industry."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                          >
                            <option value="">Select Industry</option>
                            <option>Agriculture &amp; Products</option>
                            <option>Automobile &amp; Parts</option>
                            <option>Bags &amp; Luggage</option>
                            <option>Building Materials</option>
                            <option>Construction &amp; Power Tools</option>
                            <option>Consumer Electronics</option>
                            <option>Cookware and Houseware</option>
                            <option>Cosmetics</option>
                            <option>Fashion Accessories</option>
                            <option>Food &amp; Beverages</option>
                            <option>Footwear</option>
                            <option>Furniture</option>
                            <option>Garments</option>
                            <option>Home Appliances</option>
                            <option>Home Décor</option>
                            <option>Industrial Goods</option>
                            <option>Jewelry</option>
                            <option>Lighting</option>
                            <option>Machinery</option>
                            <option>Medical Devices</option>
                            <option>Metals &amp; Mining</option>
                            <option>Office Supplies</option>
                            <option>Oil &amp; Gas Equipment</option>
                            <option>Outdoor/ Sporting Goods</option>
                            <option>Packaging</option>
                            <option>Personal Care</option>
                            <option>Pharmaceuticals</option>
                            <option>Promotional Goods</option>
                            <option>Textile</option>
                            <option>Toys/ Juvenile Products</option>
                            <option>Watches/ Timepieces</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="control-group col form-group">
                      <div className="js-form-message">
                        <div className="form-group">
                          <label>
                            Contact Country<small className="text-danger">*</small>
                          </label>
                          <select
                            className="form-control custom-select"
                            required=""
                            data-msg="Please select Country."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                          >
                            <option value="">Select Country</option>
                            <option value="birthMonthSelect1">January</option>
                            <option value="birthMonthSelect2">February</option>
                            <option value="birthMonthSelect3">March</option>
                            <option value="birthMonthSelect4" selected="selected">
                              April
                            </option>
                            <option value="birthMonthSelect5">May</option>
                            <option value="birthMonthSelect6">June</option>
                            <option value="birthMonthSelect7">July</option>
                            <option value="birthMonthSelect8">August</option>
                            <option value="birthMonthSelect9">September</option>
                            <option value="birthMonthSelect10">October</option>
                            <option value="birthMonthSelect11">November</option>
                            <option value="birthMonthSelect12">December</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="control-group col form-group">
                      <div className="controls">
                        <label>
                          Phone Number<small className="text-danger">*</small>
                        </label>
                        <input
                          type="tel"
                          placeholder=""
                          className="form-control"
                          id="phone"
                          required=""
                          data-validation-required-message="Please enter phone number."
                        />
                      </div>
                    </div>
                  </div>
                  <p>Service of Intrest</p>
                  <div className="control-group form-group">
                    <div className="custom-control custom-checkbox d-inline mr-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label className="custom-control-label" htmlFor="customCheck1">
                        Product Inspection
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox d-inline mr-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label className="custom-control-label" htmlFor="customCheck1">
                        Supplier Audit
                      </label>
                    </div>
                  </div>
                  <div className="control-group form-group">
                    <div className="controls">
                      <label>
                        Message <small className="text-danger">*</small>
                      </label>
                      <textarea
                        placeholder="Hi there, I would like to ..."
                        rows={4}
                        cols={100}
                        className="form-control"
                        id="message"
                        required=""
                        data-validation-required-message="Please enter your message"
                        maxLength={999}
                        style={{ resize: "none" }}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div id="success" />
                  {/* For success/fail messages */}
                  <div className="text-right">
                    <button
                      type="submit"
                      className="btn btn-blue"
                      id="sendMessageButton"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="row"></div>
            <div className="row">
              <div className="col-sm-12 col-md-4 mt-5">
                <h4>Vietnam Office</h4>
                <h6 className="text-dark">
                  <i className="fal fa-map-marker-alt" />
                  No. 8, B4 Street An Loi Dong Ward, District 2, Ho Chi Minh City,
                  Vietnam
                </h6>
                <h6 className="text-dark">
                  <i className="far fa-phone" />
                  +84 282-244-7611
                </h6>
              </div>
              <div className="col-sm-12 col-md-4 mt-5">
                <h4>Taipei Office</h4>
                <h6 className="text-dark">
                  <i className="fal fa-map-marker-alt" />
                  4F. No. 163 Wun Hua Rd. Sec. 2, New Taipei City 22047 Taiwan
                </h6>
                <h6 className="text-dark">
                  <i className="far fa-phone" />
                  +886 2 2259 1178
                </h6>
              </div>
              <div className="col-sm-12 col-md-4 mt-5">
                <h4>Turkey Office</h4>
                <h6 className="text-dark">
                  <i className="fal fa-map-marker-alt" />
                  Orucreis Mah., Tekstilkent Cad., No: 12, Koza Plaza A blok, D:
                  222/82, Esenler Istanbul, Turkey
                </h6>
                <h6 className="text-dark">
                  <i className="far fa-phone" />
                  +90 212 438 00 33
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-4 mt-5">
                <h4>India Office</h4>
                <h6 className="text-dark">
                  <i className="fal fa-map-marker-alt" />
                  Hybrid Towers, 2nd Floor, No. 5ac-101, 2nd Main Road, 3rd block,
                  HRBR Layout, Kalyan Nagar Post Bangalore – 560 043
                </h6>
                <h6 className="text-dark">
                  <i className="far fa-phone" />
                  +91 990 002 9553
                </h6>
              </div>
              <div className="col-sm-12 col-md-4 mt-5">
                <h4>Pakistan Office</h4>
                <h6 className="text-dark">
                  <i className="fal fa-map-marker-alt" />
                  Plot 7E block 6 PECHS, Karachi Postal Code 75400, Pakistan
                </h6>
                <h6 className="text-dark">
                  <i className="far fa-phone" />
                  +92 213 744 8491
                </h6>
              </div>
              <div className="col-sm-12 col-md-4 mt-5">
                <h4>Bangladesh Office</h4>
                <h6 className="text-dark">
                  <i className="fal fa-map-marker-alt" />
                  Hybrid Towers, 2nd Floor, No. 5ac-101, 2nd Main Road, 3rd block,
                  HRBR Layout, Kalyan Nagar Post Bangalore – 560 043
                </h6>
                <h6 className="text-dark">
                  <i className="far fa-phone" />
                  +92 213 744 8491
                </h6>
              </div>
            </div>
          </div>
        </section>
      </>

    </LayoutLanding>
  )
}
