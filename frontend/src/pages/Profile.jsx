import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/profile.css";
import UserAvatar from "../components/common/UserAvatar.jsx";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;


const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchMyArtworks = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${BASE_URL}/api/artworks/my`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (res.ok) setArtworks(data);
      } catch (err) {
        console.error("FETCH ARTWORK ERROR:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMyArtworks();
  }, [user, navigate]);
 const avatarSrc = user?.avatar
    ? user.avatar.startsWith("http")
      ? user.avatar
      : `${BASE_URL}${user.avatar}`
    : "https://i.pravatar.cc/120";
  return (
    <div className="container profile-container">
      {/* ===== PROFILE HEADER ===== */}
      <div className="profile-header">
        <UserAvatar
          avatar={avatarSrc} 
          name={user?.name}
          size={120}
        />
        <div className="profile-info">
          <div className="profile-name-row">
            <h3>{user?.name}</h3>

            <div className="profile-actions">
              <button
                className="btn btn-outline-dark btn-sm"
                onClick={() => navigate("")}
              >
                Edit Profile
              </button>

              <button
                className="btn btn-dark btn-sm"
                onClick={() => navigate("/upload")}
              >
                Upload Artwork
              </button>
            </div>
          </div>

          {/* POSTS COUNT */}
          <div className="profile-stats">
            <div>
              <strong>{artworks.length}</strong>
              <span>posts</span>
            </div>
          </div>

          <p className="profile-type">{user?.artisticType}</p>

          <p className="profile-bio">
            {user?.bio && user.bio.trim() !== ""
              ? user.bio
              : `Passionate ${user?.artisticType?.toLowerCase()} sharing creativity with the world ✨`}
          </p>
        </div>
      </div>
<hr></hr>
      {/* ===== ARTWORK GRID ===== */}
      <h4 className="profile-artworks-title">My Artworks</h4>

      {loading ? (
        <p className="profile-loading">Loading artworks...</p>
      ) : artworks.length === 0 ? (
        <p className="profile-empty">
          You haven’t uploaded any artworks yet.
        </p>
      ) : (
        <div className="row g-3">
          {artworks.map((art) => (
            <div key={art._id} className="col-md-4">
              <div
                className="profile-art-card"
                onClick={() => navigate(`/artwork/${art._id}`)}
              >
                <img src={art.imageUrl} alt={art.title} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
