import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
    const backgroundStyle = {
        // eslint-disable-next-line
        backgroundImage: "url(" + "http://localhost:3000/assets/img/" + props.contentBackgroundImage + ")"
    }
  return (
    <div>
      <section className="section__header" id="section__header">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="welcome__content">
                <h2 className="welcome_content__title">{props.contentTitle}</h2>

                <ol className="breadcrumb">
                  <li>
                    <Link to="/">Anasayfa</Link>
                  </li>
                  <li className="active">{props.breadcrumbCurrent}</li>
                </ol>

                <p className="welcome_content__desc">
                  {props.contentDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home__bg" style={ backgroundStyle } />
      </section>
    </div>
  );
};

export default Breadcrumb;