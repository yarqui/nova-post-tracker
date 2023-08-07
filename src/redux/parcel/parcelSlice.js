import { createSlice } from "@reduxjs/toolkit";
import {
  handleFulfilled,
  handlePending,
  handleRejected,
  isFulfilledAction,
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
  reducers: {
    clearParcelInfo: (state) => {
      state.info = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchParcelInfo.fulfilled, (state, { payload }) => {
        state.info = payload;
      })
      .addMatcher(isFulfilledAction, handleFulfilled)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected);
  },
});

export const { clearParcelInfo } = parcelSlice.actions;
