const StatCard = ({ title, value, index }) => {
  const gradients = [
    "from-pink-500 to-purple-500",
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-yellow-500",
  ];

  return (
    <div
      className="bg-[#0f0f14] border border-white/10 p-6 rounded-2xl 
    shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-purple-500/10 
    transition-all duration-300 hover:-translate-y-1"
    >
      <p className="text-gray-400 text-sm">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>

      <div
        className={`h-1 w-10 mt-4 bg-gradient-to-r ${gradients[index]} rounded-full`}
      />
    </div>
  );
};

export default StatCard;
