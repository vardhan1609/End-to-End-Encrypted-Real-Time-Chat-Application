import { NavLink } from "react-router-dom";
import { Home, Info, MessageCircle, Users, User, LogIn } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: Info },
  { name: "Join Chat", path: "/join_room", icon: MessageCircle },
  { name: "Create Group", path: "/create_room", icon: Users }
];


export default function Navbar() {
  return (
    <nav className="w-full bg-slate-900 border-b border-white/10 px-8 py-4">
      <div className="flex flex-wrap items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold text-white tracking-wide"
        >
          🔐 SecureChat
        </NavLink>

        {/* Menu */}
        <div className="flex flex-wrap items-center gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200
                  ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
