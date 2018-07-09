import React, { Component } from "react";
import GalleryNav from "./GalleryNav";
import GalleryItem from "./GalleryItem";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";

class GalleryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        {
          class: "all",
          name: "Tüm Fotoğraflar",
          isActive: true
        },
        {
          class: "mutfak",
          name: "Mutfak",
          isActive: false
        },
        {
          class: "iskele",
          name: "İskele",
          isActive: false
        },
        {
          class: "bahce",
          name: "Bahçe",
          isActive: false
        },
        {
          class: "acik-alan",
          name: "Otel Açık Alanı",
          isActive: false
        }
      ],      
    };
  }

  handleIsotope() {
    let hash = this.props.location.hash;
    let element = document.getElementById("gallery__items");
    let iso = new Isotope(element, {
      itemSelector: ".gallery__item",
      layoutMode: "masonry",
      hiddenStyle: {
        opacity: 0
      },
      visibleStyle: {
        opacity: 1
      },
      filter: hash.length > 0 ? "." + hash.split("#")[1] : ".all"
    });

    iso.reloadItems();
    imagesLoaded(element, function() {
      iso.layout();
    });

    console.log(hash);
    console.log(iso.getFilteredItemElements());
  }

  componentDidMount() {
    console.log("did mounted");
    this.handleIsotope();
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("will updated");
    // TODO: if not to use nextState, how to update state?
    /*
     * I tried componentDidUpdate and could not used setState in it since I don't have any conditional to stop
     * I tried handleClick function, which recieved prevProps in it during onClick event.
     * */
    let hash = nextProps.location.hash;
    nextState.navItems.forEach(
      item =>
        `#${item.class}` === hash
          ? (item.isActive = true)
          : (item.isActive = false)
    );
    this.handleIsotope();
  }

  render() {
    const navItems = this.state.navItems;
    const images = this.props.images;

    return (
      <section className="section__gallery-alt">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="subheading">Otelin Fotoğrafları</h2>
              <div className="divider">
                <hr className="line1" />
                <hr className="line2" />
                <hr className="line1" />
              </div>
              <p className="section__subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti sit dicta quae natus quasi ratione quis id, tenetur
                atque blanditiis aperiam mollitia enim corporis ex praesentium
                reprehenderit.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <ul className="nav nav-tabs gallery__nav" role="tablist">
                {navItems.map((navItem, index) => (
                  <GalleryNav key={index} navItem={navItem} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div id="gallery__items" className="row">
            {images.map((image, index) => (
              <GalleryItem key={index} image={image} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
export default GalleryDetail;
