import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../../api/RealEstate";

const initialState = {
  isLoading: false,
  data: null,
  totalPages: 0,
  error: null,
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

export default dataSlice.reducer;
