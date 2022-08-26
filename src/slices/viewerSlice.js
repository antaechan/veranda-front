import { createSlice } from "@reduxjs/toolkit";

const name = "viewer";

const initialState = {
  post: null,
  error: null,
};

const reducers = {
  read_post: (state, action) => {
    state.post = null;
    state.error = null;
  },
  read_post_success: (state, { payload: post }) => {
    state.post = post;
  },
  read_post_failure: (state, { payload: error }) => {
    state.error = error;
  },
  unload_post: (state, action) => {
    state = initialState;
  },
};

export const viewerSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const { read_post, read_post_success, read_post_failure, unload_post } =
  viewerSlice.actions;

export default viewerSlice;
