const Header = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold">Creator Dashboard</h1>
        <p className="text-gray-400 text-sm">Welcome back 👋</p>
      </div>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search..."
          className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
        />

        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center font-bold">
          R
        </div>
      </div>
    </div>
  );
};

export default Header;
