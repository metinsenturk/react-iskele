import React from "react";
import Helmet from "react-helmet";
import Breadcrumb from "./Breadcrumb";
import ContactDetails from "./contact/ContactDetails";

const Contact = props => (
  <div>
    <Helmet
      title="İletişime Geçin."
      link={[
        { rel: "canonical", href: "https://iskeleotel.com/iletisim" }
      ]}
      meta={[
        {
          name: "description",
          content:
            "İskele Koyu'nu bizden dinleyin. Ayvacık Çanakkale'nin en güzel koyu'nu tanıtalım."
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "İskele Koyunu bize sorun." },
        { property: "og:url", content: "https://iskeleotel.com/iletisim" }
      ]}
    />
    <Breadcrumb
      contentBackgroundImage="2020-02-19.jpeg"
      contentTitle="Bizimle İletişime Geçin."
      contentDescription="Otelimiz veya Sivrice Koyu hakkında sorularınız varsa, bize aşağıdaki bilgilerden ulaşabilirsiniz."
      breadcrumbCurrent="İletişim"
    />
    <ContactDetails contactInfo={props.contactInfo}      
    />
  </div>
);

export default Contact;
