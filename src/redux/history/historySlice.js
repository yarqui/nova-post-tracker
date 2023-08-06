import { createSlice } from "@reduxjs/toolkit";

const initialHistoryState = { items: [] };

export const historySlice = createSlice({
  name: "history",
  initialState: initialHistoryState,
  reducers: {
    addToHistory: (state, { payload }) => {
      const elQuantity = state.items?.length || 0;

      let updatedItems = state.items;

      if (elQuantity > 9) {
        updatedItems = state.items.slice(1);
      }

      return { ...state, items: [...updatedItems, +payload] };
    },
    clearHistory: (state) => {
      state.items = [];
    },
  },
});

export const { addToHistory, clearHistory } = historySlice.actions;
