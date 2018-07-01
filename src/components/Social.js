import React from 'react'

const Social = (props) => (
    <ul className="social__icons">
            <li className="social-icons__item">
              <a href={ props.url_twitter } target="_blank">
                <i className="icon ion-social-twitter" aria-hidden="true" />
              </a>
            </li>
            <li className="social-icons__item">
              <a href={ props.url_fb } target="_blank">
                <i className="icon ion-social-facebook" aria-hidden="true" />
              </a>
            </li>
            <li className="social-icons__item">
              <a href={ props.url_instagram } target="_blank">
                <i className="icon ion-social-instagram" aria-hidden="true" />
              </a>
            </li>
          </ul>
);

export default Social;