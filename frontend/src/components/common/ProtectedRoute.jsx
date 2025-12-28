import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // Auth check হচ্ছে (page reload এর সময়)
  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;
  }

  // User logged in না
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // User logged in
  return children;
};

export default ProtectedRoute;
