import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center"> Create Post</h1>

      <div
        className="bg-[#0f0f14] border border-white/10 p-6 rounded-2xl 
      shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-4"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title..."
          className="w-full bg-black/40 border border-white/10 px-4 py-3 rounded-lg 
          focus:ring-2 focus:ring-purple-500 outline-none"
        />

        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Write description..."
          className="w-full bg-black/40 border border-white/10 px-4 py-3 rounded-lg 
          focus:ring-2 focus:ring-purple-500 outline-none"
        />

        <button
          className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 
        py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          🚀 Publish Post
        </button>
      </div>
    </div>
  );
};

export default Create;
