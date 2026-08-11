import { api } from "../api/RealEstate";

export const useInsertData = async ({ url, data }) => {
  try {
    const apiKey = import.meta.env.VITE_API_KEY;
    const headers = {
      Accept: "application/json",
      "x-api-key": apiKey,
      "Accept-Language": "en",
      platform: "web",
      "app-version": "1.1",
      "X-Currency": "EGP",
    };

    // const res = await test?.post(`/${url || ""}`, data, { headers });
    const res = await api?.post(`/${url || ""}`, data, { headers });

    return res.data;
  } catch (error) {
    console.error(`The Error: ${error}`);
  }
};
