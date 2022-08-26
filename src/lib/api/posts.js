import client from "./client";

export const writePost = ({ title, body, thumbnail }) => {
  return client.post("/api/posts", { title, body, thumbnail });
};

export const readPost = (id) => client.get(`/api/posts/${id}`);
