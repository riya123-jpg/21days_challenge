import { Outlet, NavLink } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen text-white relative overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#1a0b2e] to-black" />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-500/20 blur-[120px]" />

      {/* Sidebar */}
      <aside className="w-64 z-10 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col justify-between">
        {/* Logo */}
        <div>
          <h2 className="text-xl font-bold mb-10 flex items-center gap-2">
            Creator Studio
          </h2>

          {/* Nav */}
          <nav className="space-y-2">
            {[
              { name: "Dashboard", path: "/" },
              { name: "Content", path: "/content" },
              { name: "Create", path: "/create" },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                {/* Dot indicator */}
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom user section */}
        <div className="mt-10 border-t border-white/10 pt-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center font-bold">
            R
          </div>
          <div>
            <p className="text-sm font-semibold">Riya</p>
            <p className="text-xs text-gray-400">Creator</p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 z-10 p-8 lg:p-10">
        {/* Content container */}
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
