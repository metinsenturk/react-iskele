import React from "react";
import Helmet from "react-helmet";

const Contact = props => (
  <div>
    <Helmet
      title="İletişime Geçin."
      meta={[
        {
          name: "description",
          content: "İskele Koyu'nu bizden dinleyin. Ayvacık Çanakkale'nin en güzel koyu'nu tanıtalım."
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "İskele Koyunu bize sorun." },
        { property: "og:url", content: "https://iskelebutikhotel.com/iletisim" }
      ]}
    />
  </div>
);

export default Contact;
