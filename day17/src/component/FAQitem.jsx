import React, { useState } from "react";

const FAQitem = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: "#1e293b",
        marginBottom: "10px",
        padding: "15px",
        borderRadius: "8px",
        cursor: "pointer",
      }}
      onClick={() => setOpen(!open)}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#334155";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#1e293b";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0 }}>{faq.question}</h3>

        <span style={{ fontSize: "14px" }}>{open ? "▲" : "▼"}</span>
      </div>
      {open && (
        <p style={{ marginTop: "10px", opacity: "0.7" }}>{faq.answer}</p>
      )}
    </div>
  );
};

export default FAQitem;
