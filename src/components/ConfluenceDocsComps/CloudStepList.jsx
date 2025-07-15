import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { motion } from "framer-motion";

export default function CloudStepList({ steps }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const listStyle = {
    listStyleType: "decimal",
    paddingLeft: "1.5rem",
    color: isDark ? "#f8fafc" : "#0f172a",
    fontSize: "1.05rem",
    lineHeight: "1.8",
    margin: "1.5rem 0",
  };

  const itemStyle = {
    marginBottom: "0.8rem",
  };

  return (
    <motion.ol
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      style={listStyle}
    >
      {steps.map((step, index) => (
        <li key={index} style={itemStyle}>{step}</li>
      ))}
    </motion.ol>
  );
}
