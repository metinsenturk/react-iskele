import React from "react";
import TestimonialItem from "./TestimonialItem";

class Testimonials extends React.Component {
  
  constructor(props) {
    super(props);
    let testimonials = [
      {
        fullName: "Kemal Dorukan",
        profession: "Ekim, 2018",
        testimonial: `Çok tatlı bir aile işletmesi. Denize yakınlığıyla bizi tavladı. Huzurlu ve sakin bir alanda yer almakta ve geceleri tüm yıldızları sayabiliceğiniz kadar temiz bir havası var.`,
        image: {
          url: "testimonials_img1.jpg",
          alt: ""
        },
        dateCreated: new Date()
      },
      {
          fullName: "Sevil Evcimen",
          profession: "Ağustos, 2018",
          testimonial: "Yaz vakti ailemle geçirebileceğim en güzel tatili yaşadım. Öncelikle belirtmeliyim ki asos gelip de görmeniz gereken bir yer. Tarihi kimliği ve mükkemmel plajıyla günümüzü doldurdu. Herkese tavsiye ederim.",
          image: {
            url: "testimonials_img2.jpg",
            alt: ""
          },
          dateCreated: new Date()
        },
        {
          fullName: "Ayşegül Soydan",
          profession: "Eylül, 2018",
          testimonial: `Gayet başarılı bir aile işletmesi. Zengin mutfağıyla Neriman ablanın otelinden başka bir yerde yemeği düşünmessiniz. Temiz, düzenli ve sakinliğiyle iskele otel yeniden gelmek istediğim bir yer.`,
          image: {
            url: "testimonials_img2.jpg",
            alt: ""
          },
          dateCreated: new Date()
        },
    ];
    this.testimonials = testimonials
  }

  reloadOwl() {
    // eslint-disable-next-line
    let doc = this.refs.testimonials__carousel
    /* didn't figure out this part :/
    doc.owlCarousel({
      margin:10,
      slideSpeed:150,
          responsiveClass:true,
          responsive:{
            0:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
    */
  }

  componentDidMount() {
    this.reloadOwl();
  }
  
  render() {
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
                ref="testimonials__carousel"
              >
              {this.testimonials.map((testimonial, index) => (
                  <TestimonialItem key={index} testimonialItem={testimonial} />
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Testimonials;
