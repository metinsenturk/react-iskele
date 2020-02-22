import React, { Fragment } from "react";
import Helmet from "react-helmet";
import HomeContact from "./home/HomeContact";
import Testimonials from "./about/Testimonials";
import HomeFeatures from "./home/HomeFeatures";
import HomeAbout from "./home/HomeAbout";
import HomeRooms from "./home/HomeRooms";
import HomeGallery from "./home/HomeGallery";


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundImage: '2020-02-10.jpeg'
    }
  }

  componentDidMount() {
    setInterval(this.changeBackground, 5000)
  }

  changeBackground = () => {
    let imageNames = [
      '2020-02-14.jpeg',
      '2020-02-13.jpeg',
      '2020-02-12.jpeg',
      '2020-02-11.jpeg',
      '2020-02-10.jpeg',
      '2020-02-9.jpeg',
    ]
    var item = imageNames[Math.floor(Math.random() * imageNames.length)]
    this.setState({backgroundImage: item})
  }

  render() {
    return (
      <Fragment>
        <Helmet
          title="İskele Otel"
          link={[{ rel: "canonical", href: "https://iskeleotel.com/" }]}
          meta={[
            {
              name: "description",
              content:
                "Behram Köyü'nün İskele Koyu'nda yer alan, denizin yanında aile sıcaklığında bir butik otel. Dahası, yerel yemekleriyle, zeytin bahçesiyle ve zengin doğal güzellikleriyle assos'taki eviniz."
            },
            { property: "og:type", content: "website" },
            { property: "og:title", content: "İskele Otel" },
            { property: "og:url", content: "https://iskeleotel.com/" }
          ]}
        />
        <a id="back-to-top" href="#section__home" className="btn btn-top back-to-top" role="button" title="Click to return on the top page" data-toggle="tooltip" data-placement="left">
          <i className="ion-android-arrow-up"></i>
        </a>
        <section className="section__home" id="section__home">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="welcome__content">
                  <h1 className="welcome_content__title">{this.props.profileInfo.name}</h1>
                  <p className="welcome_content__title-primary">
                    {this.props.profileInfo.snag}
                  </p>

                  <div className="divider">
                    <hr className="line1" />
                    <hr className="line2" />
                    <hr className="line1" />
                  </div>

                  <p className="welcome_content__desc">
                    Assos bölgesinde, Bektaş Köyü’nün sahilinde, 7 dönüm zeytinlik arazısının içinde İskele Otel ile sakinliğe kavuşacaksınız.
              </p>

                  <a
                    href="https://fb.com/iskeleoteli/book/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-reservation"
                  >
                    Facebook ile Rezervasyon Yap
              </a>
                </div>
              </div>
            </div>
          </div>

          <div className="home__bg" style={{
            backgroundImage: `url(../assets/img/genel/${this.state.backgroundImage})`
          }} />
        </section>
        <HomeAbout />
        <HomeRooms rooms={this.props.rooms} />
        <Testimonials />
        <HomeGallery images={this.props.images} />
        <HomeFeatures hotelFeatures={this.props.hotelFeatures} />
        <HomeContact contactInfo={this.props.contactInfo} />
      </Fragment>
    )
  }
}

export default Home;
