import React, { Component } from "react";
import GalleryNav from "./GalleryNav";
import GalleryItem from "./GalleryItem";
import GalleryGridSample from "./GalleryGridSample";

class GalleryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images,
      navItems: this.props.navItems,
      currentTab: 1
    };
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
    }
  ]
};

export default GalleryDetail;
