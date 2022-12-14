import { call, put } from "redux-saga/effects";
// import {startLoading, finishLoading} from '../modules/loading'

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_success`;
  const FAILURE = `${type}_failure`;
  return function* (action) {
    // yield put(startLoading(type));
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
        error: true,
      });
    }
    // yield put(finishLoading(type));
  };
}
