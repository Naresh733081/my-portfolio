import React from "react";
import nameSVG from "../assets/text.svg";
import { FaCode } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="pt-4 pb-3"
      style={{
        background: "linear-gradient(135deg, #080b0cff, #0b1214ff, #11191dff)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        color: "#ccc",
      }}
    >
      <div className="container text-center">
        {/* Developer Text */}
        <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
          <FaCode color="#0dcaf0" size={18} />
          <span style={{ fontSize: "0.95rem", color: "#aaa" }}>
            Crafted & Developed by
          </span>
        </div>

        {/* SVG Name Logo */}
        <img
          src={nameSVG}
          alt="Naresh Kamineni"
          width="240"
          style={{
            filter: "drop-shadow(0 0 8px #0dcaf0aa)",
            marginBottom: "0.5rem",
            maxWidth: "100%",
          }}
        />

        {/* Copyright */}
        <p style={{ fontSize: "0.8rem", color: "#888" }}>
          &copy; {new Date().getFullYear()} Naresh Kamineni. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
