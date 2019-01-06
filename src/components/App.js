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
import Page404 from "./pages/Page404";

class App extends Component {
  render() {
    const data = {
      profileInfo: {
        name: "İskele Otel",
        snag: "Bektaş Köyü"
      },
      contactInfo: {
        address: "İskele Koyu, Ayvacık, Çanakkale",
        phone: "+90 (543) 344-9978",
        phone2: "+90 (543) 344-9978",
        email: "info@iskelebutikhotel.com",
        email2: ""
      },
      rooms: [
        {
          featureImage: "room-1/iskele-1.jpg",
          featureImageAlt: "Tek Kişilik Oda Resmi",
          images: [
            {
              url: "room-1/iskele-1.jpg",
              alt: ""
            },
            {
              url: "room-1/iskele-2.jpg",
              alt: ""
            },
            {
              url: "room-1/iskele-3.jpg",
              alt: ""
            },
            {
              url: "room-1/iskele-4.jpg",
              alt: ""
            },
            {
              url: "room-1/iskele-5.jpg",
              alt: ""
            },
            {
              url: "room-1/iskele-6.jpg",
              alt: ""
            },
            {
              url: "room-1/iskele-7.jpg",
              alt: ""
            },
            {
              url: "room-1/iskele-8.jpg",
              alt: ""
            },
            {
              url: "room-1/iskele-9.jpg",
              alt: ""
            },
            {
              url: "room-1/iskele-10.jpg",
              alt: ""
            },
            {
              url: "room-1/iskele-11.jpg",
              alt: ""
            },
            {
              url: "room-1/iskele-12.jpg",
              alt: ""
            },
            {
              url: "room-1/iskele-13.jpg",
              alt: ""
            },
            {
              url: "room-1/iskele-14.jpg",
              alt: ""
            },
          ],
          roomName: "Tek Kişilik Oda",
          roomSlug: "tek-kisilik-oda",
          roomCurrency: "$",
          roomPrice: "79",
          roomPricePerInterval: "Gece",
          roomDescription: `A wonderful serenity has taken possession of my entire soul, like these
            sweet mornings of spring which I enjoy with my whole heart. I am alone,
            and feel the charm of existence in this spot, which was created for the
            bliss of souls like mine. I am so happy, my dear friend, so absorbed in
            the exquisite sense of mere tranquil existence. When, while the lovely
            valley teems with vapour around me and the meridian.`
        },
        {
          featureImage: "room-2/iskele-8.jpg",
          featureImageAlt: "Çift Kişilik Oda Resmi",
          images: [
            {
              url: "room-2/iskele-1.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-2.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-3.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-4.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-5.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-6.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-7.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-8.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-9.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-10.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-11.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-12.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-13.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-14.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-15.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-16.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-17.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-18.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-19.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-20.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-21.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-22.jpg",
              alt: ""
            },
            {
              url: "room-2/iskele-23.jpg",
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
        /*{
          featureImage: "",
          featureImageAlt: "",
          images: [
            {
              url: "",
              alt: ""
            }
          ],
          roomName: "",
          roomSlug: "",
          roomCurrency: "",
          roomPrice: "",
          roomPricePerInterval: "",
          roomDescription: ""
        }*/
      ],
      hotelFeatures: [
        {
          featureName: "Ücretsiz Araç Parkı",
          shortDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dolor magnam quas cumque.",
          mediumDescription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi eaque, eum. Voluptates corporis tenetur commodi nihil velit perspiciatis natus fugit rerum nisi, at, voluptas autem quisquam reprehenderit odit dolores quas!",
          icon: "ion-android-restaurant",
          image: ""
        },
        {
          featureName: "Plaj",
          shortDescription: "",
          mediumDescription: "",
          icon: "ion-plane",
          image: ""
        },
        {
          featureName: "Restoran",
          shortDescription: "",
          mediumDescription: "",
          icon: "ion-plane",
          image: ""
        },
        {
          featureName: "Restoran",
          shortDescription: "",
          mediumDescription: "",
          icon: "ion-plane",
          image: ""
        }
      ],
      images: [
        {
          class: "mutfak",
          url: "gallery_img1.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "mutfak",
          url: "gallery_img2.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "iskele",
          url: "gallery_img3.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "bahce",
          url: "gallery_img4.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "bahce",
          url: "gallery_img5.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "acik-alan",
          url: "gallery_img6.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "acik-alan",
          url: "gallery_img7.jpg",
          alt: "",
          caption: ""
        }
      ]
    };

    return (
      <div>
        <Info
          address={data.contactInfo.address}
          phone={data.contactInfo.phone}
        />
        <Nav
          hotel_name={data.profileInfo.name}
          hotel_snag={data.profileInfo.snag}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                profileInfo={data.profileInfo}
                contactInfo={data.contactInfo}
                hotelFeatures={data.hotelFeatures}
                rooms={data.rooms}
                images={data.images}
              />
            )}
          />
          <Route
            path="/hakkimizda"
            render={props => <About hotelFeatures={data.hotelFeatures} />}
          />
          <Route
            path="/odalar"
            render={props => (
              <Rooms contactInfo={data.contactInfo} rooms={data.rooms} />
            )}
          />
          <Route path="/rezervasyon" component={Reservation} />
          <Route
            path="/galeri"
            render={props => <Gallery {...props} images={data.images} />}
          />
          <Route
            path="/iletisim"
            render={props => <Contact contactInfo={data.contactInfo} />}
          />
          <Route exact path="/:keyword" component={Places} />
          <Route path="/404/:errorCode" render={props => <Page404 {...props} />} />          
        </Switch>

        <Footer
          hotel_name={data.profileInfo.name}
          hotel_snag={data.profileInfo.snag}
        />
      </div>
    );
  }
}

export default App;
