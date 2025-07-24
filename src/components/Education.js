import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaCode, FaProjectDiagram, FaAward } from "react-icons/fa";
import { MdScience, MdOutlineComputer } from "react-icons/md";
import rguktLogo from "../assets/rguktLogo.jpg";

const educationData = [
  {
    level: "Bachelor of Technology (B.Tech)",
    institution: "RGUKT - Srikakulam",
    duration: "2021 - 2025",
    cgpa: "9.01",
    description: [
      { icon: <MdOutlineComputer />, text: "Electronics and Communication Engineering (ECE)" },
      { icon: <FaCode />, text: "Developed strong interest in software & web development" },
      { icon: <FaProjectDiagram />, text: "Built a Library Management System using HTML, CSS & JS" },
      { icon: <FaAward />, text: "Maintained strong academics with hands-on projects" },
    ],
    logo: rguktLogo,
  },
  {
    level: "Pre University Course (PUC)",
    institution: "RGUKT - Srikakulam",
    duration: "2019 - 2021",
    cgpa: "9.36",
    description: [
      { icon: <MdScience />, text: "Focused on Mathematics, Physics, and Chemistry" },
      { icon: <FaAward />, text: "Maintained academic excellence consistently" },
    ],
    logo: rguktLogo,
  },
  {
    level: "SSC (10th Grade)",
    institution: "Z.P.H.S. High School",
    duration: "2018 - 2019",
    cgpa: "10",
    description: [
      { icon: <FaAward />, text: "Scored a perfect CGPA of 10.0" },
      { icon: <MdScience />, text: "Excelled in Mathematics and Science subjects" },
      { icon: <FaProjectDiagram />, text: "Represented school in district-level science fair" },
    ],
    icon: <FaSchool size={45} color="#ffc107" />,
  },
];

function Education() {
  return (
    <section
      className="py-5 text-light"
      style={{
        minHeight: "100vh",
         background: "linear-gradient(135deg, #080b0cff, #0b1214ff, #11191dff)",
      }}
    >
      <div className="container">
        <h2
          className="text-center fw-bold mb-5"
          style={{
            fontSize: "2.7rem",
            color: "#0dcaf0",
            textShadow: "0 0 8px rgba(0, 191, 255, 0.5)",
            letterSpacing: "1px",
          }}
        >
          Education Details...
        </h2>

        <div className="row g-5 justify-content-center">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="col-md-10 d-flex align-items-stretch gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Logo/Icon */}
              <div
                className="d-flex align-items-start justify-content-center"
                style={{
                  width: "100px",
                  minWidth: "100px",
                }}
              >
                <div
                  className="rounded-circle shadow"
                  style={{
                    width: "90px",
                    height: "90px",
                    backgroundColor: "#0d1117",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "3px solid #0dcaf0",
                  }}
                >
                  {edu.logo ? (
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    edu.icon
                  )}
                </div>
              </div>

              {/* Content */}
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3 }}
                className="p-4 rounded-4 w-100 shadow"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(14px)",
                }}
              >
                <div className="d-flex justify-content-between flex-wrap mb-2">
                  <div>
                    <h5 className="mb-1 fw-bold text-light">{edu.level}</h5>
                    <h6 className="text-info mb-1">{edu.institution}</h6>
                    <p className="text-secondary small mb-1">{edu.duration}</p>
                  </div>
                  {edu.cgpa && (
                    <div className="d-flex align-items-center gap-2 text-warning">
                      CGPA: <span className="fw-semibold">{edu.cgpa}</span>
                    </div>
                  )}
                </div>
                <hr className="text-secondary my-2" />
                <ul className="ps-3">
                  {edu.description.map((item, i) => (
                    <li key={i} className="mb-2 text-light small d-flex align-items-start gap-2">
                      <span className="text-info">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
