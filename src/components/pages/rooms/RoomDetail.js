import React from "react";
import RoomInfo from "./RoomInfo";
import RoomFeatures from "./RoomFeatures";
import RoomContactInfo from "./RoomContactInfo";

const RoomDetail = props => {
  const contactInfo = props.contactInfo;
  const room = props.rooms.filter(
    item => item.roomSlug === props.match.params.roomslug
  )[0];

  return (
    <div>
      <section className="section__text-header">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="welcome__content">
                <h1 className="welcome_content__title">{room.roomName}</h1>
                <div className="divider blog-divider">
                  <hr className="line1" />
                  <hr className="line2" />
                  <hr className="line1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section__room-detail">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-8">
              <RoomInfo room={room} />
            </div>
            <div className="col-sm-5 col-md-4">
              <div className="room-detail__sidebar">
                <RoomFeatures />
                <RoomContactInfo
                  address={contactInfo.address}
                  phone={contactInfo.phone}
                  phone2={contactInfo.phone2}
                  email={contactInfo.email}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomDetail;
