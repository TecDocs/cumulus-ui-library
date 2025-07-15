import React, { useState } from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function ExpandBoxCloud({ title, children }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [open, setOpen] = useState(false);

  const boxStyle = {
    background: isDark ? "#1e293b" : "#f8fafc",
    border: isDark ? "1px solid #475569" : "1px solid #cbd5e1",
    borderRadius: "12px",
    padding: "0.75rem 1rem",
    margin: "1.5rem 0",
    cursor: "pointer",
    boxShadow: isDark
      ? "0 0 8px rgba(255,255,255,0.06)"
      : "0 2px 6px rgba(0,0,0,0.06)",
    color: isDark ? "#f1f5f9" : "#0f172a",
    transition: "all 0.3s ease",
    userSelect: "none",
  };

  const hoverStyle = {
    background: isDark ? "#334155" : "#e2e8f0",
  };

  const headerRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "700",
    fontSize: "1rem",
    lineHeight: "1.4",
  };

  const iconStyle = {
    fontSize: "1.1rem",
    transition: "transform 0.3s ease",
    transform: open ? "rotate(90deg)" : "rotate(0deg)",
  };

  const contentStyle = {
    marginTop: "0.75rem",
    fontSize: "0.95rem",
    lineHeight: "1.7",
  };

  return (
    <div
      style={boxStyle}
      onClick={() => setOpen(!open)}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, boxStyle)}
    >
      <div style={headerRowStyle}>
        <span>{title}</span>
        <span style={iconStyle}>{">"}</span>
      </div>
      {open && <div style={contentStyle}>{children}</div>}
    </div>
  );
}
