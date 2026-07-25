import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* 🌸 Logo */}
        <NavLink to="/" className="flex items-center gap-3 group relative z-50">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-400 blur-md opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
            <img src={logo} alt="RK Logo" className="h-11 w-11 relative z-10 drop-shadow-lg" />
          </div>
          <span className="text-xl font-serif font-bold text-slate-100 tracking-wide hidden sm:block group-hover:text-amber-400 transition-colors">
            RK<span className="text-amber-500 font-light italic">Gallery</span>
          </span>
        </NavLink>

        {/* 💻 Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-medium">
          {["Home", "Gallery", "About", "Contact"].map((item) => {
            const path = item === "Home" ? "/" : item === "Gallery" ? "/#gallery" : `/${item.toLowerCase()}`;
            const isGalleryHash = item === "Gallery";
            
            return isGalleryHash ? (
              <a
                key={item}
                href={path}
                className="text-slate-300 hover:text-amber-400 tracking-wide transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ) : (
              <NavLink
                key={item}
                to={path}
                className={({ isActive }) =>
                  `tracking-wide transition-colors relative group ${
                    isActive ? "text-amber-400 font-semibold" : "text-slate-300 hover:text-amber-400"
                  }`
                }
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            );
          })}
        </div>

        {/* 📱 Mobile Controls */}
        <div className="md:hidden flex items-center gap-3 relative z-50">
          <button
            onClick={() => setOpen(!open)}
            className="text-slate-200 p-2 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-colors border border-white/5"
          >
            {open ? <X size={24} className="text-amber-400" /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/5 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col px-8 py-8 gap-6 text-lg font-serif">
              {["Home", "Gallery", "About", "Contact"].map((item, i) => {
                 const path = item === "Home" ? "/" : item === "Gallery" ? "/#gallery" : `/${item.toLowerCase()}`;
                 const isGalleryHash = item === "Gallery";

                 return isGalleryHash ? (
                   <motion.a
                     key={item}
                     href={path}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className="text-slate-300 hover:text-amber-400 border-b border-white/5 pb-2"
                     onClick={() => setOpen(false)}
                   >
                     {item}
                   </motion.a>
                 ) : (
                   <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="border-b border-white/5 pb-2"
                   >
                     <NavLink
                       to={path}
                       className={({ isActive }) =>
                         `block w-full ${isActive ? "text-amber-400" : "text-slate-300 hover:text-amber-400"}`
                       }
                     >
                       {item}
                     </NavLink>
                   </motion.div>
                 );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
