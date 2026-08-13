import { useUpdateParams } from "@/lib/utils";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export default function Pagination() {
  const { totalPages, isLoading } = useSelector((state) => state.data);

  const updateParams = useUpdateParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;

  function goToPage(nextPageNumber) {
    updateParams({ page: Number(nextPageNumber) }, { resetPage: false });
  }

  function prevPage() {
    if (page > 1) goToPage(Number(page) - 1);
  }

  function nextPage() {
    // console.log({
    //   page,
    //   totalPages,
    //   pageType: typeof page,
    //   totalPagesType: typeof totalPages,
    // });
    const canAdvance = totalPages > 1 && Number(page) < totalPages / 8;
    if (canAdvance) goToPage(Number(page) + 1);
    // console.log(canAdvance);
  }

  const pages = Array.from(
    { length: Math.ceil(totalPages / 16) },
    (_, i) => i + 1,
  );

  return (
    <>
      {!isLoading && (
        <div className="flex items-center flex-wrap gap-2 justify-center mt-6">
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
            disabled={Number(page) === Math.ceil(totalPages / 16)}
            className="px-3 py-1 border rounded disabled:opacity-40 cursor-pointer disabled:cursor-default"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
