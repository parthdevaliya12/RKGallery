import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* 🌫️ Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/10 rounded-[100%] blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center"
      >
        {/* Top Badge */}
        <motion.div variants={itemVariants} className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-amber-500/20 text-amber-200 text-sm tracking-widest uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(251,191,36,0.1)]">
          <Sparkles size={16} className="text-amber-400" />
          <span>Experience The Divine</span>
        </motion.div>

        {/* 🌸 Heading */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight tracking-tight text-slate-100 mb-6 drop-shadow-2xl">
          Eternal <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-yellow-600 italic font-light">Love</span> & 
          <br /> Devotion
        </motion.h1>

        {/* 🪷 Subtitle */}
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
          Step into a serene visual journey celebrating the timeless, pure bond of Radha and Krishna through breathtaking curated art.
        </motion.p>

        {/* 🌟 CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
          <a href="#gallery" className="relative group overflow-hidden px-8 py-4 rounded-full bg-amber-500 text-slate-950 font-semibold shadow-[0_0_40px_rgba(251,191,36,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(251,191,36,0.5)]">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Gallery
            </span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a href="/about" className="px-8 py-4 rounded-full border border-slate-700 bg-slate-900/50 text-slate-300 hover:bg-slate-800 hover:text-white backdrop-blur-md transition-all duration-300 hover:border-slate-500">
            Our Story
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
