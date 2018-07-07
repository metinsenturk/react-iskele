import React from "react";
import ContactForm from "../contact/ContactForm";
import MapsMarker from "../contact/MapsMarker";
import ContactWidget from "../contact/ContactWidget";
import GoogleMapReact from "google-map-react";

const HomeContact = props => {
    const options = {
        panControl: false,
        mapTypeControl: false,
        scrollwheel: false,
        styles: [
          {
            featureType: "all",
            stylers: [{ hue: "#e7ecf0" }]
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
    <section className="section__contacts">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="section__title">
              <strong>Bizimle İletişime</strong> Geçin.
            </h2>
            <div className="divider">
              <hr className="line1" />
              <hr className="line2" />
              <hr className="line1" />
            </div>
          </div>
        </div>
      </div>
      <div className="section_row">
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
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <ContactWidget
              address={props.contactInfo.address}
              phone={props.contactInfo.phone}
              phone2={props.contactInfo.phone2}
              email={props.contactInfo.email}
            />
            <p className="subheading">
              Rezervasyon veya sorularınız için bizi arayın.
            </p>
          </div>
          <div className="col-sm-7">
            <ContactForm formName="HomePage"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
