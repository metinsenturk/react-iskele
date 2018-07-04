import React from "react";
import GoogleMapReact from "google-map-react";

const MapsMarker = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {text}
  </div>
);

const ContactDetails = props => {
  const options = {
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    styles: [
      {
        featureType: "all",
        stylers: [
          { hue: "#e7ecf0" }
        ]
      },
      {
        featureType: "road",
        stylers: [
          { saturation: -30 },
          { gamma: 0.8 },
          { lightness: 4 },
          { visibility: "on" }
        ]
      }
    ]
  };
  return (
    <section className="section__contacts-alt">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="subheading">
              Rezervasyon veya odalar için aşağıdaki bilgilerden bizi arayın.
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-7">
            <div className="section-contacts__form_body">
              <p className="section-contacts__title">İletişim Formu</p>

              <div className="alert" id="form_message" role="alert" />

              <form
                id="contact__form"
                className="contacts__form"
                method="POST"
                data-netlify="true"
                name="contact"
              >
                <div className="form-group">
                  <label htmlFor="email" className="sr-only">
                    E-posta Adresi
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="E-posta adresiniz"
                  />
                  <span className="help-block" />
                </div>

                <div className="form-group">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Adınız"
                  />
                  <span className="help-block" />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    rows="6"
                    placeholder="Mesajınız"
                  />
                  <span className="help-block" />
                </div>

                <div className="form-group">
                  <small className="text-muted">
                    * Tüm alanlar zorunludur.
                  </small>
                </div>
                <div data-netlify-recaptcha />
                <button type="submit" className="btn btn-default">
                  Gönder
                </button>
              </form>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="contacts__info">
              <p className="contacts_info__title">İletişim Bilgileri</p>
              <ul className="contacts_info__content">
                <li>
                  <p className="contact-info-text">
                    Bize sorun. Aşağıdaki form ile bize e-posta yollayabilir
                    veya telefon ve e-posta ile bizimle iletişime
                    geçebilirsiniz.
                  </p>
                </li>
                <li>
                  <i className="icon ion-android-pin" />
                  <div className="contact-info-content">
                    <div className="title">Addres</div>
                    <div className="description">{props.address}</div>
                  </div>
                </li>
                <li>
                  <i className="icon ion-android-call" />
                  <div className="contact-info-content">
                    <div className="title">Telefon/ Telefon 2</div>
                    <div className="description">
                      <a href={"tel:" + props.phone}>{props.phone}</a> /{" "}
                      {props.phone2}
                    </div>
                  </div>
                </li>
                <li>
                  <i className="icon ion-android-mail" />
                  <div className="contact-info-content">
                    <div className="title">E-posta</div>
                    <div className="description">
                      <a
                        href={
                          "mailto:" +
                          props.email +
                          "?subject=%C4%B0skele%20Butik%20Hotel%20-%20Bilgi%20Alma"
                        }
                        target="_blank"
                      >
                        {props.email}
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section_row">
        {/* TODO: buradaki api constraints, production da prod url e google dashboard'dan değişecek.*/}
        {/* <div id="map" /> */}
        <div style={{ width: "100%", height: "350px" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBnxZIaE8m-n7hNs8HNwJ8j9IlEwTx3uRA",
              language: "tr",
              region: "tr"
            }}
            options={options}
            defaultCenter={{ lat: 39.475337, lng: 26.2464967 }}
            defaultZoom={11}
          >
            <MapsMarker lat="39.475337" lng="26.2464967" text={"İskele Otel"} />
          </GoogleMapReact>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
