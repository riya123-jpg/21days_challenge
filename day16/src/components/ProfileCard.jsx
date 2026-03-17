import React from "react";
function ProfileCard({ name, role, image, location, skills }) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "15px",
        borderRadius: "12px",
        width: "250px",
        textAlign: "center",
        transition: "0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        ((e.currentTarget.style.transform = "scale(1.05)"),
          (e.currentTarget.style.boxShadow =
            "0 10px 25px rgba(99,102,241,0.5)"));
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img src={image} style={{ width: "80px", borderRadius: "50%" }} />

      <h3>{name}</h3>

      <p>{role}</p>

      <p style={{ fontSize: "14px", opacity: "0.7" }}>📍 {location}</p>

      <p style={{ fontSize: "13px" }}>💻 {skills}</p>
    </div>
  );
}

export default ProfileCard;
