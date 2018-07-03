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
                url_twitter="http://twitter.com/iskelebutikhotel"
                url_fb="http://fb.com/iskelebutikhotel"
                url_instagram="http://instagram.com/iskelebutikhotel"
              />
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
                </ul>
              </div>
            </div>
            <div className="col-xs-7">
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
                  method="POST"
                  action="https://script.google.com/macros/s/AKfycbziALJoJ-PKXiY86x3ELEh0ALfenpBguio5TOGFLITnYXXa9DBK/exec"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                >
                  <div id="mc_embed_signup_scroll">
                    <div className="mc-field-group form-group">
                      <label htmlFor="mce-EMAIL" className="sr-only">
                        E-post Adresi
                      </label>
                      <input
                        type="email"
                        value={props.email}
                        name="EMAIL"
                        className="required email form-control newsletter_input"
                        id="mce-EMAIL"
                        placeholder="Eposta adresiniz"
                      />
                    </div>
                    <div id="mce-responses" className="clear">
                      <div className="response" />
                      <div className="response" id="mce-success-response" />
                    </div>
                    <div aria-hidden="true" id="mce-hidden-input">
                      <input
                        type="text"
                        name="b_507744bbfd1cc2879036c7780_4523d25e1b"
                        tabIndex="-1"
                        value=""
                      />
                    </div>
                    <div className="clear">
                      <button
                        type="submit"
                        className="btn btn-default btn-newsletter"
                        id="mc-embedded-subscribe"
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
              &#169; 2018 İskele Butik Otel. Tüm Hakları Saklıdır.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
