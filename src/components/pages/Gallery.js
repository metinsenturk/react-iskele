import React from "react";
import Helmet from "react-helmet";
import Breadcrumb from "./Breadcrumb";
import GalleryDetail from "./gallery/GalleryDetail";

const Gallery = props => (
  <div>
    <Helmet
      title="Fotoğraflarla İskele Butik Otel."
      link={[{ rel: "canonical", href: "https://iskeleotel.com/galeri" }]}
      meta={[
        {
          name: "description",
          content: "Butik Otelin her kösesini fotoğrafladık. Otelin bahçesinden sahildeki plaja kadar."
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "İskele Butik Otel Resimleri. Bahçe, Yemek Salonu ve fazlasi." },
        { property: "og:url", content: "https://iskeleotel.com/galeri" }
      ]}
    />
    <Breadcrumb
      contentBackgroundImage="genel-7.jpg"
      contentTitle="İskele Butik Otel Fotoğrafları"
      contentDescription="Sizin için odaların, genel otel görünümünün, Sivrice Koyu'nun, Assos Sahilinin fotoğraflarını çektik."
      breadcrumbCurrent="Fotoğraflar"
    />
    <GalleryDetail { ...props } />
  </div>
);

export default Gallery;
