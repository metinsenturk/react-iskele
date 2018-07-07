import React from "react";
import PropTypes from "prop-types";

const HomeGalleryItem = props => (
  <div className="gallery__item">
    <a
      href={`assets/img/${props.image.url}`}
      data-lightbox="gallery"
      data-title={props.image.caption}
    >
      <img
        src={`assets/img/${props.image.url}`}
        className="img-responsive"
        alt={props.image.alt}
      />
    </a>
  </div>
);

export default HomeGalleryItem;

HomeGalleryItem.propTypes = {
    image: PropTypes.object.isRequired
};
