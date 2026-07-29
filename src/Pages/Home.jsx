import Header from "../components/Header/Header";
import Sidebar from "../components/SideBar/SideBar";
import SearchBar from "../components/SearchBar/SearchBar";
import PropertyGrid from "../components/PropertyGrid/PropertyGrid";
import { SidebarIcon } from "lucide-react";
import Pagination from "../components/pagination/pagination";
import { useAppContext } from "../../context/context";

export default function Home() {
  const { setIsSidebarOpen } = useAppContext();

  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-8xl mx-auto p-8">
        <Header />

        <div className="flex flex-row items-start mt-12 gap-8 relative">
          <Sidebar />
          <button
            className="sm:hidden absolute top-0 -left-7.5 cursor-pointer"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          >
            <SidebarIcon />
          </button>

          <div className="flex w-full flex-col flex-wrap">
            <SearchBar />

            <PropertyGrid />

            <Pagination />
          </div>
        </div>
      </div>
    </main>
  );
}
