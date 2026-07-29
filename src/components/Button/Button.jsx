export default function Button({ children }) {
  return (
    <button className="bg-cyan-500 text-white rounded-lg px-3 sm:px-6 py-1.5 sm:py-3 hover:bg-cyan-600 transition">
      {children}
    </button>
  );
}
