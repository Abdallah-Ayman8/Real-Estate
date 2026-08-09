import { openSidebar } from "@/Redux/slices/RealEstate/slicer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Tabs() {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center border-b pb-4">
      <div className="flex gap-8 justify-center items-center">
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
      <button type="button" className="text-gray-400 cursor-pointer">
        <Link to={"/form"}>Register</Link>
      </button>
    </div>
  );
}
