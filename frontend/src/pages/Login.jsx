import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/auth.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      login(data.user, data.token);
      navigate("/gallery");
    } catch {
      alert("Server error. Try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
