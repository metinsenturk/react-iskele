import React from "react";
import Helmet from "react-helmet";
import { Switch, Route } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import RoomsItem from "./rooms/RoomsItem";
import RoomDetail from "./rooms/RoomDetail";

const RoomsHandler = props => {
  const rooms = props.rooms;

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
      <section className="section__rooms-1">
        <div className="container">
          <div className="row">
            {rooms.map(roomItem => <RoomsItem key={roomItem.roomSlug} room={roomItem} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

const Rooms = props => {
  const contactInfo = props.contactInfo;
  const rooms = props.rooms;

  return (
    <div>
      <Switch>
        <Route exact path="/odalar" render={ props => ( <RoomsHandler rooms={rooms} /> ) } />
        <Route path="/odalar/:roomslug" render={ (props) => ( <RoomDetail {...props} rooms={rooms} contactInfo={contactInfo} /> ) } />
      </Switch>
    </div>
  );
};

export default Rooms;
