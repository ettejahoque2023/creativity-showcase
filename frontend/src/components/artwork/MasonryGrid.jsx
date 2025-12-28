import ArtworkCard from "./ArtworkCard";

const MasonryGrid = ({ artworks }) => {
  return (
    <div className="masonry-grid">
      {artworks.map((art) => (
        <ArtworkCard key={art._id} art={art} />
      ))}
    </div>
  );
};

export default MasonryGrid;
