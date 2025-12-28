import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import ProtectedRoute from "./components/common/ProtectedRoute";
import "./styles/App.css";
// Pages
import Landing from "./pages/Landing";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Upload from "./pages/Upload";
import Profile from "./pages/Profile";
import ArtworkDetails from "./pages/ArtworkDetails";
import Footer from "./components/common/Footer";
const App = () => {
  return (
    <Router>
      {/* Common Navbar */}
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 🔐 Protected Routes */}
        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <Upload />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/artwork/:id" element={<ArtworkDetails />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
