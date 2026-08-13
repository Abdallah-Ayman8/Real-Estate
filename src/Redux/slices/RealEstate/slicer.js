import { createSlice } from "@reduxjs/toolkit";

const initialListingsState = {
  isLoading: false,
  totalPages: 0,
  isSidebarOpen: false,
  isLoggedIn: false,
  resend: true,
  showPasswordToUser: false,
  showConfirmedPasswordToUser: false,
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
    showPassword(state) {
      state.showPasswordToUser = true;
    },
    hidePassword(state) {
      state.showPasswordToUser = false;
    },
    showConfirmedPassword(state) {
      state.showConfirmedPasswordToUser = true;
    },
    hideConfirmedPassword(state) {
      state.showConfirmedPasswordToUser = false;
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
  showPassword,
  hidePassword,
  showConfirmedPassword,
  hideConfirmedPassword,
} = listingsSlice.actions;

export default listingsSlice.reducer;
