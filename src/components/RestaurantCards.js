import React from 'react'
import { CDN_URL, STAR_URL } from '../utils/constants';

const RestaurantCards = (props) => {
    const {resData} = props;
  
    const {cloudinaryImageId, name, avgRating, address, deliveryTime} = resData?.data;
  
    const maxLength = 60; // Maximum length for the text
    const truncateText = (text) => {
      return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    };
  
    // console.log(resData.data.name);
    return (
      <div className="card">
        <div className="img-div">
          <img src= {CDN_URL+ cloudinaryImageId} alt="dish-img"></img>
        </div>
        <div className="detail-cont">
          <h4>{name}</h4>
          <div className="rating-cont">
            <img
              className="star"
              src= {STAR_URL}
            ></img>
            <p>{avgRating} • {deliveryTime} min</p>
          </div>
          <p className="address">{truncateText(address)}</p>
        </div>
      </div>
    );
}

// not using keys (not acceptable) <<< using index as keys <<< using Unique Id's as keys (most preferable way).
// (worst practice) --------------------------------> (best practice)

export default RestaurantCards