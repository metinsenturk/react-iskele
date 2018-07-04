import React from "react";

const RoomInfo = props => {
  return (
    <div className="room_detail__body">
      <div
        id="room-detail__carousel"
        className="owl-carousel owl-theme room-detail__gallery"
      >
        <div className="room_gallery__item">
          <img
            src="assets/img/gallery_img1.jpg"
            className="img-responsive"
            alt="..."
          />
        </div>
        <div className="room_gallery__item">
          <img
            src="assets/img/gallery_img2.jpg"
            className="img-responsive"
            alt="..."
          />
        </div>
        <div className="room_gallery__item">
          <img
            src="assets/img/gallery_img4.jpg"
            className="img-responsive"
            alt="..."
          />
        </div>
        <div className="room_gallery__item">
          <img
            src="assets/img/gallery_img7.jpg"
            className="img-responsive"
            alt="..."
          />
        </div>
      </div>
      <div className="room_price__body">
        <h2 className="room__name">Deluxe double room</h2>
        <p className="room__price">
          <span>$165</span> / night
        </p>
      </div>
      <p className="subheading">Room description</p>
      <div className="room__desc">
        A wonderful serenity has taken possession of my entire soul, like these
        sweet mornings of spring which I enjoy with my whole heart. I am alone,
        and feel the charm of existence in this spot, which was created for the
        bliss of souls like mine. I am so happy, my dear friend, so absorbed in
        the exquisite sense of mere tranquil existence. When, while the lovely
        valley teems with vapour around me and the meridian.
      </div>
      <div className="room__desc">
        A wonderful serenity has taken possession of my entire soul, like these
        sweet mornings of spring which I enjoy with my whole heart. I am alone,
        and feel the charm of existence in this spot, which was created for the
        bliss of souls like mine.
      </div>
      <a href="reservation.html" className="btn">
        Book this room now
      </a>
    </div>
  );
};

export default RoomInfo;
