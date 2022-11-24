import axios from "axios";
import {
  CreatePostParams,
  CreatePostResponse,
  DeletePostResponse,
  GetPostByIdParams,
  GetPostByIdResponse,
  GetPostsResponse,
  GetPostsParams,
  UpdatePostParams,
  UpdatePostResponse,
} from "./posts.service.model";

const BASE_URL = process.env.REACT_APP_BACKEND_HOST;

export const getPosts = (query: GetPostsParams["query"] = {}) => {
  const { sort = "createdAt,desc", fields } = query || {};

  return axios.get<GetPostsResponse>(`${BASE_URL}/get`, {
    params: { sort, fields },
  });
};

export const getPostById = (
  id: string,
  params: GetPostByIdParams["query"] = {}
) => {
  const { fields } = params;

  return axios.get<GetPostByIdResponse>(`${BASE_URL}/get/${id}`, {
    params: { fields },
  });
};

export const updatePost = (id: string, post: UpdatePostParams) => {
  return axios.put<UpdatePostResponse>(`${BASE_URL}/update/${id}`, post);
};

export const createPost = (post: CreatePostParams) => {
  return axios.post<CreatePostResponse>(`${BASE_URL}/create`, { ...post });
};

export const deletePost = (id: string) => {
  return axios.delete<DeletePostResponse>(`${BASE_URL}/delete/${id}`);
};
