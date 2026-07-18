import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function useGetData() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const bedrooms = searchParams.get("bedrooms");
  const maxPrice = searchParams.get("maxPrice") || 2000;
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 5;
  const keyword = searchParams.get("keyword") || "";

  function updateParams(updates, { resetPage = true }) {
    const params = new URLSearchParams(updates);

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

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      setIsLoading(true);
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const params = new URLSearchParams();
        if (bedrooms) params.set("bedrooms", bedrooms);
        params.append("price[]", 500);
        params.append("price[]", maxPrice);
        params.set("page", page);
        params.set("limit", limit);
        if (keyword) params.set("keyword", keyword);

        const res = await fetch(
          `https://backend-dev.yozya.com/api/v1/mobile/real-estates?${params?.toString()}`,
          {
            method: "GET",
            signal: controller.signal,
            headers: {
              Accept: "application/json",
              "x-api-key": apiKey,
              "Accept-Language": "en",
              platform: "web",
              "app-version": "1.1",
              "X-Currency": "EGP",
            },
          },
        );

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
    fetchData();
    return () => controller.abort();
  }, [bedrooms, keyword, limit, page, maxPrice]);

  return { data, isLoading };
}
