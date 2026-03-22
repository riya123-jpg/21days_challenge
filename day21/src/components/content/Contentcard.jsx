const ContentCard = ({ item }) => {
  const engagement = ((item.likes / item.views) * 100 || 0).toFixed(1);

  return (
    <div
      className="group relative bg-[#0f0f14] border border-white/10 
    p-5 rounded-2xl flex justify-between items-center 
    hover:border-purple-500/30 hover:shadow-lg 
    hover:shadow-purple-500/10 transition-all duration-300"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
      bg-gradient-to-r from-purple-500/5 to-pink-500/5 transition"
      />

      <div className="relative z-10">
        <h3 className="text-lg font-semibold group-hover:text-purple-400">
          {item.title}
        </h3>

        <p className="text-sm text-gray-400">
          👁 {item.views} • ❤️ {item.likes}
        </p>

        <p className="text-xs text-purple-400 mt-1">
          Engagement: {engagement}%
        </p>

        <p className="text-xs text-gray-500 mt-1">Posted 2 days ago</p>
      </div>

      <div className="relative z-10 flex flex-col items-end gap-2">
        <span
          className={`text-xs px-3 py-1 rounded-full ${
            item.status === "Published"
              ? "bg-green-500/20 text-green-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {item.status}
        </span>

        <button className="text-xs text-purple-400 hover:underline">
          View →
        </button>
      </div>
    </div>
  );
};

export default ContentCard;
