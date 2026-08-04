import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  totalPages: 0,
  isSidebarOpen: false,
};

const listingsSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {
    openSidebar(state) {
      state.isSidebarOpen = true;
    },
    closeSidebar(state) {
      state.isSidebarOpen = false;
    },
  },
});

export const {
  fetchStart,
  fetchSuccess,
  fetchError,
  openSidebar,
  closeSidebar,
} = listingsSlice.actions;

export default listingsSlice.reducer;
