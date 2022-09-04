import { createSlice } from "@reduxjs/toolkit";

const name = "editor";

const initialState = {
  title: "",
  body: "",
  thumbnail: "",
  post: null,
  postError: null,
};

const reducers = {
  initialize: (state, action) => initialState,
  changeField: (state, action) => {
    const { key, value } = action.payload;
    return {
      ...state,
      [key]: value,
    };
  },
  write_post: (state, action) => {
    state.post = null;
    state.postError = null;
  },
  write_post_success: (state, { payload: post }) => {
    state.post = post;
  },
  write_post_failure: (state, { payload: postError }) => {
    state.postError = postError;
  },
};

export const editorSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  initialize,
  changeField,
  write_post,
  write_post_success,
  write_post_failure,
} = editorSlice.actions;

export default editorSlice;
