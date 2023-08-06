import { createSlice } from "@reduxjs/toolkit";
import {
  handlePending,
  handleRejected,
  isPendingAction,
  isRejectedAction,
} from "../common/common";
import { fetchParcelInfo } from "./operations";

const initialParcelState = {
  isLoading: false,
  error: null,
  info: {},
};

export const parcelSlice = createSlice({
  name: "parcel",
  initialState: initialParcelState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchParcelInfo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.info = payload;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected);
  },
});
