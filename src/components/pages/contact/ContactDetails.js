import React from "react";
import GoogleMapReact from "google-map-react";
import ContactForm from "./ContactForm";
import ContactWidget from "./ContactWidget";
import MapsMarker from "./MapsMarker";

const ContactDetails = props => {
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
            <ContactForm formName="ContactPage" />
          </div>
          <div className="col-sm-5">
            <ContactWidget
              address={props.contactInfo.address}
              phone={props.contactInfo.phone}
              phone2={props.contactInfo.phone2}
              email={props.contactInfo.email}
            />
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
