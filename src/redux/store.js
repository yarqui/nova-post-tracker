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
import { departmentsSlice } from "./departments/departmentsSlice";
// import storage from "redux-persist/lib/storage";

export const store = configureStore({
  reducer: { departments: departmentsSlice.reducer },
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
