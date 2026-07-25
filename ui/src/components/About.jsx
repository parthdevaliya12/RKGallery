import { Sparkles, Heart, Star, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-slate-950 text-slate-200 min-h-screen">
      {/* 🌫️ Glow Effects */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 🌸 Heading */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-slate-100">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-yellow-600 italic font-light">
              The Journey
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A spiritual odyssey through divine art, celebrating the eternal love of Radha Krishna with beauty, peace, and devotion.
          </p>
        </motion.div>

        {/* 🔥 Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 🖼️ Left Side (Image Section) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group w-full h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
            <img
              src="https://www.iskconpune.com/wp-content/uploads/2023/01/evolve-pune1-2048x2048.jpg"
              alt="Radha Krishna Divine"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                <h3 className="text-xl font-serif font-semibold text-amber-400 mb-2">Our Mission</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  To provide a calm, divine, and visually rich experience that brings positivity and peace into your daily life.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 📜 Right Side (Text Content) */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="flex gap-5 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-amber-500/50 transition-colors shadow-lg">
                <Star className="text-amber-400" size={20} />
              </div>
              <div>
                <h4 className="text-xl font-serif font-medium text-slate-100 mb-2">Divine Collection</h4>
                <p className="text-slate-400 leading-relaxed">
                  This gallery is a collection of visuals reflecting the eternal bond of Radha and Krishna, symbolizing pure love and spiritual connection.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-5 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-teal-500/50 transition-colors shadow-lg">
                <Compass className="text-teal-400" size={20} />
              </div>
              <div>
                <h4 className="text-xl font-serif font-medium text-slate-100 mb-2">Curated Experience</h4>
                <p className="text-slate-400 leading-relaxed">
                  Every image is carefully selected to create a peaceful and immersive environment that connects art seamlessly with deep devotion.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-5 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-pink-500/50 transition-colors shadow-lg">
                <Heart className="text-pink-400" size={20} />
              </div>
              <div>
                <h4 className="text-xl font-serif font-medium text-slate-100 mb-2">Modern Devotion</h4>
                <p className="text-slate-400 leading-relaxed">
                  Designed with cutting-edge aesthetics and smooth interactions, this gallery blends ancient spirituality with modern web technology beautifully.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-6">
              <Link to="/#gallery" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 font-medium hover:bg-amber-500 hover:text-slate-950 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300">
                Explore The Gallery
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
