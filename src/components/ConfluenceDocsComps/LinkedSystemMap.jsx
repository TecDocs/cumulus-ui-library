import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { motion } from "framer-motion";
import AnimatedFigureCaption from "@site/src/components/KnowledgeBaseComps/AnimatedFigureCaption";

export default function LinkedSystemMap({ items, caption }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
    padding: "2rem",
    background: isDark ? "#0f172a" : "#f8fafc",
    border: isDark ? "1px solid #334155" : "1px solid #cbd5e1",
    borderRadius: "16px",
    margin: "2rem 0",
  };

  const itemStyle = {
    flex: "0 1 200px",
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: "600",
    color: isDark ? "#f8fafc" : "#0f172a",
    padding: "1rem",
    borderRadius: "8px",
    background: isDark ? "#1e293b" : "#e2e8f0",
    boxShadow: isDark ? "0 0 12px rgba(255,255,255,0.05)" : "0 0 8px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ marginBottom: "2rem" }}
    >
      <div style={containerStyle}>
        {items.map((item, idx) => (
          <a key={idx} href={item.link} style={{ textDecoration: "none" }}>
            <div style={itemStyle}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{item.icon}</div>
              {item.name}
            </div>
          </a>
        ))}
      </div>
      <AnimatedFigureCaption>{caption}</AnimatedFigureCaption>
    </motion.div>
  );
}
