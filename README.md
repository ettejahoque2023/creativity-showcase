# 🎨 ArtGalaxy – Creative Showcase Platform
ArtGalaxy is a full-stack MERN application that allows artists and creators to showcase their artwork, manage profiles, and explore a global gallery of creative works.  
The platform focuses on clean UI, secure authentication, and real-world production deployment.

## 🚀 Live Demo
- **Frontend (Static Site)**  
  👉 https://artgalaxyehq.onrender.com

- **Backend (API Server)**  
  👉 https://artgalaxy.onrender.com
  

## 🛠 Tech Stack

### Frontend
- React (Vite)
- React Router
- Context API (Authentication)
- CSS / Bootstrap /MaterialUi
- Fetch API / Axios
- Deployed on **Render (Static Site)**

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- Multer (File Uploads)
- Cloudinary / Local Upload Support
- CORS Configuration
- Deployed on **Render (Web Service)**


## ✨ Features

### 🔐 Authentication
- User Signup & Login
- JWT-based authentication
- Protected routes (Profile, Upload)
- Persistent login using localStorage

### 👤 User Profile
- User avatar with fallback support
- Bio and artistic type
- Profile statistics (number of artworks)
- Personal artwork gallery

### 🖼 Artwork Management
- Upload artwork with:
  - Title
  - Description
  - Tags
  - Image file
- Secure upload with authentication
- View personal artworks
- View artwork details

### 🌍 Gallery
- Public gallery of all artworks
- Responsive masonry/grid layout
- Artwork detail page with artist info

### 🎨 UI / UX
- Clean, modern UI
- Responsive navbar & sidebar
- Consistent avatar across Navbar & Profile

## 📁 Project Structure
<img width="590" height="673" alt="image" src="https://github.com/user-attachments/assets/0e2db193-e44b-4b43-8165-fae326f40429" />



## ⚙️ Environment Variables

### Backend (`Render Environment Variables`)
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Frontend (frontend/.env)
```
VITE_API_BASE_URL=https://artgalaxy.onrender.com
```

## 🔄 API Endpoints (Sample)
  ### Auth
  - POST /api/auth/signup
  - POST /api/auth/login

  ### Artworks
  - GET /api/artworks/home – All artworks
  - GET /api/artworks/my – User artworks
  - GET /api/artworks/:id – Artwork details
  - POST /api/artworks/upload – Upload artwork
 
## 🧪Deployment Notes
 - Frontend and Backend are deployed separately on Rende.
 - CORS is configured to allow the frontend domain.
 - API base URL is injected via environment variablez.
 - File uploads are handled securely and served via /uploads.

## 🔮Future Scope

❤️ Like & favorite artworks
💬 Comments & discussions
👥 Follow artists
🔍 Advanced search & filters
📊 Analytics dashboard
📱 Progressive Web App (PWA)
🧠 AI-based artwork recommendations
🖼 Image optimization & CDN caching


