import React from "react";
import {Link} from "react-router-dom";

const GalleryNav = props => {
  const navItem = props.navItem;
  const liClasses = ["gallery-nav__link"]
  if (navItem.isActive) {
    liClasses.push("active")
  }
  return (
    <li role="presentation" className={ liClasses.join(" ")}>
      <Link to={
        {
          pathname: `/galeri`,
          hash: `#${navItem.class}`
        }
        } data-filter={`.${navItem.class}`}>
      <span>{navItem.name}</span>
      </Link>
    </li>
  );
};

export default GalleryNav;
