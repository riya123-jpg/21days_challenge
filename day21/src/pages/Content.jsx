import ContentList from "../components/content/Contentlist";
// import ContentList from "../components/content/ContentList";
import { useState } from "react";

const Content = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold">Content Library</h1>

        <input
          type="text"
          placeholder="Search content..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
        />
      </div>
      {/* List */}
      <ContentList search={search} />
    </div>
  );
};

export default Content;
