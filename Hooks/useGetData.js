import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function useGetData(api) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const bedrooms = searchParams.get("bedrooms");
  const maxPrice = searchParams.get("maxPrice") || 2000;
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 8;
  const keyword = searchParams.get("keyword") || "";

  // Axios
  useEffect(() => {
    async function fetchEstate(api) {
      setIsLoading(true);
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
        console.log(res);
        const totalPages = res?.data?.meta?.last_page;
        setTotalPages(totalPages);
        const data = res?.data?.data;
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchEstate(api);
  }, [bedrooms, keyword, limit, page, maxPrice, api]);

  // Fetch
  useEffect(() => {
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

  return { data, isLoading, totalPages, page };
}
