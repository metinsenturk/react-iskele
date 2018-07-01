import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Info from "./Info";

class App extends Component {
  render() {
    return (
      <div>
        
        <Info 
        address="İskele Koyu, Ayvacık, Çanakkale"
        phone="543-344-9978"
        url_twitter="http://twitter.com/iskelebutikhotel"
        url_fb=""
        url_instagram=""
         />
      </div>
    );
  }
}

export default App;
