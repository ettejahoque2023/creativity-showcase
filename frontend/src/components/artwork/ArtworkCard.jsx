import { Link } from "react-router-dom";
import "../../styles/gallery.css"
const ArtworkCard = ({ art }) => {
  return (
    <div className="art-card">
      <Link to={`/artwork/${art._id}`} className="art-link">
        <img
          src={art.imageUrl}
          alt={art.title}
          loading="lazy"
        />

        {/* OVERLAY */}
        <div className="overlay">
          <h4>{art.title}</h4>
          <p>by {art.user?.username || art.user?.name || "Unknown"}</p>
        </div>
      </Link>
    </div>
  );
};

export default ArtworkCard;
