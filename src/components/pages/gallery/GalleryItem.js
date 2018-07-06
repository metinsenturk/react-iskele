import React from "react";

const GalleryItem = props => {
  const image = props.image;
  const urlbase = "http://localhost:3000/assets/img/";

  return (
    <div className={"col-xs-12 col-sm-6 col-md-4 gallery__item all " + image.class}>
      <a
        data-lightbox="gallery"
        href={urlbase + image.url}
        data-title={image.caption}
      >
        <img src={urlbase + image.url} className="img-responsive" alt={image.alt} />
      </a>
    </div>
  );
};

export default GalleryItem;
