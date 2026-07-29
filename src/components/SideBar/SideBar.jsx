import PriceFilter from "../PriceFilter/PriceFilter";
import FacilitiesFilter from "../FacilitiesFilter/FacilitiesFilter";
import { useAppContext } from "../../../context/context";
import { X } from "lucide-react";

export default function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();

  return (
    <aside
      className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}  fixed inset-y-0 left-0 z-50 w-full sm:w-72
          transform bg-white transition-transform duration-300 ease-in-out
          md:static md:z-auto md:w-64 md:translate-x-0 sm:block col-span-3 rounded-xl shadow p-6 space-y-8 h-fit`}
    >
      <div className="flex w-full justify-between">
        <h2 className="font-bold text-xl">Filters</h2>
        <button
          className="cursor-pointer sm:hidden"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          <X />
        </button>
      </div>

      <PriceFilter />

      <FacilitiesFilter />
    </aside>
  );
}
