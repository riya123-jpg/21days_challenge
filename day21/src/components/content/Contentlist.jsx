import { contentData } from "../../data/mockdata";
import ContentCard from "./Contentcard";

import { useState } from "react";

const ContentList = () => {
  const [filter, setFilter] = useState("All");

  const filteredData = contentData.filter((item) => {
    if (filter === "All") return true;
    return item.status?.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex gap-3">
        {["All", "Published", "Draft"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1 rounded-full text-sm transition ${
              filter === f
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Cards */}
      {filteredData.map((item) => (
        <ContentCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ContentList;
