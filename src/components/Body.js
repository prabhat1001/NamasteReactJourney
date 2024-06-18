import React, { useState } from 'react';
import RestCards from './RestaurantCards';
import resObj from '../utils/mockData';

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(resObj); // this is simple array destructuring

  //----------------------------------------------------

  // complete syntax of above react usteState() hook, understanding using array destructuring on the fly
  // const arr = useState(resObj);
  // const [listOfRestaurants, setListOfRestaurants] = arr;
  // const listOfRestaurants = arr[0];
  // const setListOfRestaurants = arr[1];

  //----------------------------------------------------



    // {data: {(
    //   type: "F",
    //   id: "224022",
    //   name: "Oven Story Pizza",
    //   cloudinaryImageId: "ab979bffbd658e74de650a15ca0092a3",
    //   cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    //   costForTwo: 40000,)
    //   deliveryTime: 32,
    //   address: "UNIT NO 220, 2ND FLOOR, ACTION AREA 1B, NEW TOWN, KOLKATA 700156",
    //   avgRating: "3.1",
    // }},
    // {data: {
    //   type: "F",
    //   id: "224025",
    //   name: "Oven Story Pizza with high rating",
    //   cloudinaryImageId: "ab979bffbd658e74de650a15ca0092a3",
    //   cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    //   costForTwo: 40000,
    //   deliveryTime: 32,
    //   address: "UNIT NO 220, 2ND FLOOR, ACTION AREA 1B, NEW TOWN, KOLKATA 700156",
    //   avgRating: "4.5",
    // }},
    // {data: {
    //   type: "F",
    //   id: "224027",
    //   name: "Mc Donalds",
    //   cloudinaryImageId: "ab979bffbd658e74de650a15ca0092a3",
    //   cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    //   costForTwo: 40000,
    //   deliveryTime: 32,
    //   address: "UNIT NO 220, 2ND FLOOR, ACTION AREA 1B, NEW TOWN, KOLKATA 700156",
    //   avgRating: "4.1",
    // }}
  

  // let listOfRestaurants = [
  //     {data: {
  //       type: "F",
  //       id: "224022",
  //       name: "Oven Story Pizza",
  //       cloudinaryImageId: "ab979bffbd658e74de650a15ca0092a3",
  //       cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
  //       costForTwo: 40000,
  //       deliveryTime: 32,
  //       address: "UNIT NO 220, 2ND FLOOR, ACTION AREA 1B, NEW TOWN, KOLKATA 700156",
  //       avgRating: "3.1",
  //   }},
  //   {data: {
  //     type: "F",
  //     id: "224025",
  //     name: "Oven Story Pizza with high rating",
  //     cloudinaryImageId: "ab979bffbd658e74de650a15ca0092a3",
  //     cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
  //     costForTwo: 40000,
  //     deliveryTime: 32,
  //     address: "UNIT NO 220, 2ND FLOOR, ACTION AREA 1B, NEW TOWN, KOLKATA 700156",
  //     avgRating: "4.1",
  // }}
  // ];

    return (
        <div className="body-comp">
          <div className='filter'>
              <button className='filter-btn'
                onClick={()=>{
                  console.log("btn clicked");
                //filter logic
                setListOfRestaurants(listOfRestaurants.filter((res)=>res.data.avgRating >= 4));
                console.log(listOfRestaurants);
                }}
              >
                 Top Rated Restaurants
              </button>
          </div>
          <div className="rest-cont">
            <h2 className="rest-heading">Top restaurant chains in Mathura</h2>
            <div className="cards-cont">
              {
                listOfRestaurants.map((res) => (
                <RestCards key={res.data.id} resData = {res} /> //key is here for uniquely distinguish the cards 
                ))
              }
            </div>
          </div>
        </div>
      );
}

export default Body

