import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  MIN_PRICE: 500,
  DEFAULT_MAX_PRICE: 5000,
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 5,
  isLoading: false,
  data: null,
  error: null,
  totalPages: 0,
};

const listingsSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {
    fetchStart(state) {
      state.isLoading = true;
    },
    fetchSuccess: {
      prepare(data, totalPages) {
        return { payload: { data, totalPages } };
      },
      reducer(state, action) {
        state.isLoading = false;
        state.data = action.payload.data;
        state.totalPages = action.payload.totalPages;
      },
    },
    fetchError: {
      prepare(error) {
        return { payload: { error } };
      },
      reducer(state, action) {
        state.isLoading = false;
        console.log(action.payload.error.message);
      },
    },
  },
});

export const { fetchStart, fetchSuccess, fetchError } = listingsSlice.actions;

export default listingsSlice.reducer;
