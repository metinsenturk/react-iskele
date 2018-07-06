import React from "react";
import Helmet from "react-helmet";
import Breadcrumb from "./Breadcrumb"

const Reservation = (props) => {
  return (
    <div>
      <Helmet
      title="İskele Butik Otel - Rezervasyon Yapın"
      link={[{ rel: "canonical", href: "https://iskelebutikhotel.com/rezervasyon" }]}
      meta={[
        {
          name: "description",
          content: "Sivrice koyunda konaklama için rezervasyon yapın. Butik Otelimizde sizi karşılayalım."
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "İskele Butik Otele rezervasyon yapın. Rezervasyonlarınızı telefonla arayarak hızlıca yapabilirsiniz." },
        { property: "og:url", content: "https://iskelebutikhotel.com/rezervasyon" }
      ]}
    />
    <Breadcrumb
      contentBackgroundImage="reservation_bg.jpg"
      contentTitle="İskele Butik Otel Fotoğrafları"
      contentDescription="Sizin için odaların, genel otel görünümünün, Sivrice Koyu'nun, Assos Sahilinin fotoğraflarını çektik."
      breadcrumbCurrent="Fotoğraflar"
    />
    </div>
  );
};

export default Reservation;