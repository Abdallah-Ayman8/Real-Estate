import { api } from "../api/BaseUrl";

type DeleteDataParams = {
  url: string;
  id: string;
};

export const useDeleteData = async ({ url, id }: DeleteDataParams) => {
  try {
    const apikey = import.meta.env.VITE_API_KEY;
    const headers = {
      Accept: "application/json",
      "x-api-key": apikey,
      "Accept-Language": "en",
      platform: "web",
      "app-version": "1.1",
      "X-Currency": "EGP",
    };
    const res = await api.delete(`${url}/${id}`, { headers });
    console.log(res);
    return res;
  } catch (error) {
    console.error(`The Error: ${error}`);
  }
};
