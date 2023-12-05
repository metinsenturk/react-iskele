import React from "react";
import Helmet from "react-helmet";

import Breadcrumb from "./Breadcrumb";
import AboutInfo from "./about/AboutInfo";
import Testimonials from "./about/Testimonials";
import AboutServices from "./about/AboutServices";

const About = props => (
  <div>
    <Helmet
      title="İskele Otelin Sahipleriyle Tanışın."
      link={[
        { rel: "canonical", href: "https://iskeleotel.com/hakkimizda" }
      ]}
      meta={[
        {
          name: "description",
          content:
            "Behram Köyü'nünün İskele Koyunda bir butik otel. Otelin eviniz olduğu yer. Ev sahipleriyle tanışın."
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "İskele Oteli Hakkında" },
        {
          property: "og:url",
          content: "https://iskeleotel.com/hakkimizda"
        }
      ]}
    />
    <Breadcrumb
      contentBackgroundImage="genel-1.jpg"
      contentTitle="İskele Oteli - Hakkında"
      contentDescription="Assos, Sivrice ve İskele'ye eşit uzaklıkta bir Butik Otel. Aile İşletmesi. Bizi Tanıyın."
      breadcrumbCurrent="Hakkımızda"
    />
    <AboutInfo />
    <Testimonials />
    <AboutServices hotelFeatures={props.hotelFeatures} />
  </div>
);

export default About;
