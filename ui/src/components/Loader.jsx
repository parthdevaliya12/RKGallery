export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0f172a] z-[999]">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-14 h-14 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <h2 className="text-white text-lg font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Loading Divine Gallery...
        </h2>
      </div>
    </div>
  );
}
