import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./Card";

export default function Gallery() {
  const [selected, setSelected] = useState(null);

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

  // Download logic
  const handleDownload = (src) => {
    const a = document.createElement("a");
    a.href = src;
    a.download = "divine_rk.jpg";
    a.click();
  };

  return (
    <section id="gallery" className="py-24 px-4 max-w-7xl mx-auto bg-slate-950">
      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-100">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-yellow-600 italic font-light">Divine Collection</span>
        </h2>
        <div className="w-24 h-1 bg-amber-500/50 mx-auto rounded-full mb-4"></div>
        <p className="text-slate-400 max-w-xl mx-auto tracking-wide">
          Immerse yourself in our beautifully curated selection of spiritual artwork.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {currentImages.map((img, index) => (
            <Card
              key={`${currentPage}-${index}`} // ensures remount for animation on page change
              image={img}
              onPreview={() => setSelected(img)}
              onDownload={() => handleDownload(img)}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* ✅ Premium Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-20">
          <div className="flex items-center gap-2 px-6 py-4 bg-slate-900/80 border border-slate-800 backdrop-blur-xl rounded-full shadow-2xl">
            {/* Prev */}
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 disabled:opacity-30 hover:bg-amber-500/20 hover:text-amber-400 transition-all font-serif text-lg"
            >
              ‹
            </button>

            <div className="w-px h-6 bg-slate-700 mx-2"></div>

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
                    <span className="px-2 text-slate-600 font-serif tracking-widest">...</span>
                  )}

                  <button
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-all font-medium ${
                      currentPage === page
                        ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(251,191,36,0.4)] scale-110"
                        : "text-slate-400 hover:text-slate-100 hover:bg-slate-800"
                    }`}
                  >
                    {page}
                  </button>
                </span>
              ))}

            <div className="w-px h-6 bg-slate-700 mx-2"></div>

            {/* Next */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 disabled:opacity-30 hover:bg-amber-500/20 hover:text-amber-400 transition-all font-serif text-lg"
            >
              ›
            </button>
          </div>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-md flex items-center justify-center z-[100]"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-lg border border-white/10 transition-colors"
            >
              ✕
            </button>

            <motion.img 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selected} 
              className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl object-contain border border-white/10" 
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
