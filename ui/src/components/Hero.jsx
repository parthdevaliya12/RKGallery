import { Sparkles, Heart, Image } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] text-white">
      {/* 🌫️ Glow Background Effect */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* ✨ Floating Icons */}
      <Sparkles
        className="absolute top-20 left-10 text-purple-300 opacity-30 animate-pulse"
        size={28}
      />
      <Heart
        className="absolute bottom-20 right-10 text-pink-300 opacity-30 animate-bounce"
        size={26}
      />
      <Image
        className="absolute top-32 right-20 text-blue-300 opacity-20 animate-pulse"
        size={30}
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* 🌸 Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-wide">
          Divine{" "}
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Radha Krishna
          </span>{" "}
          Gallery
        </h1>

        {/* 🪷 Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Experience the divine beauty and timeless love of Radha Krishna
          through a serene and spiritually inspired visual collection.
        </p>

        {/* 🌟 CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className=" px-7 py-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-purple-400/40 transition-all duration-300">
           Scroll to explore gallery
          </button>

          {/* <button className="px-7 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 backdrop-blur-md transition">
            ❤️ View Favorites
          </button> */}
        </div>
      </div>
    </section>
  );
}
