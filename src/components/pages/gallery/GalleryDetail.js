import React, { Component } from "react";
import GalleryNav from "./GalleryNav";
import GalleryItem from "./GalleryItem";

class GalleryDetail extends Component {
  constructor(props) {
    super(props);

    // let currentTab = 1;
    // let images 
    // console.log(this.props.location.hash)
    // if (this.props.location.hash) {
    //   let tab = this.props.navItems.filter(item => `#${item.class}` === this.props.location.hash)[0];
    //   currentTab = tab.id;
    //   images = tab.id === 1 ? this.props.images : this.props.images.filter(image => image.class === tab.class);
    //   // console.log(currentTab)
    // } else {
    //   images = this.props.images;
    // }

    this.state = {
      images: this.props.images,
      navItems: this.props.navItems,
      currentTab: 1
    };
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  handleClick(tab) {
    const images = this.props.images;
    let selected = tab.id === 1 ? images : images.filter(image => image.class === tab.class);
    this.setState({
      images: selected,
      currentTab: tab.id
    })
  }

  render() {
    const navItems = this.state.navItems;
    const images = this.shuffle(this.state.images);

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
                Otelden manzaralar.
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
                    isCurrent={this.state.currentTab === navItem.id}
                    handleClick={this.handleClick.bind(this, navItem)}
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

GalleryDetail.defaultProps = {
  navItems: [
    {
      class: "all",
      name: "Tüm Fotoğraflar",
      id: 1
    },
    /*
    {
      class: "mutfak",
      name: "Mutfak",
      id: 2
    },
    {
      class: "iskele",
      name: "İskele",
      id: 3
    },
    {
      class: "bahce",
      name: "Bahçe",
      id: 4
    },
    {
      class: "acik-alan",
      name: "Otel Açık Alanı",
      id: 5
    }*/
  ]
};

export default GalleryDetail;
