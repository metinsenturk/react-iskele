import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, withRouter } from "react-router-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

class ScrollToTop extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
