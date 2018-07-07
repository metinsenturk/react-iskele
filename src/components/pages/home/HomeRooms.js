import React from "react";
import { Link } from "react-router-dom";
import HomeRoomItem from "./HomeRoomItem";

const HomeRooms = props => {
  const rooms = props.rooms;
  return (
    <section className="section__best-rooms">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="section__title">
              <strong>Odalarımız</strong>
            </h2>
            <div className="divider">
              <hr className="line1" />
              <hr className="line2" />
              <hr className="line1" />
            </div>
            <p className="section__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              sit dicta quae natus quasi ratione quis id, tenetur atque
              blanditiis.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="best-rooms__content">
          <div className="row">
            {rooms.slice(0,2).map(room => <HomeRoomItem room={room} />)}
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="rooms__button">
                <Link to="/odalar" className="btn">
                  Tüm Odaları Görün
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeRooms;
