import React from "react";
import AboutServiceItem from "./AboutServiceItem";

const AboutServices = props => {
  const aboutServicesArray = props.hotelFeatures;
  return (
    <section className="section__services-alt">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <h2 className="section__title services__title">
              Butik Otel <strong>Hizmetlerimiz</strong>
            </h2>
            <p className="services__text">
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth. Por scientie, musica, sport etc.
            </p>
            <div className="services__img">
              <a href="#services__modal" data-toggle="modal">
                <img
                  src="assets/img/about_services.jpg"
                  className="img-responsive"
                  alt="..."
                />
              </a>
            </div>
          </div>
          <div className="col-sm-7">
            <div className="row">
              {aboutServicesArray.slice(0,2).map(aboutSevice => 
                <AboutServiceItem aboutSevice={aboutSevice} />
              )}
            </div>
            <div className="row">
              {aboutServicesArray.slice(2,4).map(aboutSevice => (
                <AboutServiceItem aboutSevice={aboutSevice} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
