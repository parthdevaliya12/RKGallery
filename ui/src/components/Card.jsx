import { Eye, Download } from "lucide-react";

export default function Card({ image, onPreview, onDownload }) {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg">
      {/* Image */}
      <img
        src={image}
        loading="lazy"
        onClick={onPreview}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
      />

      {/* Desktop Overlay */}
      <div className="hidden md:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 justify-center items-center gap-4 transition">
        <button
          onClick={onPreview}
          className="p-3 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white shadow-lg"
        >
          <Eye size={20} />
        </button>

        <button
          onClick={onDownload}
          className="p-3 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white shadow-lg"
        >
          <Download size={20} />
        </button>
      </div>

      {/* Mobile Download */}
      <button
        onClick={onDownload}
        className="md:hidden absolute bottom-2 right-2 p-2 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white shadow"
      >
        <Download size={16} />
      </button>
    </div>
  );
}
