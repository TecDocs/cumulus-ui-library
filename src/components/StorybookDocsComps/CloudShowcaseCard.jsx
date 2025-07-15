import React from "react";
import { motion } from "framer-motion";
import { useColorMode } from "@docusaurus/theme-common";

export default function CloudShowcaseCard({ title, href, children }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const containerStyle = {
    position: "relative",
    borderRadius: "24px",
    padding: "2.2rem",
    margin: "1.8rem 0",
    overflow: "hidden",
    color: isDark ? "#ffffff" : "#0f172a",
    background: isDark
      ? "linear-gradient(135deg, rgba(30,41,59,0.95), rgba(15,23,42,0.85))"
      : "linear-gradient(135deg, rgba(239,246,255,0.95), rgba(219,234,254,0.85))",
    boxShadow: isDark
      ? "0 0 30px rgba(56,189,248,0.25)"
      : "0 6px 18px rgba(0,0,0,0.08)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    cursor: href ? "pointer" : "default",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    textDecoration: "none",
    display: "block",
  };

  const cloudStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    opacity: isDark ? 0.25 : 0.12,
    pointerEvents: "none",
  };

  const titleStyle = {
    fontSize: "1.6rem",
    fontWeight: "800",
    marginBottom: "1rem",
    position: "relative",
    zIndex: 1,
    color: isDark ? "#93c5fd" : "#1e40af",
    textDecoration: "none",
  };

  const bodyStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.7rem",
    position: "relative",
    zIndex: 1,
  };

  const CardInner = (
    <>
      <svg viewBox="0 0 600 300" preserveAspectRatio="none" style={cloudStyle}>
        <path
          d="M80,180 C40,180 40,120 80,120 C120,40 280,40 320,120 C400,120 400,180 320,180 Z"
          fill={isDark ? "#38bdf8" : "#60a5fa"}
        />
        <path
          d="M260,200 C200,200 200,100 260,100 C300,30 500,30 540,100 C600,100 600,200 540,200 Z"
          fill={isDark ? "#0ea5e9" : "#93c5fd"}
        />
        <path
          d="M150,230 C110,230 110,140 150,140 C180,60 400,60 440,140 C500,140 500,230 440,230 Z"
          fill={isDark ? "#7dd3fc" : "#bfdbfe"}
        />
      </svg>
      <div style={titleStyle}>{title}</div>
      <div style={bodyStyle}>{children}</div>
    </>
  );

  const MotionCard = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: isDark
          ? "0 0 45px rgba(56,189,248,0.45)"
          : "0 10px 30px rgba(0,0,0,0.12)",
      }}
      style={containerStyle}
    >
      {CardInner}
    </motion.div>
  );

  // Wrap the whole card in <a> if href is present
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      {MotionCard}
    </a>
  ) : (
    MotionCard
  );
}
