import React from "react";
import {Link} from "react-router-dom";

const AboutInfo = props => {
  return (
    <div>
      <section className="section__about-alt">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="section__title">
                <strong>İskele Otel</strong>'e Hoşgeldiniz
              </h2>
              <div className="divider">
                <hr className="line1" />
                <hr className="line2" />
                <hr className="line1" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="section_about__content">
              <div className="col-md-6">
                <div className="about__pic">
                  <img
                    src="assets/img/genel/2020-02-16.jpeg"
                    className="img-responsive"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="about__desc">
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
                  <p>Otelimiz, doğanın tüm unsurları ile birlikte sürdürülebilir bir gezegende, insani var oluşun sağlıklı bir şekilde devamlılığının sağlanması için, tüm dünya olarak birlikte çaba sarf edilmesi gereken bir dönemde olunduğunun bilincindedir.
                  Daha fazla bilgi icin <Link to="assets/files/Surdurulebilirlik-Politika-Belgesi-İSKELE-PANS.pdf" target="_blank">Surdurulebilirlik Politika'mizi</Link> okuyun.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutInfo;
