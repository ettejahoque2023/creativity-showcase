import API from "./api";

export const loginAPI = (data) =>
  API.post("/api/auth/login", data);

export const signupAPI = (data) =>
  API.post("/api/auth/signup", data);
