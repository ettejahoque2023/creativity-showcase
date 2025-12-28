import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";
import { AuthContext } from "../../context/AuthContext";
import "../../styles/navbar.css";
import UserAvatar from "./UserAvatar.jsx";
const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setSidebarOpen(false);
    navigate("/");
  };

  // 🔥 Avatar source fix (local + cloud)
  const avatarSrc = user?.avatar
    ? user.avatar.startsWith("http")
      ? user.avatar
      : `${BASE_URL}${user.avatar}`
    : "https://i.pravatar.cc/40";

  return (
    <>
      <nav className="navbar">
        {/* LEFT */}
        <div className="nav-left">
          <i
            className="fa-solid fa-plus"
            title="Upload Artwork"
            onClick={() => navigate("/upload")}
          ></i>
        </div>

        {/* CENTER */}
        <div className="nav-center">
          <Link to="/gallery" className="brand">
            ArtGalaxy
          </Link>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <ThemeToggle />

          {user ? (
  <div onClick={() => navigate("/profile")}>
    <UserAvatar
      avatar={avatarSrc} 
      name={user.name}
      size={40}
    />
  </div>
) : (
  <button
    className="login-btn btn solid"
    onClick={() => navigate("/login")}
  >
    Login
  </button>
)}
          <i
            className="fa-solid fa-bars"
            onClick={() => setSidebarOpen(true)}
          ></i>
        </div>
      </nav>

      {/* SIDEBAR */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
        <Link to="/" onClick={() => setSidebarOpen(false)}>
          Home
        </Link>

        <Link to="/gallery" onClick={() => setSidebarOpen(false)}>
          Gallery
        </Link>

        {user && (
          <>
            <Link to="/profile" onClick={() => setSidebarOpen(false)}>
              Your Profile
            </Link>

            <Link to="/upload" onClick={() => setSidebarOpen(false)}>
              Upload Your Work
            </Link>
          </>
        )}

        {!user ? (
          <>
            <Link to="/login" onClick={() => setSidebarOpen(false)}>
              Login
            </Link>
            <Link to="/signup" onClick={() => setSidebarOpen(false)}>
              Sign Up
            </Link>
          </>
        ) : (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </Sidebar>
    </>
  );
};

export default Navbar;
