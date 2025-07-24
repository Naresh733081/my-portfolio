import React from "react";
import { motion } from "framer-motion";
import {
  FaTools,
  FaLaptopCode,
  FaMicrochip
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiFramer,
  SiArduino,
  SiCplusplus,
  SiSpringboot,
  SiPostgresql,
  SiAxios,
} from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "Student Record Management System",
      icon: <FaLaptopCode className="text-warning" size={24} />,
      overview:
        "A full-stack web application designed to manage student records. Users can add, view, and delete students. Built with a Spring Boot REST API and a responsive React frontend. PostgreSQL is used as the persistent relational database.",
      challenges: [
        "Managing API communication between React frontend and Spring Boot backend.",
        "Ensuring real-time UI update after create/delete operations.",
        "Maintaining consistent database integrity using PostgreSQL."
      ],
      solutions: [
        "Used Axios to perform CRUD operations and synchronize UI instantly.",
        "Designed RESTful APIs using Spring Boot with proper endpoint mapping.",
        "Utilized PostgreSQL and JPA to handle data persistence and query abstraction."
      ],
      techStack: [
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
        { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
        { name: "Axios", icon: <SiAxios color="#f5c518" /> },
      ],
    },
    {
      title: "Library Management System",
      icon: <FaLaptopCode className="text-info" size={24} />,
      overview:
        "A frontend-only application for managing books with features to add, display, and remove books. Built to practice DOM manipulation and local storage integration.",
      challenges: [
        "Maintaining data persistence across sessions without a backend.",
        "Dynamic UI updates upon user interactions.",
      ],
      solutions: [
        "Utilized JavaScript's localStorage for client-side data persistence.",
        "Applied event-driven programming to handle real-time updates.",
      ],
      techStack: [
        { name: "HTML", icon: <SiHtml5 color="#e34c26" /> },
        { name: "CSS", icon: <SiCss3 color="#264de4" /> },
        { name: "JavaScript", icon: <SiJavascript color="#f0db4f" /> },
        { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
      ],
    },
    {
      title: "Portfolio Website",
      icon: <FaLaptopCode className="text-success" size={24} />,
      overview:
        "A personal portfolio website to showcase projects, skills, and experience. Designed with a modern UI, responsive layout, and subtle animations.",
      challenges: [
        "Making animations smooth without affecting performance.",
        "Ensuring responsive layout across various devices.",
      ],
      solutions: [
        "Integrated Framer Motion for smooth component transitions.",
        "Leveraged Bootstrap grid system for mobile-first design.",
      ],
      techStack: [
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
        { name: "Framer Motion", icon: <SiFramer color="#f61067" /> },
      ],
    },
    {
      title: "Collision Avoidance System",
      icon: <FaMicrochip className="text-warning" size={24} />,
      overview:
        "An Arduino-based hardware project that detects obstacles using ultrasonic sensors and alerts users using a buzzer. Aimed at real-time collision prevention.",
      challenges: [
        "Inconsistent sensor readings due to environmental noise.",
        "Limited microcontroller memory for logic complexity.",
      ],
      solutions: [
        "Implemented averaging filter logic to stabilize distance values.",
        "Optimized code in C++ to keep memory usage efficient.",
      ],
      techStack: [
        { name: "Arduino", icon: <SiArduino color="#00979D" /> },
        { name: "C++", icon: <SiCplusplus color="#00599C" /> },
        { name: "Ultrasonic Sensor", icon: <FaMicrochip color="#ffc107" /> },
      ],
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #0b0c0cff, #111418ff, #181f24ff)",
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
          Projects
        </motion.h2>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="mb-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className="p-4 rounded-4 shadow-sm"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-3">
                {project.icon}
                <h5 className="mb-0 text-info fw-semibold">{project.title}</h5>
              </div>

              <p className="text-light mb-3"><strong>Overview:</strong> {project.overview}</p>

              <p className="text-light mb-2 fw-semibold">Challenges:</p>
              <ul className="text-light small ps-3">
                {project.challenges.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>

              <p className="text-light mb-2 fw-semibold">Solutions:</p>
              <ul className="text-light small ps-3">
                {project.solutions.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>

              <div className="d-flex align-items-center gap-2 text-light mt-3 mb-2">
                <FaTools size={16} />
                <strong>Tech Used:</strong>
              </div>
              <div className="d-flex flex-wrap gap-3 ps-4 pt-1">
                {project.techStack.map((tech, i) => (
                  <div key={i} className="d-flex align-items-center gap-2">
                    {tech.icon}
                    <span style={{ fontSize: "0.9rem" }}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;