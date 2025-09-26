import React from "react";
import Image from "next/image";

// images
import shape_1 from "@/assets/img/home-01/team/team-details-shape-1.png";
import shape_2 from "@/assets/img/home-01/team/team-details-shape-2.png";
import { ITeamDT } from "@/types/team-d-t";
import t_details from "@/assets/img/home-01/team/team-details-1.png";
import { Email, Phone } from "../svg";

// prop type
type IProps = {
  item?: ITeamDT | null;
};

export default function TeamDetailsArea({ item }: IProps) {
  return (
    <div className="tm-details-wrapper p-relative">
      <div className="tm-details-shape-1">
        <Image src={shape_1} alt="shape" />
      </div>
      <div className="tm-details-shape-2">
        <Image src={shape_2} alt="shape" />
      </div>
      <div className="container">
        <div className="row align-items-center align-items-xxl-end">
          <div className="col-xl-6 col-lg-6 col-md-7">
            <div className="tm-details-content-wrap z-index-5">
              <div className="tm-details-title-box mb-20">
                <span className="tm-hero-subtitle">
                  Ready to Grow Your Business in
                </span>
                <h4 className="tm-details-title">Indianapolis?</h4>
              </div>
              <div className="tm-details-text">
                <p>
                  If you’re waiting for clients to stumble across your website,
                  you’re already behind. Let Biztalbox, your trusted SEO Agency
                  Indiana, craft a strategy that makes your Indianapolis
                  business unavoidable online—get your free consultation now.
                </p>
              </div>
              <div className="tm-details-portfolio mb-50">
                <span className="tm-details-social-title">Get in Touch:</span>
                <a href="tel:+919485699709">+91 9485699709</a>
                <a href="mailto:info@biztalbox.com">info@biztalbox.com</a>
              </div>
              {/* <div className="tm-details-social">
                <span className="tm-details-social-title">Follow:</span>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div> */}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-5" style={{zIndex: 100}}>
            <div className="tm-details-cta-form pl-40">
              <form>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label htmlFor="name" className="form-label text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "white",
                        color: "white",
                        padding: "0 10px"
                      }}
                      required
                      minLength={3}
                      placeholder="Enter Full Name"
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="name" className="form-label text-white">
                      Website
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="website"
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "white",
                        color: "white",
                        padding: "0 10px"
                      }}
                      placeholder="Enter Website Url"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label htmlFor="email" className="form-label text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "white",
                        color: "white",
                        padding: "0 10px"
                      }}
                      required
                      placeholder="Enter Email Id"
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="phone" className="form-label text-white">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "white",
                        color: "white",
                        padding: "0 10px"
                      }}
                      minLength={7}
                      maxLength={15}
                      placeholder="Enter Phone No."
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label htmlFor="budget" className="form-label text-white">
                      Monthly Budget
                    </label>
                    <select
                      className="form-control"
                      id="budget"
                      style={{
                        backgroundColor: "#121212",
                        borderColor: "white",
                        color: "white",
                      }}
                      required
                      defaultValue="Under $500"
                    >
                      <option value="Under $500">Under $500</option>
                      <option value="$500 - $1500">$500 - $1500</option>
                      <option value="$1500 - $3000">$1500 - $3000</option>
                      <option value="$3000 - $5000">$3000 - $5000</option>
                      <option value="Above $5000">Above $5000</option>
                    </select>
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="service" className="form-label text-white">
                      Select Service
                    </label>
                    <select
                      className="form-control"
                      id="service"
                      style={{
                        backgroundColor: "#121212",
                        borderColor: "white",
                        color: "white",
                      }}
                      required
                      defaultValue="Under $500"
                    >
                      <option value="SEO">SEO</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="App Development">App Development</option>
                      <option value="Motion Graphics">Motion Graphics</option>
                      <option value="Copy Writing">Copy Writing</option>
                      <option value="Facebook Ads">Facebook Ads</option>
                      <option value="Google Ads">Google Ads</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-white">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Type Your Message here"
                    rows={2}
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "white",
                      color: "white",
                      padding: "5px"
                    }}
                  ></textarea>
                </div>
                <button type="submit" className="btn mr-0" style={{backgroundColor: '#FF5722', color: 'white'}}>
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
