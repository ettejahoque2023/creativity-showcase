import API from "./api";

// 🔹 Get logged-in user's artworks
export const getMyArtworks = async () => {
  const response = await API.get("/api/artworks/my");
  return response.data;
};
