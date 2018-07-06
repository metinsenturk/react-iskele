import React from "react";

const AboutServices = props => {
  return (
    <section className="section__services-alt">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <h2 className="section__title services__title">
              Our <strong>Services</strong>
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
              <div className="col-sm-6">
                <div className="services__item">
                  <div className="services_item__logo">
                    <i className="icon ion-model-s" />
                  </div>
                  <div className="services_item__title">
                    <h3>Parking</h3>
                  </div>
                  <div className="services_item__desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Odit dolor magnam quas cumque.
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="services__item">
                  <div className="services_item__logo">
                    <i className="icon ion-android-bicycle" />
                  </div>
                  <div className="services_item__title">
                    <h3>Fitness Hall</h3>
                  </div>
                  <div className="services_item__desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Saepe ullam architecto.
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="services__item">
                  <div className="services_item__logo">
                    <i className="icon ion-android-restaurant" />
                  </div>
                  <div className="services_item__title">
                    <h3>Restaurant</h3>
                  </div>
                  <div className="services_item__desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum sint ipsum culpa consequatur.
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="services__item">
                  <div className="services_item__logo">
                    <i className="icon ion-android-sunny" />
                  </div>
                  <div className="services_item__title">
                    <h3>Spa center</h3>
                  </div>
                  <div className="services_item__desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi quo iure sapiente. Earum est corporis.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
