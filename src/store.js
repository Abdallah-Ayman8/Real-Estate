import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "@/slicer";
import dataReducer from "./features/dataSlicer";

const store = configureStore({
  reducer: {
    listings: listingsReducer,
    data: dataReducer,
  },
});

export default store;
