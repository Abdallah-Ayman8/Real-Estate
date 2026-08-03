import { fetchError, fetchStart, fetchSuccess } from "@/slicer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { api } from "../api/RealEstate";

export function useGetData() {
  const dispatch = useDispatch();

  const { data, isLoading, totalPages } = useSelector(
    (state) => state.listings,
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const bedrooms = searchParams.get("bedrooms");
  const maxPrice = searchParams.get("maxPrice") || 2000;
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 8;
  const keyword = searchParams.get("keyword") || "";

  // Axios
  useEffect(() => {
    async function fetchEstate(api) {
      dispatch(fetchStart());
      const apiKey = import.meta.env.VITE_API_KEY;
      try {
        const params = new URLSearchParams();
        if (bedrooms) params.set("bedrooms", bedrooms);
        params.append("price[]", 500);
        params.append("price[]", maxPrice);
        params.set("page", page);
        params.set("limit", limit);
        if (keyword) params.set("keyword", keyword);

        const res = await api?.get(`/?${params}`, {
          headers: {
            Accept: "application/json",
            "x-api-key": apiKey,
            "Accept-Language": "en",
            platform: "web",
            "app-version": "1.1",
            "X-Currency": "EGP",
          },
        });
        const totalPages = res?.data?.meta?.last_page;
        const data = res?.data?.data;
        dispatch(fetchSuccess(data, totalPages));
      } catch (error) {
        dispatch(fetchError(error));
      }
    }
    fetchEstate(api);
  }, [bedrooms, keyword, limit, page, maxPrice, dispatch]);

  return { data, isLoading, totalPages, page };
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
