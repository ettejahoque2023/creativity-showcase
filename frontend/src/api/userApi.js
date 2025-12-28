import API from "./api";

export const updateProfileAPI = (formData) =>
  API.put("/api/auth/profile", formData);
