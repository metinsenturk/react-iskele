import React from "react";

const ContactWidget = props => {
  return (
    <div className="contacts__info">
      <p className="contacts_info__title">İletişim Bilgileri</p>
      <ul className="contacts_info__content">
        <li>
          <p className="contact-info-text">
            Bize sorun. Aşağıdaki form ile bize e-posta yollayabilir veya
            telefon ve e-posta ile bizimle iletişime geçebilirsiniz.
          </p>
        </li>
        <li>
          <i className="icon ion-android-pin" />
          <div className="contact-info-content">
            <div className="title">Addres</div>
            <div className="description">{props.address}</div>
          </div>
        </li>
        <li>
          <i className="icon ion-android-call" />
          <div className="contact-info-content">
            <div className="title">Telefon/ Telefon 2</div>
            <div className="description">
              <a href={"tel:" + props.phone}>{props.phone}</a> / {props.phone2}
            </div>
          </div>
        </li>
        <li>
          <i className="icon ion-android-mail" />
          <div className="contact-info-content">
            <div className="title">E-posta</div>
            <div className="description">
              <a
                href={
                  "mailto:" +
                  props.email +
                  "?subject=%C4%B0skele%20Butik%20Hotel%20-%20Bilgi%20Alma"
                }
                target="_blank"
              >
                {props.email}
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactWidget;
