import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function SOPSummaryBox({ owner, location, lastReviewed, purpose }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const boxStyle = {
    background: isDark ? "#1e293b" : "#f9fafb",
    border: isDark ? "1px solid #334155" : "1px solid #cbd5e1",
    borderRadius: "14px",
    padding: "1.5rem",
    marginBottom: "2rem",
    boxShadow: isDark ? "0 0 16px rgba(255,255,255,0.05)" : "0 0 12px rgba(0,0,0,0.06)",
    color: isDark ? "#f1f5f9" : "#0f172a",
    fontSize: "1rem",
    lineHeight: "1.7",
  };

  const labelStyle = {
    fontWeight: "700",
    display: "inline-block",
    width: "120px",
  };

  return (
    <div style={boxStyle}>
      <div><span style={labelStyle}>Owner:</span> {owner}</div>
      <div><span style={labelStyle}>Location:</span> {location}</div>
      <div><span style={labelStyle}>Last Reviewed:</span> {lastReviewed}</div>
      <div style={{ marginTop: "0.8rem" }}><span style={labelStyle}>Purpose:</span> {purpose}</div>
    </div>
  );
}
