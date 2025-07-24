import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

function ContactMe() {
    const contactItems = [
        {
            icon: <FaEnvelope size={20} />,
            label: "nareshk@example.com.in",
        },
        {
            icon: <FaLinkedin size={20} />,
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/naresh-kamineni-300b5427b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
            icon: <FaGithub size={20} />,
            label: "GitHub",
            link: "",
        },
        {
            icon: <SiLeetcode size={20} />,
            label: "LeetCode",
            link: "https://leetcode.com/u/naresh733/",
        },
        {
            icon: <FaMapMarkerAlt size={20} />,
            label: "Vijayawada, Andhra Pradesh",
        },
    ];

    return (
        <section
            className="d-flex align-items-center"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #0b0c0cff, #111418ff, #181f24ff)",
                color: "#eee",
            }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="p-5 rounded-4 shadow-lg"
                            style={{
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                backdropFilter: "blur(10px)",
                            }}
                        >
                            <h2
                                className="mb-4 fw-bold"
                                style={{
                                    color: "#0dcaf0",
                                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                                    paddingBottom: "10px",
                                    textShadow: "0 0 8px rgba(13, 202, 240, 0.4)",
                                }}
                            >
                                Get in Touch
                            </h2>

                            <div className="d-flex flex-column gap-4">
                                {contactItems.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="d-flex align-items-center gap-3"
                                        style={{ fontSize: "1.05rem" }}
                                    >
                                        <div style={{ color: "#0dcaf0" }}>{item.icon}</div>
                                        {item.link ? (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="contact-link"
                                            >
                                                {item.label}
                                            </a>
                                        ) : (
                                            <span>{item.label}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>

            {/* Add this CSS styling directly to your global styles or use styled-components */}
            <style>{`
        .contact-link {
          color: #0dcaf0;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .contact-link:hover {
          text-decoration: underline;
          color: #63e6ff;
        }
      `}</style>
        </section>
    );
}

export default ContactMe;
