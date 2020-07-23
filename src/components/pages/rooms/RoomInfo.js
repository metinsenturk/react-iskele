import React from "react";
import { Link } from "react-router-dom";

import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './overrides.css';  

const RoomInfo = props => {
  const room = props.room;

  return (
    <div className="room_detail__body">
    <Carousel showThumbs={false} useKeyboardArrows={true} emulateTouch={true}>
    {room.images.map((image, index) => <div className="room_gallery__item" key={index}>
          <img
            src={"../assets/img/" + image.url}
            className="img-responsive"
            alt={image.alt}
          />
          </div>)}
    </Carousel>
      <div className="room_price__body">
        <h2 className="room__name">{room.roomName}</h2>
        {/* <p className="room__price">
          <span>{room.roomCurrency}{room.roomPrice}</span> / {room.roomPricePerInterval}
        </p> */}
      </div>
      <p className="subheading">Oda Hakkında Bilgiler</p>
      <div className="room__desc">
        {room.roomDescription}
      </div>
      <Link to="/rezervasyon" className="btn">Odayı Rezerve Edin</Link>
    </div>
  );
};

export default RoomInfo;
