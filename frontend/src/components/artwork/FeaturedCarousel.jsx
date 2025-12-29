import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const FALLBACK_IMAGE =
  "data:image/svg+xml;utf8," +
  `<svg xmlns='http://www.w3.org/2000/svg' width='900' height='420'>
     <rect width='100%' height='100%' fill='%23e5e7eb'/>
     <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
       font-size='28' fill='%236b7280' font-family='Arial'>
       No Image Available
     </text>
   </svg>`;

const FeaturedCarousel = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getImageUrl = (art) => {
    if (!art || !art.imageUrl) return FALLBACK_IMAGE;
    return art.imageUrl; // Cloudinary URL
  };

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/artworks`);
        setArtworks(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Failed to load artworks", err);
        setArtworks([]);
      } finally {
        setLoading(false);
      }
    };
    fetchArtworks();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (!artworks.length)
    return <p style={{ textAlign: "center" }}>No artworks found</p>;

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3000"   // ✅ AUTO SLIDE (3s)
    >
      <div className="carousel-inner">
        {artworks.map((art, index) => (
          <div
            key={art._id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            {/* IMAGE */}
            <img
  src={getImageUrl(art)}
  className="d-block w-100 carousel-img"
  alt={art.title}
  onClick={() => navigate(`/artwork/${art._id}`)}
/>

            {/* OVERLAY */}
            <div className="carousel-overlay">
              <h4>{art.title}</h4>
              <p>by {art.user?.username || art.user?.name || "Unknown"}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
};

export default FeaturedCarousel;
