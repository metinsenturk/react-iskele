import React from "react";
import {Link} from "react-router-dom";
 
const HomeRoomItem = props => {
  const room = props.room;
  return (
    <div className="col-sm-6">
      <figure className="best-rooms__item">
        <img
          src={"assets/img/" + room.featureImage}
          className="img-responsive"
          alt={room.featureImageAlt}
        />
        <figcaption>
          <h3>{room.roomName}</h3>
          {/*<div className="item__price">
            {room.roomCurrency + "" + room.roomPrice}{" "}
            <small>/ {room.roomPricePerInterval}</small>
          </div>*/}
          <p className="item__desc">{room.roomDescription}</p>
          <Link to={`/odalar/${room.roomSlug}`} className="btn-book">
            Odayı İnceleyin &nbsp;
            <i className="icon ion-chevron-right" />
            <i className="icon ion-chevron-right" />
          </Link>
        </figcaption>
      </figure>
    </div>
  );
};

export default HomeRoomItem;
