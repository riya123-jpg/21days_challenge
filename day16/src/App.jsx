import React from "react";
import ProfileCard from "./components/profileCard";
function App() {
  const users = [
    {
      name: "Riya",
      role: "Frontend Developer",
      location: "India",
      skills: "HTML, CSS, JS, React",
      image: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Alex",
      role: "UI Designer",
      location: "USA",
      skills: "Figma, UI/UX",
      image: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "John",
      role: "Backend Developer",
      location: "UK",
      skills: "Node.js, Express",
      image: "https://i.pravatar.cc/100?img=3",
    },
    {
      name: "Sara",
      role: "Full Stack Developer",
      location: "Canada",
      skills: "React, Node.js",
      image: "https://i.pravatar.cc/100?img=4",
    },
    {
      name: "Arjun Mehta",
      role: "Full Stack Developer",
      location: "India",
      skills: "React, Node.js, MongoDB",
      image: "https://i.pravatar.cc/100?img=8",
    },
  ];

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
        padding: "40px",
      }}
    >
      <h1 style={{ textAlign: "center", marginTop: "0px" }}>Team Members </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {users.map((user, index) => (
          <ProfileCard
            key={index}
            name={user.name}
            role={user.role}
            location={user.location}
            skills={user.skills}
            image={user.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
