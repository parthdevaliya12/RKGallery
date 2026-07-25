import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-950 z-[999]">
      <div className="flex flex-col items-center gap-8">
        {/* Sacred Geometry / Mandala inspired Loader */}
        <div className="relative flex items-center justify-center w-24 h-24">
          <motion.div
            className="absolute inset-0 border-2 border-amber-500/20 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-2 border-2 border-amber-400/40 rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.2, 0.8], rotate: 180 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-4 border-2 border-teal-500/60 rounded-full border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-6 bg-gradient-to-tr from-amber-300 to-amber-600 rounded-full blur-md"
            animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-xl md:text-2xl font-serif font-bold tracking-widest bg-gradient-to-r from-amber-200 via-amber-400 to-teal-400 bg-clip-text text-transparent uppercase drop-shadow-sm">
            Divine Vision
          </h2>
          <p className="text-slate-400 text-sm mt-2 tracking-wide">Awakening the Gallery...</p>
        </motion.div>
      </div>
    </div>
  );
}
