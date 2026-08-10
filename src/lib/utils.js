import { clsx } from "clsx";
import { useSearchParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function useUpdateParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  function updateParam(updates, { resetPage = true } = {}) {
    const params = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value === "" || value === null || value === undefined) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    if (resetPage) params.set("page", String(1));
    setSearchParams(params);
  }
  return updateParam;
}

export { cn, useUpdateParams };
