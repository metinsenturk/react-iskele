import React from "react";

const RoomFeatures = props => {
  return (
    <div className="room_features__body">
      <p className="subheading">Odanın Özellikleri</p>
      <ul className="room__features">
        <li className="feature__item">
          <i className="icon ion-android-people" />
          <div className="feature_item__title">Çift Kişilik Yatak</div>
        </li>
        <li className="feature__item">
          <i className="icon ion-coffee" />
          <div className="feature_item__title">Kahvaltı Dahil</div>
        </li>
        <li className="feature__item">
          <i className="icon ion-android-sunny" />
          <div className="feature_item__title">Klima</div>
        </li>
        <li className="feature__item">
          <i className="icon ion-wineglass" />
          <div className="feature_item__title">Mini bar</div>
        </li>
        <li className="feature__item">
          <i className="icon ion-wifi" />
          <div className="feature_item__title">Ücretsiz Wi-Fi</div>
        </li>
        <li className="feature__item">
          <i className="icon ion-model-s" />
          <div className="feature_item__title">Ücretsiz Araç Parkı</div>
        </li>
      </ul>
    </div>
  );
};

export default RoomFeatures;