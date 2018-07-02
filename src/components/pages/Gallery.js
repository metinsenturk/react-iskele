import React from "react";
import Helmet from "react-helmet";

const Gallery = props => (
  <div>
    <Helmet
      title="Fotoğraflarla İskele Butik Otel."
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
  </div>
);

export default Gallery;
