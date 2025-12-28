import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "../../styles/sidebar.css";

const Sidebar = ({ open, onClose }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    onClose();
    navigate("/");
  };

  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}> Menu <i className="fa-solid fa-xmark"></i></button>
        
      <Link to="/" onClick={onClose}>Home</Link>
      <Link to="/gallery" onClick={onClose}>Gallery</Link>

      {user && (
        <>
          <Link to="/profile" onClick={onClose}>Profile</Link>
          <Link to="/upload" onClick={onClose}>Upload Artwork</Link>

          {/* 🔥 LOGOUT */}
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}

      {!user && (
  <Link to="/login" onClick={onClose} className="lgbtn">Login</Link>
)}

    </div>
  );
};

export default Sidebar;
