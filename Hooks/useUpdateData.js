import { api, test } from "../api/BaseUrl";

export const useUpdateData = async ({ url, data }) => {
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
    // const res = await test?.patch(`/${url}`, data, { headers });
    const res = await api?.patch(`/${url}`, data, { headers });

    console.log(res);
    return res;
  } catch (error) {
    console.error(`The Error: ${error}`);
  }
};
