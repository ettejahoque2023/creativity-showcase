import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ArtworkDetails = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/artworks/${id}`);
        const data = await res.json();

        if (res.ok) setArtwork(data);
        else console.error(data.message);
      } catch (err) {
        console.error("Failed to fetch artwork", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtwork();
  }, [id]);

  if (loading) return <p className="container mt-5">Loading artwork...</p>;
  if (!artwork) return <p className="container mt-5">Artwork not found.</p>;

  return (
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col-md-7">
          <img
            src={artwork.imageUrl}
            alt={artwork.title}
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-5">
          <h3 className="fw-bold">{artwork.title}</h3>
          <p className="text-muted">{artwork.category}</p>
          <p>{artwork.description}</p>

          <div className="d-flex align-items-center gap-3 mt-4">
            <img
              src={artwork.user?.avatar || "https://i.pravatar.cc/60"}
              alt="artist"
              className="rounded-circle"
              width="50"
            />
            <div>
              <strong>{artwork.user?.name}</strong>
              <p className="mb-0 text-muted small">
                {artwork.user?.artisticType}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetails;
