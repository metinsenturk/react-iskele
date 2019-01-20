import React from "react";
import { Link } from "react-router-dom";

const HomeAbout = props => {
  return (
    <section className="section__about">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="section__title">
              <strong>İskele Otel</strong>, Yeşilin ve Mavinin Adresi
            </h2>
            <div className="divider">
              <hr className="line1" />
              <hr className="line2" />
              <hr className="line1" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="section_about__content">
            <div className="col-md-6">
              <div className="about__pic">
                <img
                  src="assets/img/about_img.jpg"
                  className="img-responsive"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about__desc">
                <p className="about_desc__subtitle">Hakkımızda</p>
                <h3 className="about_desc__title">
                  Yeşil ve mavinin bir arada olduğu huzura dolabileceğiniz
                  denize 60 metre uzaklığı ile manzaranın keyfini
                  çıkarabileceğiniz bir otel.
                </h3>
                <p className="about_desc__desc">
                  İskele Otel, kargaşa ve kitle turuzminden uzak, sessiz ve
                  huzurlu ortamında misafirlerimize en sıcak ve içten tatili
                  sunar. Deniz ve plaj keyfinin yanında bölgenin mütiş
                  coğrafyasında doğa yürüyüşleri, antik kent Assos,
                  Gülpınar’daki Apollon Smintheus Tapınağını ziyaret edebilir.
                  Yakındaki balıkçı limanı Babakale’de taze balıkçıların keyfini
                  çıkarabilirsiniz.
                  <br />
                  <br />
                  Doğal hayatı ve doğal üretimi hayamızın temeline kaydettik.
                  Otelimizin arka bahçesinde yetiştirdiğimiz sebze ve meyveler
                  ile İskele Otel’de anne eli değmiş doğanın içinde muhteşem
                  yemekleri kuş ve ağustos böceklerinin sesleri eşliğinde,
                  geceleri adaların ışıkları ve gökyüzünde görebileceğiniz en
                  parlak yıldızlarla yemeğinizi yiyebilirsiniz.
                </p>
                <h4 className="about_desc__quote">
                  İskele Otel Midilli Adasına 6 mil uzaklıktadır. Otelimiz
                  Assos’a 20 km, Edremit Kocaseyit Havaalanına 80 km, Çanakkale
                  Havaalanına 110 km uzaklıktadır.
                </h4>

                <Link to="/hakkimizda" className="btn btn-default">
                  Bizi Keşfedin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
