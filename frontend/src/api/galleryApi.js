import API from "./api";

// 🔹 Get all artworks for gallery page
export const getGalleryArtworks = async () => {
  const response = await API.get("/api/artworks/home");
  return response.data;
};

// 🔹 Get single artwork details
export const getArtworkById = async (id) => {
  const response = await API.get(`/api/artworks/${id}`);
  return response.data;
};
