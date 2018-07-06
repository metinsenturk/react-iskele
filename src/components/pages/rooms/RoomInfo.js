import React from "react";
import { Link } from "react-router-dom";

const RoomInfo = props => {
  const room = props.room;

  return (
    <div className="room_detail__body">
      <div
        id="room-detail__carousel"
        className="owl-carousel owl-theme room-detail__gallery"
      >
      {room.images.map((image, index) => {
        return (
          <div className="room_gallery__item" key={index}>
          <img
            src={"http://localhost:3000/assets/img/" + image.url}
            className="img-responsive"
            alt={image.alt}
          />
          </div>
        );
      })}
        
      </div>
      <div className="room_price__body">
        <h2 className="room__name">{room.roomName}</h2>
        <p className="room__price">
          <span>{room.roomCurrency}{room.roomPrice}</span> / {room.roomPricePerInterval}
        </p>
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
