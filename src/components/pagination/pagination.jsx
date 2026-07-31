import { useAppContext } from "../../../context/context";
import { useGetData } from "../../../Hooks/useGetData";
import { api } from "../../../api/RealEstate";

export default function Pagination() {
  const { totalPages, isLoading, page } = useGetData(api);

  const { goToPage, prevPage } = useAppContext();

  function nextPage() {
    // console.log({
    //   page,
    //   totalPages,
    //   pageType: typeof page,
    //   totalPagesType: typeof totalPages,
    // });
    const canAdvance = totalPages > 1 && Number(page) < totalPages;
    if (canAdvance) goToPage(Number(page) + 1);
    // console.log(canAdvance);
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      {!isLoading && (
        <div className="flex items-center gap-2 justify-center mt-6">
          <button
            onClick={prevPage}
            disabled={Number(page) === 1}
            className={`px-3 py-1 border rounded disabled:opacity-40 cursor-pointer disabled:cursor-default`}
          >
            Prev
          </button>

          {pages?.map((p) => (
            <button
              key={p}
              onClick={() => goToPage(p)}
              className={`px-3 py-1 border rounded cursor-pointer ${
                p === Number(page) && "bg-black text-white"
              }`}
            >
              {p}
            </button>
          ))}

          <button
            onClick={nextPage}
            disabled={Number(page) === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-40 cursor-pointer disabled:cursor-default"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
