import axios from "axios";

// Check how to generate types from backend and type this
export const getPosts = () => {
  return axios.get("http://localhost:8080/get");
};

export const savePost = (post: any) => {
  return axios.post("http://localhost:8080/create", { post });
};

export const deletePost = (id: any) => {
  return axios.post(`http://localhost:8080/delete/${id}`);
};
