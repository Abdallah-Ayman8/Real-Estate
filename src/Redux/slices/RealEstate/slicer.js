import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  totalPages: 0,
  isSidebarOpen: false,
  isLoggedIn: false,
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
    logIn(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
    },
  },
});

export const {
  fetchStart,
  fetchSuccess,
  fetchError,
  openSidebar,
  closeSidebar,
  logIn,
  logOut,
} = listingsSlice.actions;

export default listingsSlice.reducer;
