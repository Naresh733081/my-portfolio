import React from "react";
import { motion } from "framer-motion";
import companyLogo from "../assets/apcfss-logo.svg";
import {
    FaLaptopCode,
    FaCodeBranch,
    FaTools,
    FaProjectDiagram,
    FaTasks,
    FaJava,
    FaBootstrap,
} from "react-icons/fa";
import {
    SiReact,
    SiRedux,
    SiSpringboot,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiPostgresql,
    SiFormik,
} from "react-icons/si";

function Experience() {
    const experiences = [
        {
            role: "Software Developer Intern",
            company: "APCFSS",
            duration: "May 2025 – Present",
            techStack: [
                { name: "Java", icon: <FaJava color="#f89820" /> },
                { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
                { name: "React", icon: <SiReact color="#61DAFB" /> },
                { name: "Redux", icon: <SiRedux color="#764abc" /> },
                { name: "Formik", icon: <SiFormik color="#fc6736" /> },
                { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> }
            ],
            project: null,
            responsibilities: [],
            icon: <FaLaptopCode className="text-info" size={24} />,
        },
        {
            role: "Web Development Intern",
            company: "Ignited Minds Organisation",
            duration: "April 2024 – June 2024",
            techStack: [
                { name: "HTML", icon: <SiHtml5 color="#e34c26" /> },
                { name: "CSS", icon: <SiCss3 color="#264de4" /> },
                { name: "JavaScript", icon: <SiJavascript color="#f0db4f" /> },
                { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
            ],
            project:
                "Created a Library Management System frontend to display, add, and manage books using local storage.",
            responsibilities: [
                "Built responsive UI with HTML, CSS, and Bootstrap.",
                "Handled dynamic DOM manipulation using JavaScript.",
                "Demonstrated initiative by building a full project beyond training scope.",
                "Developed strong foundations in client-side scripting.",
            ],
            icon: <FaCodeBranch className="text-warning" size={24} />,
        },
    ];

    return (
        <section
            className="py-5"
            style={{
                background: "linear-gradient(135deg, #080b0cff, #0b1214ff, #11191dff)",
                color: "#eee",
            }}
        >
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center fw-bold mb-5"
                    style={{
                        fontSize: "2.5rem",
                        color: "#0dcaf0",
                        textShadow: "0 0 6px rgba(13, 202, 240, 0.4)",
                        letterSpacing: "1px",
                    }}
                >
                    Experience
                </motion.h2>

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="mb-5"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="p-4 rounded-4 shadow-sm position-relative"
                            style={{
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                backdropFilter: "blur(10px)",
                            }}
                        >
                            {/* Duration Badge */}
                            <span
                                className="position-absolute top-0 end-0 badge bg-info text-dark"
                                style={{
                                    transform: "translate(-10px, 10px)",
                                    fontSize: "0.8rem",
                                    padding: "0.4em 0.75em",
                                    borderRadius: "10px",
                                }}
                            >
                                {exp.duration}
                            </span>

                            {/* Title */}
                            <div className="d-flex align-items-center gap-2 mb-2">
                                {exp.icon}
                                <h5 className="mb-0 text-info fw-semibold">{exp.role}</h5>
                            </div>
                            <h6 className="text-light mb-3">
                                {exp.company === "APCFSS" ? (
                                    <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2">
                                        <img src={companyLogo} width="150px" alt="APCFSS Logo" />
                                        <span>AP Centre for Financial Systems & Services</span>
                                    </div>
                                ) : (
                                    exp.company
                                )}
                            </h6>

                            {/* Tech Stack */}
                            <div className="mb-3">
                                <div className="d-flex align-items-center gap-2 text-light mb-1">
                                    <FaTools size={16} />
                                    <strong>Tech Stack:</strong>
                                </div>
                                <div className="d-flex flex-wrap gap-3 ps-4">
                                    {exp.techStack.map((tech, i) => (
                                        <div key={i} className="d-flex align-items-center gap-1">
                                            {tech.icon}
                                            <span style={{ fontSize: "0.9rem" }}>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Project */}
                            {exp.project && (
                                <div className="mb-3">
                                    <div className="d-flex align-items-center gap-2 text-light mb-1">
                                        <FaProjectDiagram size={16} />
                                        <strong>Project:</strong>
                                    </div>
                                    <p className="mb-0 ps-4">{exp.project}</p>
                                </div>
                            )}

                            {/* Responsibilities */}
                            {exp.responsibilities.length > 0 && (
                                <div>
                                    <div className="d-flex align-items-center gap-2 text-light mb-1">
                                        <FaTasks size={16} />
                                        <strong>Responsibilities:</strong>
                                    </div>
                                    <ul className="text-light small ps-4 mb-0">
                                        {exp.responsibilities.map((item, idx) => (
                                            <li key={idx} style={{ marginBottom: "6px" }}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
