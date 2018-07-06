import React from "react";
import TestimonialItem from "./TestimonialItem";

const Testimonials = props => {
  const testimonials = [
    {
      fullName: "Metin Senturk",
      profession: "İşci",
      testimonial: "Çok beğendik.",
      image: {
        url: "testimonials_img1.jpg",
        alt: ""
      },
      dateCreated: new Date()
    },
    {
        fullName: "Elif Çelebi",
        profession: "Hemşire",
        testimonial: "Çok güzeldi.",
        image: {
          url: "testimonials_img2.jpg",
          alt: ""
        },
        dateCreated: new Date()
      },
  ];
  return (
    <section className="section__testimonials">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="section__title">
              <strong>Memnun Kalan Misafirlerimiz</strong>
            </h2>
            <div className="divider">
              <hr className="line1" />
              <hr className="line2" />
              <hr className="line1" />
            </div>
            <p className="section__subtitle testimonials__subtitle">
              Bizimle kalan misafirlerimize sorduk. Beğenilerini paylaştık.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div
              id="testimonials__carousel"
              className="owl-carousel owl-theme testimonials__body"
            >
            {testimonials.map((testimonial) => (
                <TestimonialItem testimonialItem={testimonial} />
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
