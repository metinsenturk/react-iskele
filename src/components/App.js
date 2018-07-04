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
      }
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
          <Route path="/odalar" component={Rooms} />          
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
