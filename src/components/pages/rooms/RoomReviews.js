import React from "react";
import RoomReviewItem from "./RoomReviewItem";

const RoomReviews = props => {
    
const reviews = []
      return (
        <div className="room__reviews">
        <p className="subheading">Room reviews</p>
        <ul className="reviews__list">
          {reviews.map( (review) => {
              <RoomReviewItem review={review} />
          })} 
        </ul>
        <p className="subheading">Leave a review</p>
        <form className="comments__form" data-animate-in="animateUp">
          
          <div className="form-group">
            <label for="name">Name (Required)</label>
            <input type="text" name="name" className="form-control" id="name" placeholder="Enter Your Full Name"/>
          </div>

          <div className="form-group">
            <label for="email">Email address</label>
            <input type="email" name="email" className="form-control" id="email" placeholder="Enter Your E-mail"/>
          </div>

          <div className="form-group">
            <label for="message">Comment (Required)</label>
            <textarea name="message" className="form-control" rows="6" id="message" placeholder="Enter Your Comment"></textarea>
            <span className="help-block"></span>
          </div>
          
          <button type="submit" className="btn">
            Submit review
          </button>
        </form>
      </div> 
      );

};

export default RoomReviews;
