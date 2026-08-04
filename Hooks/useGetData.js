import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "@/features/dataSlicer";

export function useGetData() {
  const dispatch = useDispatch();

  const { data, isLoading } = useSelector((state) => state.data);
  const [searchParams, setSearchParams] = useSearchParams();

  const bedrooms = searchParams.get("bedrooms") || 4;
  const maxPrice = searchParams.get("maxPrice") || 2000;
  const minPrice = searchParams.get("minPrice") || 800;
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 8;
  const keyword = searchParams.get("keyword") || "";

  function UpdateParams(updates, { resetPage = true } = {}) {
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

  // Axios
  useEffect(() => {
    const promise = dispatch(
      fetchData({ bedrooms, keyword, maxPrice, minPrice, limit, page }),
    );
  }, [dispatch, bedrooms, keyword, maxPrice, minPrice, limit, page]);

  return { data, isLoading, UpdateParams, page };
}

// Fetch
/*  useEffect(() => {
  async function fetchData() {
    setIsLoading(true);
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = import.meta.env.VITE_URL;
      const params = new URLSearchParams();
      if (bedrooms) params.set("bedrooms", bedrooms);
      params.append("price[]", 500);
      params.append("price[]", maxPrice);
      params.set("page", page);
      params.set("limit", limit);
      if (keyword) params.set("keyword", keyword);

      const res = await fetch(`${url}?${params?.toString()}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "x-api-key": apiKey,
          "Accept-Language": "en",
          platform: "web",
          "app-version": "1.1",
          "X-Currency": "EGP",
        },
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      const result = await res.json();

      setData(result);
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error("Error fetching listings:", err);
      }
    } finally {
      setIsLoading(false);
    }
  }
  // fetchData();
}, [bedrooms, keyword, limit, page, maxPrice]);
*/
