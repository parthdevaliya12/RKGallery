import { useState, useEffect } from "react";
import Card from "./Card";

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 28;

  // ✅ LOAD IMAGES FROM src/assets/images (Vite)
  const modules = import.meta.glob("/src/asset/images/*.{jpg,jpeg,png}", {
    eager: true,
  });

  const images = Object.values(modules).map((mod) => mod.default);

  // Pagination logic
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = images.slice(startIndex, startIndex + itemsPerPage);

  // Scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-item");
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          setVisible((prev) => [...new Set([...prev, index])]);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  // Download
  const handleDownload = (src) => {
    const a = document.createElement("a");
    a.href = src;
    a.download = "image.jpg";
    a.click();
  };

  return (
    <section id="gallery" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Divine Gallery
        </h2>
        <p className="text-gray-400">Experience the beauty of Radha Krishna</p>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentImages.map((img, index) => (
          <div
            key={index}
            className={`fade-item transition duration-700 ${
              visible.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Card
              image={img}
              onPreview={() => setSelected(img)}
              onDownload={() => handleDownload(img)}
            />
          </div>
        ))}
      </div>

      {/* ✅ CLEAN PAGINATION */}
      <div className="flex justify-center mt-12">
        <div className="flex items-center gap-3 px-4 py-3 bg-black/40 backdrop-blur-md rounded-full shadow-lg">
          {/* Prev */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white disabled:opacity-30 hover:bg-white/20 transition"
          >
            ‹
          </button>

          {/* Pages */}
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              (page) =>
                page === 1 ||
                page === totalPages ||
                Math.abs(page - currentPage) <= 1,
            )
            .map((page, index, arr) => (
              <span key={page} className="flex items-center">
                {/* Dots */}
                {index > 0 && page - arr[index - 1] > 1 && (
                  <span className="px-2 text-gray-400">...</span>
                )}

                <button
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition ${
                    currentPage === page
                      ? "bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white shadow-lg scale-110"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {page}
                </button>
              </span>
            ))}

          {/* Next */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white disabled:opacity-30 hover:bg-white/20 transition"
          >
            ›
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <button
            onClick={() => setSelected(null)}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            ✕
          </button>

          <img src={selected} className="max-w-full max-h-[90%] rounded" />
        </div>
      )}
    </section>
  );
}
