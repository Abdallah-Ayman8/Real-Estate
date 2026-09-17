import { createSlice } from "@reduxjs/toolkit";
import { type initialListingsState } from "@/Redux/SlicerTypes";

const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
const storedUser: string | null = localStorage.getItem("userData");

const initialListingsState: initialListingsState = {
  isLoading: false,
  totalPages: 0,
  isSidebarOpen: false,
  isLoggedIn: storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false,
  user: storedUser ? JSON.parse(storedUser) : null,
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
    logIn(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userData");
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
