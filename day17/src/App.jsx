import React, { useState } from "react";
import FAQitem from "./component/FAQitem";

const App = () => {
  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building UI.",
    },
    {
      question: "What is useState?",
      answer: "useState is a React hook to manage state.",
    },
    {
      question: "Why use components?",
      answer: "Components help reuse UI and organize code.",
    },
  ];
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        padding: "40px",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center" }}>FAQ SECTION</h1>
      <div style={{ maxWidth: "500px", margin: "30px auto" }}>
        {faqs.map((faq, index) => (
          <FAQitem key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
};

export default App;
