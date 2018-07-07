import React from "react";

const HomeFeatureItem = props => {
  const homeFeature = props.homeFeature;
  const iconStyle = {
    fontSize: "64px"
  };
  return (
    <div className="col-md-3 col-sm-6">
      <div className="services__item">
        <div className="services_item__logo" style={iconStyle}>
          <i className={`icon ${homeFeature.icon}`} />
        </div>
        <h2 className="services_item__title">{homeFeature.featureName}</h2>
        <div className="services_item__divider">
          <i className="icon ion-android-star" />
          <i className="icon ion-android-star" />
          <i className="icon ion-android-star" />
        </div>
        <p className="services_item__desc">{homeFeature.mediumDescription}</p>
      </div>
    </div>
  );
};

export default HomeFeatureItem;
