import React, { useState } from "react";
import { Row, Form, Badge } from "react-bootstrap";
import styles from "./SidebarCta.module.scss";

type DateTimeFieldProps = {
    type: "date" | "time";
    name: string;
    placeholder: string;
    min?: string;
    required?: boolean;
};

function DateTimeField({ type, name, placeholder, min, required }: DateTimeFieldProps) {
    const [value, setValue] = useState("");

    return (
        <div
            className={`${styles.dateTimeField} ${
                value ? styles.dateTimeFieldFilled : styles.dateTimeFieldEmpty
            }`}
        >
            <Form.Control
                type={type}
                name={name}
                required={required}
                min={min}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={styles.control}
                aria-label={placeholder}
            />
            {!value && (
                <span className={styles.dateTimePlaceholder} aria-hidden="true">
                    {placeholder}
                </span>
            )}
        </div>
    );
}

const SidebarCta = () => {

    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [formKey, setFormKey] = useState(0);
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
                (e.target as HTMLFormElement).reset();
                setFormKey((key) => key + 1);
            } else {                setErrorMessage(
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
                        <Form key={formKey} onSubmit={handleSubmit}>                            <Row>
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
                                        <DateTimeField
                                            type="date"
                                            name="date"
                                            required
                                            min={new Date().toISOString().split("T")[0]}
                                            placeholder="Select Date"
                                        />
                                    </Form.Group>
                                </div>

                                <div className="mb-3">
                                    <Form.Group>
                                        <DateTimeField
                                            type="time"
                                            name="time"
                                            required
                                            placeholder="Select Time"
                                        />
                                    </Form.Group>
                                </div>                            </Row>

                            <button
                                type="submit"
                                className={`btn w-100 py-3 ${styles.submitBtn}`}
                                disabled={loading}
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