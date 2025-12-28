import { Link } from "react-router-dom";
import "../styles/landing.css";
import FeaturedCarousel from "../components/artwork/FeaturedCarousel";
const Landing = () => {
  return (
    <>
    <main className="landing">
      {/* HERO */}
      <section className="hero">
        <h3>
          Welcome to Art Galaxy
        </h3>
        <h1>
          Where Creativity <br />
          <span>Comes Alive</span>
        </h1>

        <p>
          Discover extraordinary artworks from talented creators around
          the world. A curated space for inspiration.
        </p>

        <div className="hero-actions">
          <Link to="/login" className="btn outline">
            Login
          </Link>
          <Link to="/signup" className="btn solid">
            Sign Up
          </Link>
        </div>
      </section>

      {/* FEATURED */}
      {/* FEATURED */}
<section className="featured">
  <h3>FEATURED WORKS</h3>
  <FeaturedCarousel />
</section>


      {/* EXPLORE */}
      <section className="explore">
        <Link to="/gallery" className="btn solid">
          Explore More
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbf8f8ff"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
        </Link>
      </section>
    </main>

    </>
  );
};

export default Landing;
