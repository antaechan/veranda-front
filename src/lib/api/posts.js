import client from "./client";

export const writePost = ({ title, body, thumbnail }) => {
  return client.post("/articles/insert", { title, body, thumbnail });
};

export const readPost = (id) => client.get(`/articles/viewarticle/${id}`);
