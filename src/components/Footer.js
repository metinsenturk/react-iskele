import React from "react";
import { Link } from "react-router-dom";
import Social from "./Social";

const Footer = props => (
  <footer className="section__footer">
    <div className="container">
      <div className="footer__body">
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-sm-push-4 col-md-6 col-md-push-3">
            <div className="footer__item">
              <h2 className="brand__logo">{props.hotel_name}</h2>
              <p className="brand__sublogo">{props.hotel_snag}</p>
              <Social
                url_twitter="http://twitter.com/iskeleoteli"
                url_fb="http://fb.com/iskeleoteli"
                url_instagram="http://instagram.com/iskeleoteli"
              />
              <p>Pansiyonun fiziki yapısından dolayı engelli misafir kabul edememekteyiz.</p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-sm-pull-4 col-md-3 col-md-pull-6">
            <div className="col-xs-5">
              <div className="footer__item">
                <ul className="footer__links">
                  <li>
                    <Link to="/">Anasayfa</Link>
                  </li>
                  <li>
                    <Link to="/hakkimizda">Hakkımızda</Link>
                  </li>
                  <li>
                    <Link to="/odalar">Odalar</Link>
                  </li>
                  <li>
                    <Link to="/galeri">Galeri</Link>
                  </li>
                  <li>
                    <Link to="/iletisim">İletişim</Link>
                  </li>
                  <li>
                    <Link to="assets/files/Surdurulebilirlik-Politika-Belgesi-İSKELE-PANS.pdf" target="_blank">Surdurulebilirlik Politikasi</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-7">
              {/*
              <div className="footer__item">
                <ul className="footer__links">
                  <li>
                    <Link to="/assos-antik-kent">Assos Antik Kent</Link>
                  </li>
                  <li>
                    <Link to="/assos-otel">Assos'da Konaklama</Link>
                  </li>
                  <li>
                    <Link to="/sivrice-koyu">Sivrice Koyu</Link>
                  </li>
                  <li>
                    <Link to="/behramkale">Behramkale</Link>
                  </li>
                  <li>
                    <Link to="/bektas">Bektaş Köyü</Link>
                  </li>
                </ul>
              </div>
            
              */}
              </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-3">
            <div className="footer__item">
              <h3 className="newsletter__title">Bültene Kayıt Olun</h3>
              <p className="newsletter__subtitle">
                İletişimde kalın, Ege Sahilinin en güzel yerleriyle tanışın.
              </p>

              <div id="mc_embed_signup">
                <form
                  className="newsletter__form validate"
                  data-netlify="true"
                  data-netlify-recaptcha="true"
                  name="subscribe-form"
                >
                  <div id="mc_embed_signup_scroll">
                    <div className="mc-field-group form-group">
                      <label htmlFor="mce-EMAIL" className="sr-only">
                        E-post Adresi
                      </label>
                      <input
                        type="email"
                        className="required email form-control newsletter_input"
                        placeholder="Eposta adresiniz"
                      />
                    </div>
                    
                    <div className="clear">
                      <button
                        type="submit"
                        className="btn btn-default btn-newsletter"
                      >
                        <i className="icon ion-paper-airplane" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="row">
          <div className="col-xs-12">
            <hr />
            <p className="footer_copyright__text">
              &#169; 2020 İskele Otel. Tüm Hakları Saklıdır.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
