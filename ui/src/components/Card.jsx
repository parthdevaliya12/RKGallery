import { motion } from "framer-motion";
import { Eye, Download } from "lucide-react";

export default function Card({ image, onPreview, onDownload }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative group overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/5 bg-slate-900 aspect-[3/4]"
    >
      {/* Image */}
      <img
        src={image}
        loading="lazy"
        onClick={onPreview}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
        alt="Gallery Item"
      />

      {/* Desktop Overlay - Premium Frosted Glass */}
      <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 flex-col justify-end p-6 transition-all duration-500 backdrop-blur-[2px]">
        
        <div className="flex items-center justify-between translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="text-left">
            <p className="text-amber-400 font-serif text-sm italic mb-1">Divine Art</p>
            <p className="text-slate-200 font-medium tracking-wide">Radha Krishna</p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={(e) => { e.stopPropagation(); onPreview(); }}
              className="p-3 rounded-full bg-white/10 hover:bg-amber-500 text-white hover:text-slate-950 backdrop-blur-md transition-all duration-300 border border-white/20 hover:border-amber-500 shadow-lg"
              title="Preview"
            >
              <Eye size={18} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); onDownload(); }}
              className="p-3 rounded-full bg-white/10 hover:bg-teal-500 text-white hover:text-slate-950 backdrop-blur-md transition-all duration-300 border border-white/20 hover:border-teal-500 shadow-lg"
              title="Download"
            >
              <Download size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Download - Minimal & Clean */}
      <button
        onClick={(e) => { e.stopPropagation(); onDownload(); }}
        className="md:hidden absolute bottom-3 right-3 p-2.5 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-400 border border-amber-500/30 shadow-lg"
      >
        <Download size={16} />
      </button>
    </motion.div>
  );
}
