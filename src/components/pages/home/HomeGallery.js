import React from "react";
import PropTypes from "prop-types";
import HomeGalleryItem from "./HomeGalleryItem";

const HomeGallery = props => {
  const images = props.images;
  return (
    <section className="section__gallery">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="section__title">
              Resimlerle <strong>İskele Otel</strong>
            </h2>
            <div className="divider">
              <hr className="line1" />
              <hr className="line2" />
              <hr className="line1" />
            </div>
            <p className="section__subtitle">
              Otelimiz 7 dönüm arazi üzerine kurulmuş olup denize 60 metre uzaklıktadır. Otelimizde sizlere en iyi şekilde hizmet verebilmek için restoran, oda servisi, otopark, plaj, iskele başta olmak üzere en iyi şekilde hazırlamaktayız.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            {
              <div
                id="gallery__carousel"
                className="owl-carousel owl-theme gallery__body"
              >
                {images
                  .slice(0, 9)
                  .map((image, index) => (
                    <HomeGalleryItem key={index} image={image} />
                  ))}
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;

HomeGallery.protoTypes = {
  images: PropTypes.array.isRequired
};
