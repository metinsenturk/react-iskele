import React from "react";
import Helmet from "react-helmet";
import Breadcrumb from "./Breadcrumb";
import ContactDetails from "./contact/ContactDetails";

const Contact = props => (
  <div>
    <Helmet
      title="İletişime Geçin."
      link={[
        { rel: "canonical", href: "https://iskelebutikhotel.com/iletisim" }
      ]}
      meta={[
        {
          name: "description",
          content:
            "İskele Koyu'nu bizden dinleyin. Ayvacık Çanakkale'nin en güzel koyu'nu tanıtalım."
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "İskele Koyunu bize sorun." },
        { property: "og:url", content: "https://iskelebutikhotel.com/iletisim" }
      ]}
    />
    <Breadcrumb
      contentBackgroundImage="contacts_bg.jpg"
      contentTitle="Bizimle İletişime Geçin."
      contentDescription="Otelimiz veya Sivrice Koyu hakkında sorularınız varsa, bize aşağıdaki bilgilerden ulaşabilirsiniz."
      breadcrumbCurrent="İletişim"
    />
    <ContactDetails
      address={props.contactInfo.address}
      phone={props.contactInfo.phone}
      phone2={props.contactInfo.phone2}
      email={props.contactInfo.email}
    />
  </div>
);

export default Contact;
