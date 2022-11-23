import * as BlogModel from "../api/models/Blog.model";

type LoginPath = BlogModel.paths["/login"]["post"];
export type LoginResponse =
  LoginPath["responses"]["200"]["content"]["application/json"];
export type LoginParams =
  LoginPath["requestBody"]["content"]["application/json"];
