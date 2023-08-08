import { createSlice } from "@reduxjs/toolkit";
import TABS from "../../utils/tabs";

const initialTabsState = {
  currentTab: TABS.tracking,
};

export const tabsSlice = createSlice({
  name: "tabs",
  initialState: initialTabsState,
  reducers: {
    changeTab: (state, { payload }) => {
      state.currentTab = payload;
    },
  },
});

export const { changeTab } = tabsSlice.actions;
