import { createSlice } from "@reduxjs/toolkit";
import {
  handlePending,
  handleRejected,
  isPendingAction,
  isRejectedAction,
} from "../common/common";
import { fetchDepartments } from "./operations";

const initialDepState = {
  isLoading: false,
  error: null,
  items: [],
};

export const departmentsSlice = createSlice({
  name: "departments",
  initialState: initialDepState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartments.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected);
  },
});
