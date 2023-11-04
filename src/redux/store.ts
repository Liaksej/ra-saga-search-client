import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "@/redux/sagas";
import { searchSlice } from "@/redux/search/slices";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);
