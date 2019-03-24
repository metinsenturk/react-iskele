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
        phone: "+90 (545) 452-0978",
        phone2: "+90 (543) 344-9978",
        email: "info@iskeleotel.com",
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
          /*roomPrice: "79",*/
          roomPricePerInterval: "Gece",
          roomDescription: `20 metrekare genişliğinde, balkonlu bir odadır.`
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
          /*roomPrice: "99",*/
          roomPricePerInterval: "Gece",
          roomDescription:
            `Odamız 40 metrekareden oluşur. İçinde çift kişilik ve bir adet tek kişilik yatak
            mevcut. Genzi ve ferah olan odanın 2 büyük balkonu da vardır. Geniş odanızda
            deniz ve güzel kokulu çiçeklerin keyfini çıkartabilirsiniz.`
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
            "Aracınızla yaptığınız seyahatlerinizde aklınız arabanızda kalmasın. Otelin içerisinde aracınızı park edin...",
          mediumDescription:
            "Geniş bir arazı içinde bulunan otelimizin bahçesinde araçlarınız için park sorunu olmaz. Araç otoparkını otelimizin ve restorantımızın tüm müşterileri ücretisiz kullanabilir",
          /*icon: "ion-ios-car",*/
          image: ""
        },
        {
          featureName: "Plaj",
          shortDescription: "Berrak suyun tadını çıkarabileceğiniz güzel bir plaj...",
          mediumDescription: "Plajımız temiz, minik volkanik çakıl taşlarından oluşur. Büyük iskelesi ile berrak suyun tadini çıkartabilirsiniz.",
          /*icon: "ion-plane",*/
          image: ""
        },
        {
          featureName: "Restoran",
          shortDescription: "Zengin menüsüyle yerel tatları sizlere sunuyor...",
          mediumDescription: "İskele Otel restoranı büyük bahçemizin girişinde olup, çiçekler ve küçük ağaçların içinde bahçede hizmet vermektedir. ",
          /*icon: "ion-plane",*/
          image: ""
        },
        {
          featureName: "Yaz Bahçesi",
          shortDescription: "Zeytin ağaçları, domates ve salatalık bahçesi ve dahası...",
          mediumDescription: "Zeytin ağaçları başta olmak üzere otel alanı içerisindeki yeşil alanın tadını çıkarın. Sabah kahvaltısında yiyeceğiniz yeşilliklerin geldiği bahçemizi keşfedin.",
          /*icon: "ion-plane",*/
          image: ""
        }
      ],
      images: [
        {
          class: "genel",
          url: "genel/genel-1.jpg",
          alt: "",
          caption: ""
        },        
        {
          class: "genel",
          url: "genel/genel-4.jpg",
          alt: "",
          caption: ""
        },                
        {
          class: "genel",
          url: "genel/genel-7.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "genel",
          url: "genel/genel-8.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "genel",
          url: "genel/genel-9.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "genel",
          url: "genel/genel-10.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "genel",
          url: "genel/genel-11.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "genel",
          url: "genel/genel-12.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "genel",
          url: "genel/genel-2.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "genel",
          url: "genel/genel-3.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "genel",
          url: "genel/genel-6.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "genel",
          url: "genel/genel-5.jpg",
          alt: "",
          caption: ""
        },
        /**
         * 
         * GENEL END
         * 
         */        
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
