import { useEffect, useState } from "react";
import { api } from "../api/RealEstate";

export default function useInsertData() {
  const [res, setRes] = useState(null);
  useEffect(() => {
    async function PostData() {
      const apiKey = import.meta.env.VITE_API_KEY;
      try {
        const res = await api.post(
          "/",
          {
            name: "Abdallah",
            email: "Abdallah@Example.com",
          },
          {
            headers: {
              "Content-Type": "application/json",
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
          throw new Error(`request failed with status ${res.status}`);

        setRes(res);
      } catch (error) {
        console.error(`The Error: ${error}`);
      }
    }
    PostData();
  }, []);
  return { res };
}
