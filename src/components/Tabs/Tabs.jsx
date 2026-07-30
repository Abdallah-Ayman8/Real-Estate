import { useAppContext } from "../../../context/context";

export default function Tabs() {
  const { setIsSidebarOpen } = useAppContext();

  return (
    <div className="flex gap-8 border-b pb-4">
      <button className="text-cyan-500 border-b-2 border-cyan-500 pb-2">
        Rent
      </button>

      <button className="text-gray-400">Sale</button>

      <button
        className="md:hidden text-gray-400 cursor-pointer"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        Filters
      </button>
    </div>
  );
}
