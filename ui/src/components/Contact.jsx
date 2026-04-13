import { Sparkles, Heart, Mail, Phone, MapPin } from "lucide-react";
import toast from "react-hot-toast";


export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "476eb1bc-ef7c-4abf-8ca9-466ce89bdc95"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      toast.error(" Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] text-white">
      {/* 🌫️ Glow Effects */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-100px] right-0 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl"></div>

      {/* ✨ Icons */}
      <Sparkles
        className="absolute top-20 left-10 text-purple-300 opacity-20 animate-pulse"
        size={30}
      />
      <Heart
        className="absolute bottom-20 right-16 text-pink-300 opacity-20 animate-bounce"
        size={26}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Us
            </span>
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Have questions, feedback, or want to connect? We would love to hear
            from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-pink-400 mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-300 text-sm">
                  devparth63@gmail.com
                </p>
              </div>
            </div>

           
            <div className="flex items-start gap-4">
              <MapPin className="text-pink-400 mt-1" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-300 text-sm">
                  Gandhinagar, Gujarat, India
                </p>
              </div>
            </div>

            <div className="mt-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                We’re Here for You
              </h3>
              <p className="text-gray-300 text-sm">
                Feel free to contact us anytime. We usually reply within 24
                hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl">
            <form onSubmit={onSubmit} className="space-y-5">
              {/* Hidden subject */}
              <input type="hidden" name="subject" value="New Contact Message" />

              {/* Name */}
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              {/* Message */}
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 font-semibold shadow-lg hover:scale-105 transition"
              >
                 Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
