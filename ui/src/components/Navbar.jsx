import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const location = useLocation();

  // 🌗 Theme Apply
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#0f172a";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#f8fafc";
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 📜 Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔄 Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0f172a]/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 🌸 Logo */}
        <img src={logo} alt="RK Logo" className="h-10 w-10" />
        

        {/* 💻 Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-pink-400 font-semibold"
                : "text-gray-200 hover:text-pink-400 transition"
            }
          >
            Home
          </NavLink>

          {/* Gallery Scroll */}
          <a
            href="/contact"
            className="text-gray-200 hover:text-pink-400 transition"
          >
            Contact
          </a>

          {/* About */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-pink-400 font-semibold"
                : "text-gray-200 hover:text-pink-400 transition"
            }
          >
            About
          </NavLink>

          {/* 🌗 Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            {theme === "dark" ? (
              <Sun className="text-yellow-300" size={20} />
            ) : (
              <Moon className="text-indigo-500" size={20} />
            )}
          </button>
        </div>

        {/* 📱 Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-white/10"
          >
            {theme === "dark" ? (
              <Sun className="text-yellow-300" size={20} />
            ) : (
              <Moon className="text-indigo-500" size={20} />
            )}
          </button>

          {/* Menu Toggle */}
          <button onClick={() => setOpen(!open)} className="text-white">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      <div
        className={`md:hidden absolute w-full transition-all duration-500 overflow-hidden ${
          open
            ? "max-h-96 opacity-100 bg-[#0f172a]/95 backdrop-blur-xl"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-6 text-lg font-medium">
          {/* Home */}
          <NavLink to="/" className="text-white hover:text-pink-400">
            Home
          </NavLink>

          {/* Gallery */}
          <a href="/contact" className="text-white hover:text-pink-400">
            Contact
          </a>

          {/* About */}
          <NavLink to="/about" className="text-white hover:text-pink-400">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
