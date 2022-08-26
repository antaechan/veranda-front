import { configureStore } from "@reduxjs/toolkit";

import menuBarSlice from "../slices/menuBarSlice";
import editorSlice from "../slices/editorSlice";
import viewerSlice from "../slices/viewerSlice";

import createSagaMiddleware from "redux-saga";
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import writeSaga from "../sagas/writeSaga";
import readSaga from "../sagas/readSaga";

export const rootReducer = combineReducers({
  menuBar: menuBarSlice.reducer,
  editor: editorSlice.reducer,
  viewer: viewerSlice.reducer,
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([writeSaga(), readSaga()]);
}
const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      sagaMiddleware,
    ],
  });
  sagaMiddleware.run(rootSaga);
  return store;
};

export default createStore;
