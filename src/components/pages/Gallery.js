import React from "react";
import Helmet from "react-helmet";
import Breadcrumb from "./Breadcrumb";

const Gallery = props => (
  <div>
    <Helmet
      title="Fotoğraflarla İskele Butik Otel."
      link={[{ rel: "canonical", href: "https://iskelebutikhotel.com/galeri" }]}
      meta={[
        {
          name: "description",
          content: "Butik Otelin her kösesini fotoğrafladık. Otelin bahçesinden sahildeki plaja kadar."
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "İskele Butik Otel Resimleri. Bahçe, Yemek Salonu ve fazlasi." },
        { property: "og:url", content: "https://iskelebutikhotel.com/galeri" }
      ]}
    />
    <Breadcrumb
      contentBackgroundImage="gallery_bg.jpg"
      contentTitle="İskele Butik Otel Fotoğrafları"
      contentDescription="Sizin için odaların, genel otel görünümünün, Sivrice Koyu'nun, Assos Sahilinin fotoğraflarını çektik."
      breadcrumbCurrent="Fotoğraflar"
    />
  </div>
);

export default Gallery;
