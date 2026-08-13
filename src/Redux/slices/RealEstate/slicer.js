import { createSlice } from "@reduxjs/toolkit";

const initialListingsState = {
  isLoading: false,
  totalPages: 0,
  isSidebarOpen: false,
  isLoggedIn: false,
  resend: true,
  showDropDownMenuState: false,
};

const listingsSlice = createSlice({
  name: "listings",
  initialState: initialListingsState,
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
    activateResendBtn(state) {
      state.resend = false;
    },
    disableResendBtn(state) {
      state.resend = true;
    },
    showDropDownMenu(state) {
      state.showDropDownMenuState = true;
    },
    hideDropDownMenu(state) {
      state.showDropDownMenuState = false;
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
  activateResendBtn,
  disableResendBtn,
  showDropDownMenu,
  hideDropDownMenu,
} = listingsSlice.actions;

export default listingsSlice.reducer;
