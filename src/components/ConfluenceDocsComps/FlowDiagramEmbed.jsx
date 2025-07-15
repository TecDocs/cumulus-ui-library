import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { motion } from "framer-motion";
import AnimatedFigureCaption from "@site/src/components/KnowledgeBaseComps/AnimatedFigureCaption";

export default function FlowDiagramEmbed({ image, alt, caption }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const containerStyle = {
    background: isDark ? "#0f172a" : "#f8fafc",
    border: isDark ? "1px solid #334155" : "1px solid #cbd5e1",
    borderRadius: "16px",
    padding: "1rem",
    margin: "2rem 0",
    textAlign: "center",
    boxShadow: isDark ? "0 0 20px rgba(255,255,255,0.06)" : "0 0 12px rgba(0,0,0,0.06)",
  };

  const imgStyle = {
    maxWidth: "100%",
    borderRadius: "8px",
    marginBottom: "0.8rem",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={containerStyle}
    >
      <img src={image} alt={alt} style={imgStyle} />
      <AnimatedFigureCaption>{caption}</AnimatedFigureCaption>
    </motion.div>
  );
}
