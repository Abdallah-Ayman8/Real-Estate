import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../../../Hooks/useGetData";
import { useInsertData } from "../../../../Hooks/useInsertData";
import { useUpdateData } from "../../../../Hooks/useUpdateData";
import { useDeleteData } from "../../../../Hooks/useDeleteData";

export const fetchData = createAsyncThunk(
  "data/fetching",
  async (query, { rejectWithValue }) => {
    const url = query ? `mobile/real-estates/${query}` : "mobile/real-estates";
    try {
      const response = await useGetData(url);
      const data = response?.data;
      const totalPages = response.totalPages;
      return { data, totalPages };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const postData = createAsyncThunk(
  "data/post",
  async ({ url, data }, { rejectWithValue }) => {
    try {
      const response = await useInsertData({ url, data });
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updateData = createAsyncThunk(
  "data/update",
  async ({ url, data }, { rejectWithValue }) => {
    try {
      const response = await useUpdateData({ url, data });
      // console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteData = createAsyncThunk(
  "data/delete",
  async ({ url, id }, { rejectWithValue }) => {
    try {
      const response = await useDeleteData({ url, id });

      console.log(response);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
