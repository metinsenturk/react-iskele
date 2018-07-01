import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Info from "./Info";
import Footer from './Footer'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <div>
        <Info 
        address="İskele Koyu, Ayvacık, Çanakkale"
        phone="+90 543-344-9978" />

        <Switch>
          <Route 
          exact path="/" 
          render={ (props) => <Home hotel_name="İskele Butik Otel" hotel_snag="Bektaş Köyü" /> } />
          <Route path="/hakkimizda" component={Home} />
          <Route path="/odalar" component={Home} />
          <Route path="/galeri" component={Home} />
          <Route path="/iletisim" component={Home} />
        </Switch>

        <Footer hotel_name="İskele Butik Otel" hotel_snag="Bektaş Köyü" />
      </div>
    );
  }
}

export default App;
