import Header from "../components/Header/Header";
import Sidebar from "../components/SideBar/SideBar";
import SearchBar from "../components/SearchBar/SearchBar";
import PropertyGrid from "../components/PropertyGrid/PropertyGrid";
import Pagination from "../components/pagination/pagination";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchData } from "@/Redux/slices/RealEstate/thunk";
import { useEffect } from "react";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const bedrooms = searchParams.get("bedrooms") || "";
  const maxPrice = searchParams.get("maxPrice");
  const minPrice = searchParams.get("minPrice");
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 12;
  const keyword = searchParams.get("keyword") || "";

  const dispatch = useDispatch();
  useEffect(() => {
    // add ternary operator for query
    const data = dispatch(
      fetchData(
        `?limit=${limit}&page=${page || 1}&bedrooms=${bedrooms}&miniPrice=${minPrice || ""}&maxPrice=${maxPrice || ""}&keyword=${keyword}`,
      ),
    );
    // console.log("Data: ", data);
    // const test = dispatch(fetchData("test"));
    // console.log("Test: ", test);
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
