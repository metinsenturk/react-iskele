import React from "react";
// eslint-disable-next-line 
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
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsarac.mert%2Fposts%2F10157372877339699&width=500" width="500" height="226" style={{border: 'none', overflow: 'hidden'}}scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="mert.sarac"></iframe>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyusuf.durmaz.92317%2Fposts%2F2286109678089085&width=500" width="500" height="180" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="yusuf.durmaz"></iframe>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fayse.karslioglu%2Fposts%2F10217534495657440&width=500" width="500" height="142" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="ayse.karslioglu"></iframe>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fayhan.karagoz.792%2Fposts%2F10156461908021698&width=500" width="500" height="142" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="ayhan.karagoz"></iframe>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFethiCeleb%2Fposts%2F1864250977022489&width=500" width="500" height="161" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="fethi.celebi"></iframe>
              {/* {this.testimonials.map((testimonial, index) => (
                  <TestimonialItem key={index} testimonialItem={testimonial} />
              ))} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Testimonials;
