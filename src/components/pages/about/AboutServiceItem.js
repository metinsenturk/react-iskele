import React from "react";

const AboutServiceItem = props => {
    const aboutSevice = props.aboutSevice;
    return (
<div className="col-sm-6">
                <div className="services__item">
                  <div className="services_item__logo">
                    <i className={`icon ${aboutSevice.icon}`} />
                  </div>
                  <div className="services_item__title">
                    <h3>{aboutSevice.featureName}</h3>
                  </div>
                  <div className="services_item__desc">
                    {aboutSevice.shortDescription}
                  </div>
                </div>
              </div>
    );
}

export default AboutServiceItem;