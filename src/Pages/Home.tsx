import Header from "../components/Header/Header";
import Sidebar from "../components/SideBar/SideBar";
import SearchBar from "../components/SearchBar/SearchBar";
import PropertyGrid from "../components/PropertyGrid/PropertyGrid";
import Pagination from "../components/pagination/pagination";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "@/Redux/slices/RealEstate/thunk";
import { useEffect } from "react";
import { useAppDispatch } from "@/Redux/store/hooks";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const bedrooms: string | null = searchParams.get("bedrooms") || null;
  const maxPrice: string | null = searchParams.get("maxPrice") || null;
  const minPrice: string | null = searchParams.get("minPrice") || null;
  const page: string = searchParams.get("page") || "1";
  const limit: string = searchParams.get("limit") || "12";
  const keyword: string | null = searchParams.get("keyword") || null;

  const dispatch = useAppDispatch();
  useEffect(() => {
    // add ternary operator for query: Done
    const data = dispatch(
      fetchData(
        `?limit=${limit}&page=${page}` +
          (bedrooms ? `&bedrooms=${bedrooms}` : "") +
          (minPrice ? `&minPrice=${minPrice}` : "") +
          (maxPrice ? `&maxPrice=${maxPrice}` : "") +
          (keyword ? `&keyword=${keyword}` : ""),
      ),
    );
  }, [bedrooms, page, limit, keyword, minPrice, maxPrice, dispatch]);

  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="w-full mx-auto p-8">
        <Header />

        <div className="flex flex-row items-start mt-12 gap-8">
          <Sidebar />

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
