import { Sparkles, Mail, MapPin, Send } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    
    // UI Feedback for loading
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Sending...';
    btn.disabled = true;

    try {
      const formData = new FormData(form);
      formData.append("access_key", "476eb1bc-ef7c-4abf-8ca9-466ce89bdc95"); 

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully. We will connect soon!");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
       toast.error("Network error. Please check your connection.");
    } finally {
       btn.innerHTML = originalText;
       btn.disabled = false;
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative pt-32 pb-24 min-h-screen overflow-hidden bg-slate-950 text-slate-200">
      {/* 🌫️ Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-100">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-600 italic font-light">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have questions, feedback, or want to collaborate? We would love to hear from you. Drop a message below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Info Panel (2 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8 lg:pr-8"
          >
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 shadow-xl backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-semibold text-amber-400 mb-6">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                     <Mail size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email Address</p>
                    <a href="mailto:parthdevaliya.official@gmail.com" className="text-slate-200 hover:text-amber-400 transition-colors font-medium">
                      parthdevaliya.official@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                     <MapPin size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Location</p>
                    <p className="text-slate-200 font-medium">Gandhinagar, Gujarat, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                   <Sparkles size={16} className="text-amber-400" />
                   <h4 className="font-medium text-slate-200">We are responsive</h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We aim to respond to all inquiries within 24 hours during business days. Your connection matters to us.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Panel (3 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            {/* Form Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            
            <form onSubmit={onSubmit} className="space-y-6 relative z-10">
              <input type="hidden" name="subject" value="New Contact from RKGallery" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Your Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="How can we help you today?"
                  className="w-full px-5 py-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-amber-500 text-slate-950 font-semibold shadow-[0_0_20px_rgba(251,191,36,0.2)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:bg-amber-400 transition-all flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
