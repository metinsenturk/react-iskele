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
      images: [
        {
          class: "mutfak",
          url: "gallery_img1.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "mutfak",
          url: "gallery_img2.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "iskele",
          url: "gallery_img3.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "bahce",
          url: "gallery_img4.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "bahce",
          url: "gallery_img5.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "acik-alan",
          url: "gallery_img6.jpg",
          alt: "",
          caption: ""
        },
        {
          class: "acik-alan",
          url: "gallery_img7.jpg",
          alt: "",
          caption: ""
        }
      ]
    };
  }

  handleHash() {
    let hash = this.props.location.hash;
    if (hash.length > 0) {
      console.log(`I got ${hash}`);
      let newItems = Object.assign(this.state.navItems);
      console.log(newItems);
      newItems.forEach(
        item =>
          `#${item.class}` === hash
            ? (item.isActive = true)
            : (item.isActive = false)
      );

      this.setState({
        navItems: newItems
      });
    }
  }

  componentDidMount() {
    console.log("no, only once!");
    let elem = document.getElementById("gallery__items");

    var iso = new Isotope(elem, {
      itemSelector: ".gallery__item",
      layoutMode: "masonry"
    });

    var imgLoad = imagesLoaded(elem);
    imgLoad.on("progress", function(instance, image) {
      iso.layout();
    });

    console.log(this.props);
  }

  componentDidUpdate(prevProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {
    console.log("will updated");
    console.log(nextProps);
    console.log(nextProps.location.hash);
    console.log(nextState);
    console.log(this.state.navItems);
    let hash = nextProps.location.hash;
    nextState.navItems.forEach(
        item =>
          `#${item.class}` === hash
            ? (item.isActive = true)
            : (item.isActive = false)
      );
  }

  render() {
    const navItems = this.state.navItems;
    const images = this.state.images;

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
                  <GalleryNav
                    key={index}
                    navItem={navItem}
                    /*handleClick={this.handleHash.bind(this)}*/
                  />
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
