import React, { useState } from "react";
import { Row, Form, Badge } from "react-bootstrap";
import styles from "./SidebarCta.module.scss";
const SidebarCta = () => {

    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const submitButtonStyle: React.CSSProperties = {
        background: loading
            ? "#ccc"
            : "linear-gradient(135deg, #336EF9 0%, #EB5939 100%)",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        fontWeight: 600,
        color:"white",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 15px rgba(51, 110, 249, 0.3)",
        opacity: loading ? 0.7 : 1,
    };

    const handleSubmitButtonMouseEnter: React.MouseEventHandler<
        HTMLButtonElement
    > = (e) => {
        if (loading) return;
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(51, 110, 249, 0.4)";
    };

    const handleSubmitButtonMouseLeave: React.MouseEventHandler<
        HTMLButtonElement
    > = (e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 15px rgba(51, 110, 249, 0.3)";
    };

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
        <Row className={`align-items-center ${styles.root}`}>
            <div>
                <div className="z-index-5">
                    <div className="tm-details-title-box mb-20">
                        <h3 className="sidebar__widget-title">Book a Free Consultation Call</h3>
                    </div>
                    <div className="d-flex flex-column gap-3 mb-4">
                        <div className="d-flex align-items-center">
                            <div
                                className={styles.iconCircle}
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    background: "transparent",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: "15px",
                                }}
                            >
                                <i
                                    className="fas fa-check "
                                    style={{ fontSize: "14px", color: "currentColor" }}
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <h6 className={styles.itemText}>Free 30-minute consultation</h6>
                        </div>
                        <div className="d-flex align-items-center">
                            <div
                                className={styles.iconCircle}
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    background: "transparent",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: "15px",
                                }}
                            >
                                <i
                                    className="fas fa-check "
                                    style={{ fontSize: "14px", color: "currentColor" }}
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <h6 className={styles.itemText}>
                                No obligation, just valuable insights
                            </h6>
                        </div>
                        <div className="d-flex align-items-center">
                            <div
                                className={styles.iconCircle}
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    background: "transparent",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: "15px",
                                }}
                            >
                                <i
                                    className="fas fa-check"
                                    style={{ fontSize: "14px", color: "currentColor" }}
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <h6 className={styles.itemText}>
                                Expert advice tailored to your business
                            </h6>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="tm-details-cta-form pl-md-40">
                    <div className={styles.formWrap}>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <div className="mb-3">
                                    <Form.Group>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            required
                                            className={styles.control}
                                            placeholder="Full Name"
                                        />
                                    </Form.Group>
                                </div>
                            </Row>
                            <Row>
                                <div className="mb-3">
                                    <Form.Group>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            required
                                            className={styles.control}
                                            placeholder='Email id'
                                        />
                                    </Form.Group>
                                </div>
                                <div className="mb-3">
                                    <Form.Group>
                                        <Form.Control
                                            type="tel"
                                            name="phone"
                                            maxLength={15}
                                            className={styles.control}
                                            placeholder='Phone Number'
                                        />
                                    </Form.Group>
                                </div>
                            </Row>
                            <Row>
                                <div className="mb-3">
                                    <Form.Group>
                                        <Form.Control
                                            type="date"
                                            name="date"
                                            required
                                            min={new Date().toISOString().split("T")[0]}
                                            className={styles.control}
                                            placeholder="Select Date"
                                        />
                                    </Form.Group>
                                </div>

                                <div className="mb-3">
                                    <Form.Group className="">
                                        <input
                                            type="time"
                                            className={`form-control ${styles.control}`}
                                            name="time"
                                            required
                                            placeholder="Select Time"
                                        />
                                    </Form.Group>
                                </div>
                            </Row>

                            <button
                                type="submit"
                                className="btn w-100 py-3"
                                disabled={loading}
                                style={submitButtonStyle}
                                onMouseEnter={handleSubmitButtonMouseEnter}
                                onMouseLeave={handleSubmitButtonMouseLeave}
                            >
                                {/* <i className="fas fa-calendar-check me-2"></i> */}
                                {loading ? "Scheduling..." : "Book Free Call"}
                            </button>

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
            </div>
        </Row>
    )
}

export default SidebarCta