import React from "react";
import Helmet from "react-helmet";
import { Switch, Route } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import RoomsItem from "./rooms/RoomsItem";
import Home from "./Home";

const RoomsHandler = props => {
  const rooms = [
    {
      featureImage: "single_room.jpg",
      featureImageAlt: "Tek Kişilik Oda Resmi",
      roomName: "Tek Kişilik Oda",
      roomSlug: "tek-kisilik-oda",
      roomCurrency: "$",
      roomPrice: "79",
      roomPricePerInterval: "Gece",
      roomDescription:
        "Oda tek kişilıktir. Tek kişilik olmasına ragmen rahat ve geniştir."
    },
    {
      featureImage: "double_room.jpg",
      featureImageAlt: "Çift Kişilik Oda Resmi",
      roomName: "Çift Kişilik Oda",
      roomSlug: "cift-kisilik-oda",
      roomCurrency: "$",
      roomPrice: "99",
      roomPricePerInterval: "Gece",
      roomDescription:
        "Oda çift kişilıktir. Hiç bir eksiklik hissetmeyeceksiniz."
    },
    {
      featureImage: "",
      featureImageAlt: "",
      roomName: "",
      roomSlug: "tek-kisilik-oda",
      roomCurrency: "",
      roomPrice: "",
      roomPricePerInterval: "",
      roomDescription: ""
    }
  ];
  return (
    <div>
      <Helmet
        title="İskele Butik Otel'de Odalar."
        link={[
          { rel: "canonical", href: "https://iskelebutikhotel.com/odalar" }
        ]}
        meta={[
          {
            name: "description",
            content:
              "Bir tatilde aradığınız herşeyin olduğu odalar. Tam donanımlı odalarımızda İskele Koyu'nun ve oda servisinin tadını çıkarın."
          },
          { property: "og:type", content: "website" },
          { property: "og:title", content: "İskele Butik Otel Odaları" },
          { property: "og:url", content: "https://iskelebutikhotel.com/odalar" }
        ]}
      />
      <Breadcrumb
        contentBackgroundImage="rooms_bg.jpg"
        contentTitle="Sivrice Koyundaki en Konforlu Odalar"
        contentDescription="Odalarımızı eviniz gibi hissedin."
        breadcrumbCurrent="Odalar"
      />
      <section class="section__rooms-1">
        <div class="container">
          <div class="row">
            {rooms.map(roomItem => <RoomsItem room={roomItem} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

const Rooms = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/odalar" component={RoomsHandler} />
        <Route path="/odalar/:room" component={Home} />
      </Switch>
    </div>
  );
};

export default Rooms;
