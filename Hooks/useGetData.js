import { api } from "../api/RealEstate";

export const useGetData = async (url, params) => {
  // Axios

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

    const res = await api.get(url, {
      headers,
      params: { ...params },
    });
    const totalPages = res?.data?.meta?.total;
    const data = res?.data?.data;
    return { data, totalPages };
  } catch (error) {
    return error.response?.data?.message || error.message;
  }
};
