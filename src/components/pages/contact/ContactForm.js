import React from "react"

const ContactForm = (props) => {
    return (
        <div className="section-contacts__form_body">
              <p className="section-contacts__title">İletişim Formu</p>

              <div className="alert" id="form_message" role="alert" />

              <form
                className="contacts__form"
                data-netlify="true"
                data-netlify-recaptcha="true"
                name={props.formName}
              >
                <div className="form-group">
                  <label htmlFor="email" className="sr-only">
                    E-posta Adresi
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="E-posta adresiniz"
                  />
                  <span className="help-block" />
                </div>

                <div className="form-group">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Adınız"
                  />
                  <span className="help-block" />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    rows="6"
                    placeholder="Mesajınız"
                  />
                  <span className="help-block" />
                </div>

                <div className="form-group">
                  <small className="text-muted">
                    * Tüm alanlar zorunludur.
                  </small>
                </div>
                <div data-netlify-recaptcha="true" />
                <button type="submit" className="btn btn-default">
                  Gönder
                </button>
              </form>
            </div>
    );
}

export default ContactForm;