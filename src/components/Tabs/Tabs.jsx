import { openSidebar } from "@/slicer";
import { useDispatch } from "react-redux";

export default function Tabs() {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-8 border-b pb-4">
      <button className="text-cyan-500 border-b-2 border-cyan-500 pb-2">
        Rent
      </button>

      <button className="text-gray-400">Sale</button>

      <button
        className="md:hidden text-gray-400 cursor-pointer"
        onClick={() => dispatch(openSidebar())}
      >
        Filters
      </button>
    </div>
  );
}
