import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useGetData } from "../../../../Hooks/useGetData";
import { useInsertData } from "../../../../Hooks/useInsertData";
import { useUpdateData } from "../../../../Hooks/useUpdateData";
import { useDeleteData } from "../../../../Hooks/useDeleteData";

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

export const postData = createAsyncThunk(
  "data/post",
  async ({ url, data }, { rejectWithValue }) => {
    try {
      const response = await useInsertData({ url, data });
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updateData = createAsyncThunk(
  "data/update",
  async ({ url, data }, { rejectWithValue }) => {
    try {
      const response = await useUpdateData({ url, data });
      // console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteData = createAsyncThunk(
  "data/delete",
  async ({ url, id }, { rejectWithValue }) => {
    try {
      const response = await useDeleteData({ url, id });

      console.log(response);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export default dataSlice.reducer;
