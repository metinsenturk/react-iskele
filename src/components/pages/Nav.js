import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <div>

      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar__collapse"
              aria-expanded="false"
            >
              <span className="sr-only">Menu</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>

            <a className="navbar-brand" href="/">
              <h3 className="navbar-brand__logo">{ props.hotel_name }</h3>
              <p className="navbar-brand__sublogo">{ props.hotel_snag }</p>
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbar__collapse">
            <ul className="nav navbar-nav navbar-left">
            <li>
                <Link to="/">Anasayfa</Link>
              </li>
              <li>
                <Link to="/hakkimizda">Hakkımızda</Link>
              </li>
              <li className="dropdown">
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Odalar <i className="icon ion-chevron-down" />
                </a>
                <ul className="dropdown-menu">
                <li>
                    <Link to="/odalar">Tüm Odalar</Link>
                  </li>
                  <li>
                    <Link to="/odalar/tek-kisilik-oda">Çift Kişilik Oda</Link>
                  </li>
                  <li>
                    <Link to="/odalar/cift-kisilik-oda">Aile Odasi</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="https://fb.com/iskeleoteli/book/" target="_blank" rel="noopener noreferrer">                        
                <span className='icon ion-link'></span> Rezervasyion Yap
                </a>
              </li>
              <li className="dropdown">
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Galeri <i className="icon ion-chevron-down" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/galeri">Tüm Fotoğraflar</Link>
                  </li>
                  <li>
                    <Link to="/galeri#cay-bahcesi">Cay Bahçesi</Link>
                  </li>
                  <li>
                    <Link to="/galeri#deniz">Deniz Kenarı</Link>
                  </li>
                  <li>
                    <Link to="/galeri#restorant">Restorant</Link>
                  </li>
                  <li>
                    <Link to="/galeri#iskele">İskele</Link>
                  </li>
                </ul>
              </li>
              <li>
              <Link to="/iletisim">İletişim</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
