import createRequestSaga from "../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as postAPI from "../lib/api/posts";
import { read_post } from "../slices/viewerSlice";
const readPostSaga = createRequestSaga(read_post.type, postAPI.readPost);
export default function* readSaga() {
  yield takeLatest(read_post.type, readPostSaga);
}
