import { Link, useLocation } from "react-router-dom";
import { Home, Info, MessageCircle, Users, User } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: Info },
  { name: "Join Chat", path: "/join", icon: MessageCircle },
  { name: "Create Group", path: "/create", icon: Users },
  { name: "Profile", path: "/profile", icon: User },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="w-full bg-slate-900 border-b border-white/10 px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-white tracking-wide">
        🔐 SecureChat
      </Link>

      {/* Menu */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${
                active
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-white">☰</button>
      </div>
    </nav>
  );
}
