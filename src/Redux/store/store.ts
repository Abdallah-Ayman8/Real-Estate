import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "@/Redux/slices/RealEstate/slicer";
import dataReducer from "../slices/RealEstate/dataSlicer";

const store = configureStore({
  reducer: {
    listings: listingsReducer,
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
