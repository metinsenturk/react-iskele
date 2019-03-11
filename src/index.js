import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, withRouter } from "react-router-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

class ScrollToTop extends React.Component {
  componentDidUpdate() {
    const { hash } = window.location;
    if (hash !== "") {
      let retries = 0;
      const id = hash.replace("#", "");
      const scroll = () => {
        retries += 0;
        if (retries > 50) return;
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => element.scrollIntoView(), 0);
        } else {
          setTimeout(scroll, 100);
        }
      };
      scroll();
    } else {
      window.scrollTo(0, 0);
    }
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
