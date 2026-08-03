import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "@/slicer";

const store = configureStore({
  reducer: {
    listings: listingsReducer,
  },
});

export default store;
