import React from "react";

const LeadForm = () => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-5" style={{ zIndex: 100 }}>
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
                  padding: "0 10px",
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
                  padding: "0 10px",
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
                  padding: "0 10px",
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
                  padding: "0 10px",
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
                <option value="Social Media Marketing">
                  Social Media Marketing
                </option>
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
                padding: "5px",
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn mr-0"
            style={{ backgroundColor: "#FF5722", color: "white" }}
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
