import { useNavigate } from "react-router-dom";
import logo from "/logo.png";

export default function Footer() {
  const navigate = useNavigate();
  const contact = () => {
    navigate("/contact");
  };
  return (
    <footer className="relative mt-20 text-white overflow-hidden">
      {/* 🌈 Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#1e1b4b] to-[#0f172a]" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.4),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                <img src={logo} alt="RK Logo" className="h-10 w-10" />
          </h2>

          <p className="text-sm text-gray-300 mt-3 leading-relaxed">
           
            Explore beauty, devotion, and creativity in one place.
          </p>

          {/* Social dots */}
          <div className="flex gap-3 mt-5">
            <span className="w-2.5 h-2.5 rounded-full bg-pink-400 shadow-[0_0_10px_#ec4899]" />
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_10px_#6366f1]" />
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white/90">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            {["Home", "About", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer transition flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:scale-125 transition" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white/90">
            Get in Touch
          </h3>

          <p className="text-sm text-gray-300">
            Have suggestions or want collaboration?
          </p>

          <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            <p className="text-sm text-gray-200">📩 devparth63@gmail.com</p>
          </div>

          {/* Button */}
          <button
            onClick={contact}
            className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white text-sm shadow-lg hover:scale-105 transition"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 py-5 text-center text-sm text-gray-400">
        © 2026 RK | By Parth Devaliya |{" "}
      </div>
    </footer>
  );
}
