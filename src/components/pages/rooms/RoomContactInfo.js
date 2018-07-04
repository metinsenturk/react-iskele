import React from "react";

const RoomContactInfo = props => {
  return (
    <div className="info__body">
      <p className="info__title">İletişim Bilgileri</p>
      <ul className="info__content">
        <li>
          <p className="info-text">
            Odalar hakkında sorularınız için bizimle iletişime geçebilirsiniz.
          </p>
        </li>
        <li>
          <i className="icon ion-android-pin" />
          <div className="info-content">
            <div className="title">Address</div>
            <div className="description">{props.address}</div>
          </div>
        </li>
        <li>
          <i className="icon ion-android-call" />
          <div className="info-content">
            <div className="title">Telefon 1 / Telefon 2</div>
            <div className="description">{props.phone} / {props.phone2}</div>
          </div>
        </li>
        <li>
          <i className="icon ion-android-mail" />
          <div className="info-content">
            <div className="title">E-posta</div>
            <div className="description">{props.email}</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RoomContactInfo;
