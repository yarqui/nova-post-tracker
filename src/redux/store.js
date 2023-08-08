import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { departmentsAndCitiesSlice } from "./departments/departmentsSlice";
import { historySlice } from "./history/historySlice";
import { parcelSlice } from "./parcel/parcelSlice";
import { tabsSlice } from "./tabs/tabsSlice";
import storage from "redux-persist/lib/storage";

const historyPersistConfig = {
  key: "history",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
  reducer: {
    departments: departmentsAndCitiesSlice.reducer,
    history: persistReducer(historyPersistConfig, historySlice.reducer),
    parcel: parcelSlice.reducer,
    tabs: tabsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
  devTools: process.env.NODE_ENV === "development", //eslint-disable-line
});

export const persistor = persistStore(store);
