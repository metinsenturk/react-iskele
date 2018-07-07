import React from "react";
import Helmet from "react-helmet";
import HomeContact from "./home/HomeContact";

const Home = props => (
  <div>
    <Helmet
      title="İskele Butik Otel"
      link={[{ rel: "canonical", href: "https://iskelebutikhotel.com/" }]}
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
    <a id="back-to-top" href="#section__home" class="btn btn-top back-to-top" role="button" title="Click to return on the top page" data-toggle="tooltip" data-placement="left">
	  	<i class="ion-android-arrow-up"></i>
	  </a>
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
    <HomeContact contactInfo={props.contactInfo} />
  </div>
);

export default Home;
