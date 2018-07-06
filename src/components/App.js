import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Info from "./Info";
import Nav from "./pages/Nav";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Places from "./pages/Places";
import Reservation from "./pages/Reservation";

class App extends Component {
  
  render() {
    const data = {
      profileInfo: {
        name: "İskele Butik Otel",
        snag: "Bektaş Köyü"
      },
      contactInfo: {
        address: "İskele Koyu, Ayvacık, Çanakkale",
        phone: "+90 (543) 344-9978",
        phone2: "+90 (543) 344-9978",
        email: "info@iskelebutikhotel.com",
        email2: "",
      },
      rooms: [
        {
          featureImage: "single_room.jpg",
          featureImageAlt: "Tek Kişilik Oda Resmi",
          images : [
            {
              url: "gallery_img1.jpg",
              alt: ""
            },
            {
              url: "gallery_img2.jpg",
              alt: ""
            },
            {
              url: "single_room.jpg",
              alt: ""
            },
          ],
          roomName: "Tek Kişilik Oda",
          roomSlug: "tek-kisilik-oda",
          roomCurrency: "$",
          roomPrice: "79",
          roomPricePerInterval: "Gece",
          roomDescription:
            `A wonderful serenity has taken possession of my entire soul, like these
            sweet mornings of spring which I enjoy with my whole heart. I am alone,
            and feel the charm of existence in this spot, which was created for the
            bliss of souls like mine. I am so happy, my dear friend, so absorbed in
            the exquisite sense of mere tranquil existence. When, while the lovely
            valley teems with vapour around me and the meridian.`
        },
        {
          featureImage: "double_room.jpg",
          featureImageAlt: "Çift Kişilik Oda Resmi",
          images : [
            {
              url: "",
              alt: ""
            },
          ],
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
          images : [
            {
              url: "",
              alt: ""
            },
          ],
          roomName: "",
          roomSlug: "",
          roomCurrency: "",
          roomPrice: "",
          roomPricePerInterval: "",
          roomDescription: ""
        }
      ]
    }
    
    return (      
      <div>        
        <Info
          address={data.contactInfo.address}
          phone={data.contactInfo.phone}
        />
        <Nav hotel_name={ data.profileInfo.name } hotel_snag={ data.profileInfo.snag } />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home hotel_name={ data.profileInfo.name } hotel_snag={ data.profileInfo.snag } />
            )}
          />
          <Route path="/hakkimizda" component={About} />
          <Route path="/odalar" render={ props => ( <Rooms contactInfo={data.contactInfo} rooms={data.rooms} /> )} />          
          <Route path="/rezervasyon" component={Reservation} />
          <Route path="/galeri" component={Gallery} />
          <Route path="/iletisim" render={ props => ( <Contact contactInfo={data.contactInfo} /> )} />
          <Route exact path="/:keyword" component={Places} />
        </Switch>

        <Footer hotel_name={ data.profileInfo.name } hotel_snag={ data.profileInfo.snag } />
      </div>
    );
  }
}

export default App;
