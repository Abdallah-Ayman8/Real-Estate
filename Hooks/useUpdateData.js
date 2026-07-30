import { useEffect, useState } from "react";
import { api } from "../api/RealEstate";

export default function useUpdateData(id) {
  const [res, setRes] = useState(null);
  useEffect(() => {
    async function UpdateData(id) {
      const apiKey = import.meta.env.VITE_API_KEY;
      try {
        const res = await api?.put(
          `/${id}`,
          {
            name: "Abdallah",
            email: "Abdalla@example.com",
          },
          {
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

        if (!res.ok)
          throw new Error(`request failed with status: ${res.status}`);

        setRes(res);
        console.log(res);
      } catch (error) {
        console.error(`The Error: ${error}`);
      }
    }
    UpdateData(id);
  }, [id]);
  return { res };
}
