import * as BlogModel from "../../../api/models/Blog.model";

type GetPostsPath = BlogModel.paths["/get"]["get"];
export type GetPostsResponse =
  GetPostsPath["responses"]["200"]["content"]["application/json"];
export type GetPostsParams = GetPostsPath["parameters"];

type GetPostByIdPath = BlogModel.paths["/get/{id}"]["get"];
export type GetPostByIdResponse =
  GetPostByIdPath["responses"]["200"]["content"]["application/json"];
export type GetPostByIdParams = GetPostByIdPath["parameters"];

type CreatePostPath = BlogModel.paths["/create"]["post"];
export type CreatePostResponse = CreatePostPath["responses"]["201" | "400"]; // TODO: add response type in backend
export type CreatePostParams =
  CreatePostPath["requestBody"]["content"]["application/json"];

type DeletePostPath = BlogModel.paths["/delete/{id}"]["delete"];
export type DeletePostResponse = DeletePostPath["responses"]["200"];
export type DeletePostParams = DeletePostPath["parameters"]["path"];

type UpdatePostPath = BlogModel.paths["/update/{id}"]["put"];
export type UpdatePostResponse = UpdatePostPath["responses"]["200" | "400"]; // TODO: add response type in backend
export type UpdatePostParams =
  UpdatePostPath["requestBody"]["content"]["application/json"];
