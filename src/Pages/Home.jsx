import Header from "../components/Header/Header";
import Sidebar from "../components/SideBar/SideBar";
import SearchBar from "../components/SearchBar/SearchBar";
import PropertyGrid from "../components/PropertyGrid/PropertyGrid";
import Pagination from "../components/pagination/pagination";
// import useUpdateData from "../../Hooks/useUpdateData";
// import useDeleteData from "../../Hooks/useDeleteData";
// import useInsertData from "../../Hooks/useInsertData";

export default function Home() {
  // const { res } = useInsertData();
  // console.log(res);
  // console.log(res?.data);
  // const { res } = useDeleteData();
  // console.log(res);
  // console.log(res?.data);
  // const { res } = useUpdateData(215);
  // console.log(res);
  // console.log(res?.data);

  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-8xl mx-auto p-8">
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
