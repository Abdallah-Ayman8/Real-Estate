import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../../../Hooks/useGetData";
import { useInsertData } from "../../../../Hooks/useInsertData";
import { useUpdateData } from "../../../../Hooks/useUpdateData";
import { useDeleteData } from "../../../../Hooks/useDeleteData";

export const fetchData = createAsyncThunk(
  "data/fetching",
  async (query: string, { rejectWithValue }) => {
    const url = query ? `mobile/real-estates/${query}` : "mobile/real-estates";
    try {
      const response = await useGetData(url);
      return response;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

export const postData = createAsyncThunk(
  "data/post",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await useInsertData({
        url: "mobile/real-estates",
        data,
      });
      const res = response?.data;
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updateData = createAsyncThunk(
  "data/update",
  async ({ id, data }: { id: string; data: string[] }, { rejectWithValue }) => {
    try {
      const response = await useUpdateData({
        url: `mobile/real-estates/${id}`,
        data,
      });
      const info = response?.data;
      return info;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  },
);

export const deleteData = createAsyncThunk(
  "data/delete",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const response: any = await useDeleteData({
        url: "mobile/real-estates",
        id,
      });
      const data = response?.data;
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.message || error?.message);
    }
  },
);
