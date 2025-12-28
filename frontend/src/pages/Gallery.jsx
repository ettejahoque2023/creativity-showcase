import { useEffect, useState } from "react";
import MasonryGrid from "../components/artwork/MasonryGrid";
import "../styles/gallery.css";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;


const Gallery = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        // backend: GET /api/artworks/home
        const res = await fetch(`${BASE_URL}/api/artworks/home`);
        const data = await res.json();
        setArtworks(data);
      } catch (err) {
        console.error("Failed to load artworks", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  if (loading) {
    return <p className="gallery-loading">Loading artworks...</p>;
  }

  return (
    <main className="gallery-page">
      <h2 className="gallery-title">Explore Artworks</h2>
      <MasonryGrid artworks={artworks} />
    </main>
  );
};

export default Gallery;
