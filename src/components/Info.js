import React from 'react';
import Social from './Social'

const Info = (props) => (
  <div className="section__info">
    <div className="container">
      <div className="section_info__body">
        <div className="info__column-left">
          <div className="section_info__contact hidden-xs">
            <p>
              <i className="icon ion-android-pin" /> {props.address}
            </p>
          </div>
          <div className="section_info__contact hidden-xs">
            <p>
              <i className="icon ion-android-call" /> {props.phone}
            </p>
          </div>
        </div>
        <div className="info__column-right">
          <Social 
          url_twitter="http://twitter.com/iskelebutikhotel"
          url_fb="http://fb.com/iskelebutikhotel"
          url_instagram="http://instagram.com/iskelebutikhotel" />
          <div className="dropdown lang-menu">
            <button
              className="dropdown-toggle"
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              EN
              &nbsp;
              <i className="icon ion-chevron-down" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li>
                <a href="tr">TR</a>
              </li>
            </ul>
          </div>
          {/*
          <form className="search-form hidden-xs" role="search">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
            <button type="submit" className="btn btn-default btn-search">
              <i className="icon ion-search" />
            </button>
          </form>
            */}
        </div>
      </div>
    </div>
  </div>
);

export default Info;
