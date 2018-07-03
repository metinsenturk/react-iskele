import React from "react";
import Helmet from "react-helmet";

const About = props => (
  <div>
    <Helmet
      title="İskele Butik Otelin Sahipleriyle Tanışın."
      link={[{ rel: "canonical", href: "https://iskelebutikhotel.com/hakkimizda" }]}
      meta={[
        {
          name: "description",
          content:
            "Behram Köyü'nünün İskele Koyunda bir butik otel. Otelin eviniz olduğu yer. Ev sahipleriyle tanışın."
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "İskele Butik Otel Hakkında" },
        { property: "og:url", content: "https://iskelebutikhotel.com/hakkimizda" }
      ]}
    />
  </div>
);

export default About;
