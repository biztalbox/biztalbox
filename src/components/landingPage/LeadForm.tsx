import { useState } from "react";
import { Badge } from "react-bootstrap";

const LeadForm = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      setErrorMessage(null);
      setSuccessMessage(null);

      const formData = new FormData(e.currentTarget);
      const formObject = Object.fromEntries(formData.entries());

      // Get browser and page information
      const pageUrl = window.location.href;
      const userAgent = navigator.userAgent;
      const timestamp = new Date().toLocaleString("en-IN");

      // Prepare data for API
      const apiData = {
        ...formObject,
        pageUrl,
        userAgent,
        timestamp,
      };

      // Send to API
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage(result.message);
        // Reset form after successful submission
        (e.target as HTMLFormElement).reset();
      } else {
        setErrorMessage(
          result.message ||
            "Sorry, there was an error submitting your enquiry. Please try again."
        );
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-xl-6 col-lg-6 col-md-5 pl-md-40 pb-80" style={{ zIndex: 100 }}>
      <div className="tm-details-cta-form">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="row">
            <div className="mb-3 col-md-6">
              <label htmlFor="name" className="form-label text-white">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
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
                type="url"
                className="form-control"
                id="website"
                name="website"
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
                name="email"
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
                name="phone"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "white",
                  color: "white",
                  padding: "0 10px",
                }}
                minLength={10}
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
                name="budget"
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
                name="service"
                style={{
                  backgroundColor: "#121212",
                  borderColor: "white",
                  color: "white",
                }}
                required
                defaultValue="SEO"
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
              name="message"
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
            disabled={loading}
            style={{
              backgroundColor: loading ? "#ccc" : "#FF5722",
              color: "white",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>

          {successMessage && (
            <h5 className="mt-2">
              <Badge bg="success">{successMessage}</Badge>
            </h5>
          )}
          {errorMessage && (
            <h5 className="mt-2">
              <Badge bg="danger">{errorMessage}</Badge>
            </h5>
          )}
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
