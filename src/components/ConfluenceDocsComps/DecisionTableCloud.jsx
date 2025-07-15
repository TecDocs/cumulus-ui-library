import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function DecisionTableCloud({ headers, rows }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    margin: "2rem 0",
    boxShadow: isDark ? "0 0 20px rgba(255,255,255,0.04)" : "0 0 10px rgba(0,0,0,0.05)",
    borderRadius: "8px",
    overflow: "hidden",
    color: isDark ? "#f1f5f9" : "#0f172a",
    fontSize: "0.95rem",
  };

  const thStyle = {
    background: isDark ? "#1e293b" : "#e2e8f0",
    padding: "12px",
    textAlign: "left",
    fontWeight: "700",
    borderBottom: isDark ? "1px solid #334155" : "1px solid #cbd5e1",
  };

  const tdStyle = {
    padding: "12px",
    borderBottom: isDark ? "1px solid #334155" : "1px solid #e2e8f0",
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i} style={thStyle}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} style={tdStyle}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
