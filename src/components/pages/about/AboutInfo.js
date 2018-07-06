import React from "react";

const AboutInfo = props => {
  return (
    <div>
      <section className="section__about-alt">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="section__title">
                <strong>İskele Butik Otel</strong> 'e Hoşgeldiniz
              </h2>
              <div className="divider">
                <hr className="line1" />
                <hr className="line2" />
                <hr className="line1" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="section_about__content">
              <div className="col-md-6">
                <div className="about__pic">
                  <img
                    src="assets/img/about_img.jpg"
                    className="img-responsive"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="about__desc">
                  <h3 className="about_desc__title">
                    Probably the best place to enjoy your life
                  </h3>
                  <p className="about_desc__desc">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite sense of mere tranquil existence. When, while the
                    lovely valley teems with vapour around me, and the meridian
                    sun strikes the upper surface of the impenetrable foliage of
                    my trees, and but a few stray gleams steal into the inner
                    sanctuary.
                  </p>
                  <h4 className="about_desc__quote">
                    The European languages are members of the same family. Their
                    separate existence is a myth. For science, music, sport,
                    etc, Europe uses the same vocabulary.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutInfo;
