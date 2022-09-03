import createRequestSaga from "../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as postAPI from "../lib/api/posts";
import { write_post } from "../slices/editorSlice";

const writePostSaga = createRequestSaga(write_post.type, postAPI.writePost);
export default function* writeSaga() {
  yield takeLatest(write_post.type, writePostSaga);
}
