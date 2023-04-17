import PropTypes from "prop-types";

import { useGifFetch } from "../hooks/useGifFetch";

import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images } = useGifFetch(category);

  return (
    <div className="subcontainer">
      <h3>{category}</h3>
      {!images && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.any.isRequired,
};
