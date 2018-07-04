import React from "react";
import Helmet from "react-helmet";

import Breadcrumb from "./Breadcrumb";

const About = props => (
  <div>
    <Helmet
      title="İskele Butik Otelin Sahipleriyle Tanışın."
      link={[
        { rel: "canonical", href: "https://iskelebutikhotel.com/hakkimizda" }
      ]}
      meta={[
        {
          name: "description",
          content:
            "Behram Köyü'nünün İskele Koyunda bir butik otel. Otelin eviniz olduğu yer. Ev sahipleriyle tanışın."
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "İskele Butik Otel Hakkında" },
        {
          property: "og:url",
          content: "https://iskelebutikhotel.com/hakkimizda"
        }
      ]}
    />
    <Breadcrumb
      contentBackgroundImage="about_bg.jpg"
      contentTitle="Butik Otel Hakkında"
      contentDescription="Assos, Sivrice ve İskele'ye eşit uzaklıkta bir Butik Otel. Aile İşletmesi. Bizi Tanıyın."
      breadcrumbCurrent="Hakkımızda"
    />
  </div>
);

export default About;
