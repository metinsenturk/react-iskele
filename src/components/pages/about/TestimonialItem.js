import React from "react";

const TestimonialItem = props => {
  const testimonialItem = props.testimonialItem;
  
  return (
    <div className="testimonials__wrapper">
      <div className="testimonials__item">
        <div className="testimonials__img">
          <img
            className="img-responsive"
            src={"http://localhost:3000/assets/img/" + testimonialItem.image.url}
            alt={testimonialItem.image.alt}
          />
        </div>
        <div className="testimonials__caption">
          <h3 className="testimonials_caption__name">
            {testimonialItem.fullName}
          </h3>
          <p className="testimonials_caption__prof">
            {testimonialItem.profession}
          </p>
          <p className="testimonials_caption__text">
            {testimonialItem.testimonial}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
