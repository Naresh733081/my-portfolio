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



// Tech stack icons
const techStack = [
    { icon: SiReact, color: "#61DAFB", label: "React" },
    { icon: SiSpringboot, color: "#6DB33F", label: "Spring Boot" },
    { icon: SiPostgresql, color: "#336791", label: "PostgreSQL" },
    { icon: SiHtml5, color: "#e34c26", label: "HTML5" },
    { icon: SiCss3, color: "#1572B6", label: "CSS3" },
    { icon: SiJavascript, color: "#f7df1e", label: "JavaScript" },
    { icon: SiBootstrap, color: "#7952B3", label: "Bootstrap" },
    { icon: SiRedux, color: "#764abc", label: "Redux" },
    { icon: SiFormik, color: "#2196f3", label: "Formik" },
];

function Home() {
    return (
        <div style={{
            background: "linear-gradient(135deg, #080b0cff, #0b1214ff, #11191dff)",
            color: "#fff",
            minHeight: "100vh",
            paddingBottom: "4rem"
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
                            <h1 className="display-5 fw-bold text-info mb-3">Hi, I’m Naresh Kamineni</h1>
                            <h5 className="text-light mb-3">Java Full Stack Developer</h5>
                            <p className="text-secondary mb-4">
                                I build scalable full-stack applications using Spring Boot and React, with a focus on performance and clean code.
                            </p>
                            <div className="d-flex justify-content-center flex-wrap gap-3 mt-4 px-2">
                                {/* Projects Button */}
                                <motion.div whileTap={{ scale: 0.95 }}>
                                    <NavLink
                                        to="/projects"
                                        className="btn btn-outline-info fw-semibold text-light"
                                        style={{
                                            minWidth: "130px",
                                            borderRadius: "0.8rem",
                                            padding: "0.5rem 1rem",
                                            borderWidth: "2px"
                                        }}
                                    >
                                        <i className="bi bi-kanban me-2"></i> Projects
                                    </NavLink>
                                </motion.div>

                                {/* Contact Button */}
                                <motion.div whileTap={{ scale: 0.95 }}>
                                    <NavLink
                                        to="/contact"
                                        className="btn btn-outline-info fw-semibold text-light"
                                        style={{
                                            minWidth: "130px",
                                            borderRadius: "0.8rem",
                                            padding: "0.5rem 1rem",
                                            borderWidth: "2px"
                                        }}
                                    >
                                        <i className="bi bi-chat-dots me-2"></i> Contact
                                    </NavLink>
                                </motion.div>

                                {/* Resume Download Button */}
                                <motion.div whileTap={{ scale: 0.95 }}>
                                    <a
                                        href="/resume.pdf"
                                        download
                                        className="btn btn-outline-warning fw-semibold text-light"
                                        style={{
                                            minWidth: "150px",
                                            borderRadius: "0.8rem",
                                            padding: "0.5rem 1rem",
                                            borderWidth: "2px"
                                        }}
                                    >
                                        <i className="bi bi-download me-2"></i> Resume
                                    </a>
                                </motion.div>
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
                                width: "240px",
                                height: "240px",
                                objectFit: "cover",
                                borderWidth: "4px"
                            }}
                        />
                    </Col>
                </Row>
            </Container>

            {/* === PROFESSIONAL ABOUT ME SECTION === */}
            <Container className="pb-5 px-3">
                <Row>
                    <Col md={10} lg={8} className="mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="p-4 rounded-4 shadow-sm"
                            style={{
                                background: "rgba(255, 255, 255, 0.03)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(12px)",
                                WebkitBackdropFilter: "blur(12px)",
                                color: "#ddd"
                            }}
                        >
                            <h4 className="text-info mb-3 fw-bold">About Me</h4>
                            <p style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
                                I'm a Java Full Stack Developer who enjoys building smooth, user-friendly web applications using Spring Boot and React. I like creating responsive designs and writing clean, organized code that’s easy to work with.
                            </p>
                            <p style={{ fontSize: "0.85rem", lineHeight: "1.6" }} className="text-info">
                                Currently, I’m focused on improving my skills in structuring large projects, managing time better, and following best practices for secure and reliable development.
                            </p>

                        </motion.div>
                    </Col>
                </Row>
            </Container>

            {/* === TECH STACK SECTION === */}
            <Container className="text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="fw-bold mb-4"
                    style={{
                        fontSize: "2.2rem",
                        color: "#0dcaf0",
                        textShadow: "0 0 8px rgba(13, 202, 240, 0.6)"
                    }}
                >
                    Tech Stack
                </motion.h2>

                <div className="d-flex flex-wrap justify-content-center gap-4 px-3">
                    {techStack.map((tech, idx) => {
                        const Icon = tech.icon;
                        return (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.85 }}
                                className="text-center"
                                style={{ minWidth: 60 }}
                            >
                                <Icon size={36} color={tech.color} />
                                <div className="small mt-1 text-light">{tech.label}</div>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}

export default Home;
