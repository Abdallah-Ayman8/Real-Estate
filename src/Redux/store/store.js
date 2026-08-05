import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "@/Redux/slices/RealEstate/slicer";
import dataReducer from "../slices/RealEstate/thunk";

const store = configureStore({
  reducer: {
    listings: listingsReducer,
    data: dataReducer,
  },
});

export default store;
