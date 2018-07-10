import React from "react";
import { Link } from "react-router-dom";

const Template = props => (
  <section className="section__404error">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="section__content">
            <h1 className="section_content__title">404</h1>
            <h1 className="services_item__title" style={{color: 'white'}}>{props.errorTitle}</h1>
            <div className="divider">
              <hr className="line1" />
              <hr className="line2" />
              <hr className="line1" />
            </div>

            <p className="section_content__desc">{props.errorMessage}</p>

            <p className="section_content__action">
              <Link to="/">Anasayfaya Dön</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="page404__bg" />
  </section>
);

const Page404 = props => {
  switch (props.match.params.errorCode) {
    case "sayfa-bulunamadi":
      return (
        <Template
          errorTitle="Bu sayfayı Bulamadık."
          errorMessage="Lorem ipsum sit amet."
        />
      );

    default:
      return (
        <Template
          errorTitle="Bir sorun oluştu."
          errorMessage="Aradığınız sayfayı bulamadık. Sorun ile ilgili kayıt oluşturuldu. Sorun devamı halinde bizimle iletişime geçebilirsiniz."
        />
      );
  }
};

export default Page404;
