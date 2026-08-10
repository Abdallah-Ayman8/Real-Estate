import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../../api/RealEstate";
import { useGetData } from "../../../../Hooks/useGetData";

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
  async (url, { rejectWithValue }) => {
    try {
      const response = await useGetData(url);
      const data = response?.data;
      const totalPages = response.totalPages;
      return { data, totalPages };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const postData = createAsyncThunk("data/post", async () => {
  try {
    ("");
  } catch (error) {
    console.log(error);
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
