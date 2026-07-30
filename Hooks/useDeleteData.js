import { useEffect, useState } from "react";
import { api } from "../api/RealEstate";

export default function useDeleteData(id) {
  const [res, setRes] = useState(null);

  useEffect(() => {
    async function DeleteRequest(id) {
      const apikey = import.meta.env.VITE_API_KEY;
      try {
        const res = await api.delete(`/${id}`, {
          headers: {
            Accept: "application/json",
            "x-api-key": apikey,
            "Accept-Language": "en",
            platform: "web",
            "app-version": "1.1",
            "X-Currency": "EGP",
          },
        });

        if (!res.ok)
          throw new Error(`Request failed with status: ${res.status}`);

        setRes(res);
      } catch (error) {
        console.error(`The Error: ${error}`);
      }
    }
    DeleteRequest(id);
  }, [id]);
  return { res };
}
