import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../../api/RealEstate";

const initialState = {
  isLoading: false,
  data: null,
  totalPages: 0,
  error: null,
  inserData: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const fetchData = createAsyncThunk(
  "data/fetching",
  async function ({ url, params }, { rejectWithValue }) {
    console.log(url);
    const apiKey = import.meta.env.VITE_API_KEY;
    try {
      const res = await api.get(`/${url || ""}?${params || ""}`, {
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
      return { data, totalPages };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

export const postData = createAsyncThunk("data/post", async ({ url, data }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  try {
    const res = await api.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": apiKey,
        "Accept-Language": "en",
        platform: "web",
        "app-version": "1.1",
        "X-Currency": "EGP",
      },
    });
    if (!res.ok) throw new Error(`request failed with status ${res.status}`);
    return res.data;
  } catch (error) {
    console.error(`The Error: ${error}`);
  }
});

export const updateData = createAsyncThunk(
  "data/update",
  async ({ url, data }) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    try {
      const res = await api?.patch(`/${url}`, data, {
        headers: {
          Accept: "application/json",
          "x-api-key": apiKey,
          "Accept-Language": "en",
          platform: "web",
          "app-version": "1.1",
          "X-Currency": "EGP",
        },
      });

      if (!res.ok) throw new Error(`request failed with status: ${res.status}`);
      console.log(res);
    } catch (error) {
      console.error(`The Error: ${error}`);
    }
  },
);

export const deleteData = createAsyncThunk(
  "data/delete",
  async ({ url, id }) => {
    const apikey = import.meta.env.VITE_API_KEY;
    try {
      const res = await api.delete(`${url}${id}`, {
        headers: {
          Accept: "application/json",
          "x-api-key": apikey,
          "Accept-Language": "en",
          platform: "web",
          "app-version": "1.1",
          "X-Currency": "EGP",
        },
      });

      if (!res.ok) throw new Error(`Request failed with status: ${res.status}`);
    } catch (error) {
      console.error(`The Error: ${error}`);
    }
  },
);

export default dataSlice.reducer;
