import React from "react";
import Helmet from "react-helmet";

const Rooms = props => (
  <div>
    <Helmet
      title="İskele Butik Otel'de Odalar."
      link={[{ rel: "canonical", href: "https://iskelebutikhotel.com/odalar" }]}
      meta={[
        {
          name: "description",
          content:
            "Bir tatilde aradığınız herşeyin olduğu odalar. Tam donanımlı odalarımızda İskele Koyu'nun ve oda servisinin tadını çıkarın."
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "İskele Butik Otel Odaları" },
        { property: "og:url", content: "https://iskelebutikhotel.com/odalar" }
      ]}
    />
  </div>
);

export default Rooms;
