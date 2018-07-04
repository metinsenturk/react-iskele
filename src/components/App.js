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
    return (
      <div>        
        <Info
          address="İskele Koyu, Ayvacık, Çanakkale"
          phone="+90 543-344-9978"
        />
        <Nav hotel_name="İskele Butik Otel" hotel_snag="Bektaş Köyü" />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home hotel_name="İskele Butik Otel" hotel_snag="Bektaş Köyü" />
            )}
          />
          <Route path="/hakkimizda" component={About} />
          <Route path="/odalar" component={Rooms} />          
          <Route path="/rezervasyon" component={Reservation} />
          <Route path="/galeri" component={Gallery} />
          <Route path="/iletisim" component={Contact} />
          <Route exact path="/:keyword" component={Places} />
        </Switch>

        <Footer hotel_name="İskele Butik Otel" hotel_snag="Bektaş Köyü" />
      </div>
    );
  }
}

export default App;
