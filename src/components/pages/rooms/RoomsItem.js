import React from "react"
import { Link } from "react-router-dom"

const RoomsItem = (props) => {
    const room = props.room;
    
    return (
        <div className="rooms__item">
            <div className="col-md-6">
              <div className="rooms__pic">
                <img src={ "assets/img/" + room.featureImage } className="img-responsive" alt={ room.featureImageAlt } />
              </div> 
            </div>
            <div className="col-md-6">
              <div className="rooms__desc">
                <div className="rooms_desc__header">
                  <h2 className="rooms_desc__title">{ room.roomName }</h2>
                  {/* <p className="rooms_desc__price"><span>{ room.roomCurrency + "" + room.roomPrice }</span> / {room.roomPricePerInterval}</p> */}
                </div> 
                <p className="rooms_desc__desc">{ room.roomDescription }</p>
                <div className="col-sm-6">
                  <ul className="rooms_desc__services">
                    <li><i className="icon ion-android-person"></i>Çift Kişilik Yatak</li>
                    <li><i className="icon ion-coffee"></i>Kahvaltı Dahil</li>
                    <li><i className="icon ion-android-sunny"></i>Klima</li>
                  </ul> 
                </div>
                <div className="col-sm-6">
                  <ul className="rooms_desc__services">
                    <li><i className="icon ion-wineglass"></i> Mini bar</li>
                    <li><i className="icon ion-monitor"></i> LCD TV</li>
                    <li><i className="icon ion-wifi"></i> Wi-Fi</li>
                  </ul> 
                </div>
                <Link className="btn btn-rooms" to={"/odalar/" + room.roomSlug}>Odanın Detayları</Link>
              </div> 
            </div>
          </div> 
    );
}

export default RoomsItem;