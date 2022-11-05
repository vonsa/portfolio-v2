import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_HOST;

// Check how to generate types from backend and type this
export const getPosts = (sort?: string) => {
  return axios.get(`${BASE_URL}/get`, { params: { sort } }); // something like sort=createdAt,asc
};

export const getPostById = (id: string, fields?: string[]) => {
  return axios.get(`${BASE_URL}/get/${id}`, {
    params: { fields: fields?.join(",") },
  });
};

export const savePost = (post: any) => {
  return axios.post(`${BASE_URL}/create`, { ...post });
};

export const deletePost = (id: any) => {
  return axios.post(`${BASE_URL}/delete/${id}`);
};
