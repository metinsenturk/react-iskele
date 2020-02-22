import React from "react";
import Helmet from "react-helmet";
import { Redirect } from "react-router-dom";

const Places = ({ match }) => {
  const urls = [
    {
      slug: "assos",
      url: "https://iskeleotel.com/assos",
      title: "Assos Otel | İskele Butik Otel",
      description: "Assos antik kenti ve assos antik tiyatro'da tatil için otel arayışınız son bulsun. İskele butik otel'de konaklayın.",
      og_title: "Assos antik kenti",
      og_type: "website",
      og_url: "https://iskeleotel.com/assos",
      heading: "Assos",
      paragraph: "Assos tarihten bu yana ilgi odağı olmuş bir yerdir."
    },
    {
      slug: "sivrice",
      url: "",
      title: "",
      description: "",
      og_title: "",
      og_type: "",
      og_url: "",
      heading: "",
      paragraph: ""
    },
    {
      slug: "behramkale",
      url: "",
      title: "",
      description: "",
      og_title: "",
      og_type: "",
      og_url: "",
      heading: "",
      paragraph: ""
    },
    {
      slug: "sivrice-koyu",
      url: "",
      title: "",
      description: "",
      og_title: "",
      og_type: "",
      og_url: "",
      heading: "",
      paragraph: ""
    },
    {
      slug: "bektas",
      url: "",
      title: "",
      description: "",
      og_title: "",
      og_type: "",
      og_url: "",
      heading: "",
      paragraph: ""
    },
    {
      slug: "assos-antik-tiyatro",
      url: "",
      title: "",
      description: "",
      og_title: "",
      og_type: "",
      og_url: "",
      heading: "",
      paragraph: ""
    },
    {
      slug: "assos-antik-kent",
      url: "",
      title: "",
      description: "",
      og_title: "",
      og_type: "",
      og_url: "",
      heading: "",
      paragraph: ""
    },
    {
      slug: "assos-otel",
      url: "",
      title: "",
      description: "",
      og_title: "",
      og_type: "",
      og_url: "",
      heading: "",
      paragraph: ""
    },
    {
      slug: "behramkale-otel",
      url: "",
      title: "",
      description: "",
      og_title: "",
      og_type: "",
      og_url: "",
      heading: "",
      paragraph: ""
    },
    {
      slug: "sivrice-otel",
      url: "",
      title: "",
      description: "",
      og_title: "",
      og_type: "",
      og_url: "",
      heading: "",
      paragraph: ""
    }
  ]

  if (urls.filter(v => v.slug === match.params.keyword).length > 0) {
    let url = urls.filter(v => v.slug === match.params.keyword)[0];
    return (
      <div>
        <Helmet
          title={url.title}
          link={[
            {
              rel: "canonical",
              href: url.url
            }
          ]}
          meta={[
            {
              name: "description",
              content: url.description
            },
            {
              property: "og:type",
              content: url.og_type
            },
            {
              property: "og:title",
              content: url.og_title
            },
            {
              property: "og:url",
              content: url.og_url
            }
          ]}
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>{ url.heading }</h2>
              <p>{ url.paragraph }</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect from="*" to="/404/sayfa-bulunamadi" />;
  }
};

export default Places;
