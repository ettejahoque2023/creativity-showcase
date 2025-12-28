import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Upload = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("category", form.category);
      formData.append("tags", form.tags);
      formData.append("image", image);

      const token = localStorage.getItem("token");

      const res = await fetch(`${BASE_URL}/api/artworks/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // 🔐 JWT
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Upload failed");
        return;
      }

      alert("Artwork uploaded successfully!");
      navigate("/profile");
    } catch (err) {
      alert("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <div className="card shadow p-4">
        <h3 className="mb-4 text-center fw-bold">Upload Artwork</h3>

        <form onSubmit={handleSubmit}>
          {/* TITLE */}
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Artwork title"
              onChange={handleChange}
              required
            />
          </div>

          {/* DESCRIPTION */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="3"
              placeholder="Describe your artwork"
              onChange={handleChange}
            ></textarea>
          </div>

          

          {/* TAGS */}
          <div className="mb-3">
            <label className="form-label">Tags</label>
            <input
              type="text"
              name="tags"
              className="form-control"
              placeholder="e.g. abstract, nature, portrait"
              onChange={handleChange}
            />
          </div>

          {/* IMAGE */}
          <div className="mb-4">
            <label className="form-label">Upload Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-dark w-100"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload Artwork"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
