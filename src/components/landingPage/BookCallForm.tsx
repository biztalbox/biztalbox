import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Badge } from "react-bootstrap";

const BookCallForm = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErrorMessage(null);
      setSuccessMessage(null);

      const formData = new FormData(e.currentTarget);
      const formObject = Object.fromEntries(formData.entries());

      // Get browser and page information
      const pageUrl = window.location.href;
      const userAgent = navigator.userAgent;
      const timestamp = new Date().toLocaleString("en-IN");

      const apiData = {
        ...formObject,
        pageUrl,
        userAgent,
        timestamp,
      };

      // Send to API
      const res = await fetch("/api/call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      });

      const result = await res.json();

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
    <div className="p-relative pt-120 pb-80">
      {/* Background shapes similar to team details */}
      <div
        className="tm-details-shape-1"
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          zIndex: 1,
          opacity: 0.1,
        }}
      >
        <div
          style={{
            width: "200px",
            height: "200px",
            background: "linear-gradient(135deg, #336EF9 0%, #EB5939 100%)",
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        ></div>
      </div>
      <div
        className="tm-details-shape-2"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          zIndex: 1,
          opacity: 0.1,
        }}
      >
        <div
          style={{
            width: "150px",
            height: "150px",
            background: "linear-gradient(135deg, #EB5939 0%, #336EF9 100%)",
            borderRadius: "50%",
            filter: "blur(30px)",
          }}
        ></div>
      </div>

      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="align-items-center">
          <Col xl={6} lg={6} md={7}>
            <div className="z-index-5">
              <div className="tm-details-title-box mb-20">
                <span className="tm-hero-subtitle">Ready to Schedule Your</span>
                <h4 className="tm-details-title">Free Consultation Call?</h4>
              </div>
              <div className="tm-details-text">
                <p>
                  Take the first step towards growing your business. Schedule a
                  free 30-minute consultation call with our experts and discover
                  how we can help you achieve your goals.
                </p>
              </div>

              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-center">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "transparent",
                      borderRadius: "50%",
                      border: "1px solid white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "15px",
                    }}
                  >
                    <i
                      className="fas fa-check text-white"
                      style={{ fontSize: "14px" }}
                    ></i>
                  </div>
                  <h6 className="text-white">Free 30-minute consultation</h6>
                </div>
                <div className="d-flex align-items-center">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "transparent",
                      borderRadius: "50%",
                      border: "1px solid white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "15px",
                    }}
                  >
                    <i
                      className="fas fa-check text-white"
                      style={{ fontSize: "14px" }}
                    ></i>
                  </div>
                  <h6 className="text-white">
                    No obligation, just valuable insights
                  </h6>
                </div>
                <div className="d-flex align-items-center">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "transparent",
                      borderRadius: "50%",
                      border: "1px solid white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "15px",
                    }}
                  >
                    <i
                      className="fas fa-check text-white"
                      style={{ fontSize: "14px" }}
                    ></i>
                  </div>
                  <h6 className="text-white">
                    Expert advice tailored to your business
                  </h6>
                </div>
              </div>
            </div>
          </Col>

          <Col xl={6} lg={6} md={5} style={{ zIndex: 100 }}>
            <div className="tm-details-cta-form pl-md-40">
              <div
                style={{
                  background: "#1E1E1E",
                  borderRadius: "15px",
                  padding: "40px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label className="text-white">
                          Full Name *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          required
                          className="text-white"
                          style={{
                            backgroundColor: "transparent",
                            borderColor: "#EAEAEB",
                            color: "white",
                            borderRadius: "8px",
                            fontSize: "16px",
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label className="text-white">
                          Website
                        </Form.Label>
                        <Form.Control
                          type="url"
                          name="website"
                          
                          style={{
                            backgroundColor: "transparent",
                            borderColor: "#EAEAEB",
                            color: "white",
                            borderRadius: "8px",
                            fontSize: "16px",
                          }}
                          className="text-white"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label className="text-white">
                          Email Address *
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          required
                          className="text-white"
                          style={{
                            backgroundColor: "transparent",
                            borderColor: "#EAEAEB",
                            color: "white",
                            borderRadius: "8px",
                            fontSize: "16px",
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label className="text-white">
                          Phone Number
                        </Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          maxLength={15}
                          style={{
                            backgroundColor: "transparent",
                            borderColor: "#EAEAEB",
                            color: "white",
                            borderRadius: "8px",
                            fontSize: "16px",
                          }}
                          className="text-white"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label className="text-white">
                          Preferred Date *
                        </Form.Label>
                        <Form.Control
                          type="date"
                          name="date"
                          required
                          min={new Date().toISOString().split("T")[0]}
                          style={{
                            backgroundColor: "transparent",
                            borderColor: "#EAEAEB",
                            color: "white",
                            borderRadius: "8px",
                            fontSize: "16px",
                          }}
                          className="text-white"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Group className="mb-4">
                        <Form.Label className="text-white">
                          Preferred Time *
                        </Form.Label>
                        <input
                          type="time"
                          className="text-white form-control"
                          name="time"
                          required
                          style={{
                            backgroundColor: "#1E1E1E",
                            borderColor: "#EAEAEB",
                            color: "white",
                            borderRadius: "8px",
                            fontSize: "16px",
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button
                    type="submit"
                    className="w-100 py-3"
                    disabled={loading}
                    style={{
                      background: loading
                        ? "#ccc"
                        : "linear-gradient(135deg, #336EF9 0%, #EB5939 100%)",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "white",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 15px rgba(51, 110, 249, 0.3)",
                      opacity: loading ? 0.7 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 6px 20px rgba(51, 110, 249, 0.4)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 15px rgba(51, 110, 249, 0.3)";
                    }}
                  >
                    <i className="fas fa-calendar-check me-2"></i>
                    {loading ? "Scheduling..." : "Book Free Call"}
                  </Button>

                  {successMessage && (
                    <h5 className="mt-4">
                      <Badge bg="success">{successMessage}</Badge>
                    </h5>
                  )}
                  {errorMessage && (
                    <h5 className="mt-4">
                      <Badge bg="danger">{errorMessage}</Badge>
                    </h5>
                  )}
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookCallForm;
