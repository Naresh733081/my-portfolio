import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import profileImage from "../assets/profileImage.jpg";
import { motion } from "framer-motion";
import {
    SiHtml5, SiCss3, SiJavascript, SiReact,
    SiSpringboot, SiPostgresql, SiBootstrap,
    SiRedux, SiFormik
} from "react-icons/si";

// Reusable tech stack data
const techStack = [
    { icon: SiHtml5, color: "#e34c26", label: "HTML5", desc: "Semantic markup for structured content." },
    { icon: SiCss3, color: "#1572B6", label: "CSS3", desc: "Modern responsive styling." },
    { icon: SiJavascript, color: "#f7df1e", label: "JavaScript", desc: "Dynamic behavior with ES6+ features." },
    { icon: SiReact, color: "#61DAFB", label: "React.js", desc: "Modern UI with reusable components." },
    { icon: SiRedux, color: "#764abc", label: "Redux", desc: "Predictable state container." },
    { icon: SiFormik, color: "#2196f3", label: "Formik", desc: "Form handling and validation." },
    { icon: SiSpringboot, color: "#6DB33F", label: "Spring Boot", desc: "Powerful backend APIs." },
    { icon: SiPostgresql, color: "#336791", label: "PostgreSQL", desc: "Robust relational database." },
    { icon: SiBootstrap, color: "#7952B3", label: "Bootstrap", desc: "Fast prototyping with styled components." },
];

function Home() {
    return (
        <div style={{
            background: "linear-gradient(135deg, #080b0cff, #0b1214ff, #11191dff)",
            color: "#fff",
            minHeight: "100vh",
            paddingBottom: "5rem"
        }}>
            {/* === HERO SECTION === */}
            <Container className="pt-5 pb-5">
                <Row className="align-items-center">
                    <Col md={7}>
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="display-4 fw-bold text-info mb-3">Hi, I’m Naresh Kamineni</h1>
                            <h4 className="text-light mb-3">A Passionate Java Full Stack Developer</h4>
                            <p className="lead text-secondary mb-4">
                                I craft seamless and responsive web applications using powerful frontend and backend technologies.
                            </p>
                            <div className="d-flex gap-3 flex-wrap">
                                <NavLink to="/projects" className="btn btn-info fw-bold">
                                    <i className="bi bi-kanban me-2"></i> Projects
                                </NavLink>
                                {/* <a href="/resume.pdf" className="btn btn-outline-light fw-bold" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-file-earmark-text me-2"></i> Resume
                                </a> */}
                                <NavLink to="/contact" className="btn btn-warning fw-bold text-dark">
                                    <i className="bi bi-chat-dots me-2"></i> Contact
                                </NavLink>
                            </div>
                        </motion.div>
                    </Col>

                    <Col md={5} className="text-center mt-5 mt-md-0">
                        <motion.img
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1 }}
                            src={profileImage}
                            alt="Naresh Kamineni"
                            className="img-fluid rounded-circle shadow border border-info"
                            style={{
                                width: "270px",
                                height: "270px",
                                objectFit: "cover",
                                borderWidth: "4px"
                            }}
                        />
                    </Col>
                </Row>
            </Container>

            {/* === TECHNOLOGIES SECTION === */}
            <Container className="mt-5">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center fw-bold mb-5"
                    style={{
                        fontSize: "2.4rem",
                        color: "#0dcaf0",
                        textShadow: "0 0 8px rgba(13, 202, 240, 0.6)",
                        letterSpacing: "1px"
                    }}
                >
                    Technologies I Work With
                </motion.h2>

                <Row className="g-4">
                    {techStack.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <Col key={index} md={6} lg={4} className="d-flex align-items-stretch">
                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                                        borderColor: tech.color,
                                        boxShadow: `0 0 20px ${tech.color}88`
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="p-4 w-100 rounded-4 shadow-sm"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.02)",
                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                        backdropFilter: "blur(14px)",
                                        WebkitBackdropFilter: "blur(14px)",
                                        color: "#fff",
                                        textAlign: "center"
                                    }}
                                >
                                    <div className="mb-3">
                                        <Icon size={60} color={tech.color} />
                                    </div>
                                    <h5 style={{ color: tech.color }}>{tech.label}</h5>
                                    <p className="text-light small">{tech.desc}</p>
                                </motion.div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Home;
