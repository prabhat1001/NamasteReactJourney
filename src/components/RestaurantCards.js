import React from 'react'

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
          <img src= {`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`+ cloudinaryImageId} alt="dish-img"></img>
        </div>
        <div className="detail-cont">
          <h4>{name}</h4>
          <div className="rating-cont">
            <img
              className="star"
              src="https://img.icons8.com/flat-round/64/000000/star--v1.png"
            ></img>
            <p>{avgRating} • {deliveryTime} min</p>
          </div>
          <p className="address">{truncateText(address)}</p>
        </div>
      </div>
    );
}

export default RestaurantCards