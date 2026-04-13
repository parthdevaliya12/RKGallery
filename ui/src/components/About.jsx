import { Sparkles, Heart, Image, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate()
    const gallery = () =>{
        navigate("/")        
    }
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] text-white">
      {/* 🌫️ Glow Effects */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-100px] right-0 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl"></div>

      {/* ✨ Floating Icons */}
      <Sparkles
        className="absolute top-20 left-10 text-purple-300 opacity-20 animate-pulse"
        size={30}
      />
      <Heart
        className="absolute bottom-20 left-16 text-pink-300 opacity-20 animate-bounce"
        size={26}
      />
      <Image
        className="absolute top-32 right-20 text-blue-300 opacity-20 animate-pulse"
        size={28}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* 🌸 Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              This Gallery
            </span>
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A spiritual journey through divine art, celebrating the eternal love
            of Radha Krishna with beauty, peace, and devotion.
          </p>
        </div>

        {/* 🔥 Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 🖼️ Left Side (Image Section) */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 blur-2xl opacity-20 group-hover:opacity-40 transition"></div>

            <img
              src="https://www.iskconpune.com/wp-content/uploads/2023/01/evolve-pune1-2048x2048.jpg"
              alt="Radha Krishna"
              className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover border border-white/10"
            />
          </div>

          {/* 📜 Right Side (Text Content) */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Star className="text-pink-400 mt-1" />
              <p className="text-gray-300">
                This gallery is a collection of divine visuals that reflect the
                eternal bond of Radha and Krishna, symbolizing pure love and
                spiritual connection.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Sparkles className="text-purple-400 mt-1" />
              <p className="text-gray-300">
                Every image is carefully curated to create a peaceful and
                immersive experience that connects art with devotion.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Heart className="text-pink-400 mt-1" />
              <p className="text-gray-300">
                Designed with modern aesthetics and smooth animations, this
                gallery blends spirituality with technology beautifully.
              </p>
            </div>

            {/* 🌟 Highlight Box */}
            <div className="mt-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Our Mission
              </h3>
              <p className="text-gray-300 text-sm">
                To provide a calm, divine, and visually rich experience that
                brings positivity, devotion, and peace into your daily life.
              </p>
            </div>
          </div>
        </div>

        {/* 🚀 Bottom CTA */}
        <div className="text-center mt-16">
          <button onClick={gallery} className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white font-semibold shadow-lg hover:scale-105 transition">
            🌸 Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
