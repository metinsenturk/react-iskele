import React from "react";
import {Link} from "react-router-dom";

const GalleryNav = props => {
  const navItem = props.navItem;

  return (
    <li role="presentation" className={ props.isCurrent ? "active" : null } >
      <Link to={ `/galeri#${navItem.class}` } data-filter={ `.${navItem.class}` } onClick={props.handleClick} >
      <span>{navItem.name}</span>
      </Link>
    </li>
  );
};

export default GalleryNav;
