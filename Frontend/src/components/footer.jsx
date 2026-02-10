import { Github, Linkedin, Mail, ShieldCheck, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Lock className="text-indigo-500" size={20} /> SecureChat
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            SecureChat is an end-to-end encrypted real-time messaging platform
            designed for private and group communication with maximum privacy
            and security.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/join" className="hover:text-white">Join Chat</a></li>
            <li><a href="/create" className="hover:text-white">Create Group</a></li>
            <li><a href="/profile" className="hover:text-white">Profile</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Connect</h3>
          <div className="flex items-center gap-4">
            <a href="https://github.com/vardhan1609/End-to-End-Encrypted-Real-Time-Chat-Application" target="_blank" className="hover:text-white transition">
              <Github />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-white transition">
              <Linkedin />
            </a>
            <a href="mailto:vardhan" className="hover:text-white transition">
              <Mail />
            </a>
          </div>
          <div className="flex items-center gap-2 mt-4 text-sm">
            <ShieldCheck className="text-green-500" size={16} />
            <span>End-to-End Encrypted</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} SecureChat. All rights reserved.
      </div>
    </footer>
  );
}
