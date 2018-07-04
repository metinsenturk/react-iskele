import React from "react";

const RoomFeatures = props => {
  return (
    <div class="room_features__body">
      <p class="subheading">Room features</p>
      <ul class="room__features">
        <li class="feature__item">
          <i class="icon ion-android-people" />
          <div class="feature_item__title">Double king bed</div>
        </li>
        <li class="feature__item">
          <i class="icon ion-coffee" />
          <div class="feature_item__title">Breakfast</div>
        </li>
        <li class="feature__item">
          <i class="icon ion-android-sunny" />
          <div class="feature_item__title">Air conditioning</div>
        </li>
        <li class="feature__item">
          <i class="icon ion-wineglass" />
          <div class="feature_item__title">Mini bar</div>
        </li>
        <li class="feature__item">
          <i class="icon ion-wifi" />
          <div class="feature_item__title">Wi-Fi service</div>
        </li>
        <li class="feature__item">
          <i class="icon ion-model-s" />
          <div class="feature_item__title">Free parking</div>
        </li>
      </ul>
    </div>
  );
};

export default RoomFeatures;