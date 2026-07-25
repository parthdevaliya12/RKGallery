import { Link } from "react-router-dom";
import logo from "/logo.png";

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-slate-950 text-slate-300 overflow-hidden border-t border-white/5">
      {/* 🌈 Subtle Background glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom,rgba(251,191,36,0.15),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3 group inline-block">
            <img src={logo} alt="RK Logo" className="h-12 w-12 drop-shadow-md group-hover:scale-105 transition-transform" />
            <h2 className="text-2xl font-serif font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
              RK<span className="text-amber-500 font-light italic">Gallery</span>
            </h2>
          </Link>

          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            A spiritual journey through divine art. Explore beauty, devotion, and eternal love in one place.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-serif font-semibold mb-6 text-slate-100">
            Quick Links
          </h3>

          <ul className="space-y-4 text-sm text-slate-400">
            {["Home", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-amber-400 transition-colors flex items-center gap-3 group w-fit"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-400 transition-colors" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Minimal */}
        <div>
          <h3 className="text-lg font-serif font-semibold mb-6 text-slate-100">
            Get in Touch
          </h3>

          <p className="text-sm text-slate-400 mb-4">
            Feel the divine presence. Have suggestions or want to connect?
          </p>

          <a href="mailto:parthdevaliya.official@gmail.com" className="inline-block px-5 py-3 rounded-lg bg-white/5 border border-white/5 hover:border-amber-400/30 hover:bg-amber-500/10 transition-all text-sm text-slate-200">
            📩 parthdevaliya.official@gmail.com
          </a>

          <div className="mt-6">
             <Link
              to="/contact"
              className="inline-block px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-medium text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/5 py-6 text-center text-xs text-slate-500 tracking-wide">
        © {new Date().getFullYear()} RKGallery | Crafted with Devotion by Parth Devaliya
      </div>
    </footer>
  );
}
