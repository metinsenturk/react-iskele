import React from "react";
import Helmet from "react-helmet";

const Places = ({ match }) => {
  const urls = [
    "assos",
    "sivrice",
    "behramkale",
    "sivrice-koyu",
    "bektas",
    "assos-antik-tiyatro",
    "assos-antik-kent",
    "assos-otel",
    "behramkale-otel",
    "sivrice-otel"
  ];
  if (urls.includes(match.params.keyword)) {
    return (
      <div>
        <Helmet
          title={"İskele Butik Otel ve " + match.params.keyword}
          link={[
            {
              rel: "canonical",
              href: "https://iskelebutikhotel.com/" + match.params.keyword
            }
          ]}
          meta={[
            {
              name: "description",
              content: ""
            },
            {
              property: "og:type",
              content: "website"
            },
            {
              property: "og:title",
              content:
                "İskele Butik Otelin Yakınındaki Yerler: " +
                match.params.keyword
            },
            {
              property: "og:url",
              content: "https://iskelebutikhotel.com/" + match.params.keyword
            }
          ]}
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Sayfa bulunamadı.</div>;
  }
};

export default Places;
