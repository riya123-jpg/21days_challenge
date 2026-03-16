import React from "react";
import { useState } from "react";

const App = () => {
  const memes = [
    {
      image: "https://i.imgflip.com/30b1gx.jpg",
      caption: "When your code works on the first try",
    },
    {
      image: "https://i.imgflip.com/1bij.jpg",
      caption: "Debugging be like...",
    },
    {
      image: "https://i.imgflip.com/26am.jpg",
      caption: "When you finally fix a bug",
    },
    {
      image: "https://i.imgflip.com/1otk96.jpg",
      caption: "When someone touches your code",
    },
  ];
  const [meme, setMeme] = useState({});

  function generate() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    setMeme(memes[randomIndex]);
  }
  return (
    <div className="box">
      {meme && (
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          {meme.image && (
            <img
              style={{ width: "250px", borderRadius: "8px" }}
              src={meme.image}
              width="300"
            />
          )}

          <p style={{ marginTop: "10px" }}>{meme.caption}</p>
        </div>
      )}
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",

          color: "white",
          cursor: "pointer",
        }}
        className="btn"
        onClick={generate}
      >
        Generate Meme
      </button>
    </div>
  );
};

export default App;
