import axios from "axios";

// Check how to generate types from backend and type this
export const getPosts = (sort?: string) => {
  return axios.get("http://localhost:8080/get", { params: { sort } }); // something like sort=createdAt,asc
};

export const getPostById = (id: string, fields?: string[]) => {
  return axios.get(`http://localhost:8080/get/${id}`, {
    params: { fields: fields?.join(",") },
  });
};

export const savePost = (post: any) => {
  return axios.post("http://localhost:8080/create", { ...post });
};

export const deletePost = (id: any) => {
  return axios.post(`http://localhost:8080/delete/${id}`);
};
