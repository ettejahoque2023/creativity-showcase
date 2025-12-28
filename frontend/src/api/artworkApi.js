import API from "./api";

export const uploadArtworkAPI = (formData) =>
  API.post("/api/artworks/upload", formData);

export const getFeaturedArtworksAPI = () =>
  API.get("/api/artworks");

export const getAllArtworksAPI = () =>
  API.get("/api/artworks/home");

export const getUserArtworksAPI = () =>
  API.get("/api/artworks/my");

export const deleteArtworkAPI = (id) =>
  API.delete(`/api/artworks/${id}`);
