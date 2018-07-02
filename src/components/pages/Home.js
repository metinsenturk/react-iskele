import React from "react";
import Helmet from "react-helmet";

const Home = props => (
  <div>
    <Helmet
      title="İskele Butik Otel"
      meta={[
        {
          name: "description",
          content:
            "Behram Köyü'nün İskele Koyu'nda yer alan, denizin yanında aile sıcaklığında bir butik otel. Dahası, yerel yemekleriyle, zeytin bahçesiyle ve zengin doğal güzellikleriyle assos'taki eviniz."
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "İskele Butik Otel" },
        { property: "og:url", content: "https://iskelebutikhotel.com/" }
      ]}
    />
    <section className="section__home" id="section__home">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="welcome__content">
              <h1 className="welcome_content__title">{props.hotel_name}</h1>
              <p className="welcome_content__title-primary">
                {props.hotel_snag}
              </p>

              <div className="divider">
                <hr className="line1" />
                <hr className="line2" />
                <hr className="line1" />
              </div>

              <p className="welcome_content__desc">
                Çok yakında, hizmetinizde..
              </p>

              <a
                href="http://fb.me/iskelebutikhotel"
                className="btn btn-reservation"
              >
                Facebook'tan takip et
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="home__bg" />
    </section>
  </div>
);

export default Home;
