import { createSlice } from "@reduxjs/toolkit";
import {
  handleFulfilled,
  handlePending,
  handleRejected,
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from "../common/common";
import { fetchCities, fetchDepartments } from "./operations";

const initialDepState = {
  isLoading: false,
  error: null,
  departments: [],
  cities: [],
};

// TODO: rename departments to deps&Cities (files, variables, etc)
export const departmentsAndCitiesSlice = createSlice({
  name: "departments",
  initialState: initialDepState,
  reducers: {
    clearCities: (state) => {
      state.cities = [];
      state.departments = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartments.fulfilled, (state, { payload }) => {
        state.departments = payload;
        state.cities = [];
      })
      .addCase(fetchCities.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cities = payload;
        state.departments = [];
      })
      .addMatcher(isFulfilledAction, handleFulfilled)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected);
  },
});

export const { clearCities } = departmentsAndCitiesSlice.actions;
