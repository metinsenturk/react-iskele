import React from "react";
import Helmet from "react-helmet";

const Places = ({ match }) => (
  <div>
    <Helmet
      title={ "İskele Butik Otel ve " + match.params.keyword }
      meta={[
        {
          name: "description",
          content:
            ""
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "İskele Butik Otelin Yakınındaki Yerler: " + match.params.keyword },
        { property: "og:url", content: "https://iskelebutikhotel.com/yerler/" + match.params.keyword }
      ]}
    />
  </div>
);

export default Places;
