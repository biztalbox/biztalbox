import React from "react";
import Image from "next/image";

// images
import c_img_1 from "@/assets/img/inner-contact/contact/contact-1.jpg";
import c_img_2 from "@/assets/img/inner-contact/contact/contact-2.jpg";
import c_img_3 from "@/assets/img/inner-contact/contact/contact-3.jpg";
import c_img_4 from "@/assets/img/inner-contact/contact/contact-4.jpg";
import c_img_5 from "@/assets/img/inner-contact/contact/contact-5.jpg";
import c_img_6 from "@/assets/img/inner-contact/contact/contact-6.jpg";

const location_data = [
  {
    id: 1,
    country: "Sydney",
    img_1: c_img_1,
    img_2: c_img_2,
    map: "https://www.google.com/maps/@23.822356,90.3671947,15z?entry=ttu",
    address: "C26, 99 Jones Street, Ultimo. Sydney. 2007, NSW- Australia",
    phone: "(+91) 76001726",
    email: "sydney@contact.com",
  },
  {
    id: 2,
    country: "London",
    img_1: c_img_3,
    img_2: c_img_4,
    map: "https://www.google.com/maps/@23.822356,90.3671947,15z?entry=ttu",
    address: "86-90 Paul Street. London. EC2A 4NE, I-United Kingdom",
    phone: "(+91) 76001726",
    email: "london@contact.com",
  },
  {
    id: 3,
    country: "Join us",
    img_1: c_img_5,
    img_2: c_img_6,
    map: "https://www.google.com/maps/@23.822356,90.3671947,15z?entry=ttu",
    address:
      "We're always looking for bright new talent. If you're keen. drop us a note:",
    note: "( no 100mb PDFs please )",
    email: "Hello@contact.com",
  },
];
const ContactLocationTwo = () => {
  return (
    <div className="cn-contact-2-info-area pb-90">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className={`cn-contact-2-content mt-60 text-center`}>
              <h4 className="cn-contact-2-title">Email</h4>
              {/* <div className="cn-contact-2-thumb d-flex justify-content-center">
                  
                </div> */}
              <div
                className="cn-contact-2-info-details"
                style={{ maxWidth: "auto", margin: "auto" }}
              >
                <a
                  style={{
                    fontSize: "25px",
                    paddingLeft: 0,
                    margin: "auto",
                    textAlign: "center",
                  }}
                  href="mailto:info@biztalbox.com"
                >
                  info@biztalbox.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className={`cn-contact-2-content mt-60 text-center`}>
              <h4 className="cn-contact-2-title">Call</h4>
              {/* <div className="cn-contact-2-thumb d-flex justify-content-center">
                  
                </div> */}
              <div
                className="cn-contact-2-info-details"
                style={{ maxWidth: "auto", margin: "auto" }}
              >
                <a
                  style={{
                    fontSize: "25px",
                    paddingLeft: 0,
                    margin: "auto",
                    textAlign: "center",
                  }}
                  href="tel:9485699709"
                >
                  +91 9485699709
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className={`cn-contact-2-content mt-60 text-center`}>
              <h4 className="cn-contact-2-title" style={{marginBottom: '10px'}}>Address</h4>
              {/* <div className="cn-contact-2-thumb d-flex justify-content-center">
                  
                </div> */}
              <div
                className="cn-contact-2-info-details"
                style={{ maxWidth: "auto", margin: "auto" }}
              >
                <p
                  style={{
                    fontSize: "22px",
                    paddingLeft: 0,
                    margin: "auto",
                    textAlign: "center",
                  }}
                >
                  A-11, 2nd Floor, sector 8 Dwarka 110075 New Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLocationTwo;
