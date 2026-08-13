import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./thunk";

const initialDataState = {
  isLoading: false,
  data: null,
  totalPages: 0,
  error: null,
  inserData: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialDataState,
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

export default dataSlice.reducer;
