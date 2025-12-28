import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    username:"",
    email: "",
    password: "",
    artisticType: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      login(data.user, data.token);
      navigate("/");
    } catch (err) {
      alert("Server error. Try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
      <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "420px" }}>
        <h3 className="text-center mb-4 fw-bold">Create Account</h3>

        <form onSubmit={handleSubmit}>
          {/* NAME */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </div>
          {/* username */}
          <div className="mb-3">
  <label className="form-label">Username</label>
  <input
    type="text"
    name="username"
    className="form-control"
    placeholder="Enter username"
    onChange={handleChange}
    required
  />
</div>


          {/* EMAIL */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={handleChange}
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
          </div>

          {/* ARTISTIC TYPE */}
          <div className="mb-4">
            <label className="form-label">Artistic Type</label>
            <select
              name="artisticType"
              className="form-select"
              value={form.artisticType}
              onChange={handleChange}
              required
            >
              <option value="">Select Artistic Type</option>
              <option value="Painter">Painter</option>
              <option value="Photographer">Photographer</option>
              <option value="Illustrator">Illustrator</option>
              <option value="Digital Artist">Digital Artist</option>
              <option value="Digital Creator">Digital Creator</option>
              <option value="Author">Author</option>
              <option value="Writer">Writer</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* SUBMIT */}
          <button type="submit" className="btn btn-dark w-100">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <Link to="/login" className="text-decoration-none fw-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
