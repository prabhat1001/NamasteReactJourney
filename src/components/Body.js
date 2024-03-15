import React from 'react'
import RestCards from './RestaurantCards';
import resObj from '../utils/mockData'

const Body = () => {
    return (
        <div className="body-comp">
          <div className="rest-cont">
            <h2 className="rest-heading">Top restaurant chains in Mathura</h2>
            <div className="cards-cont">
              {
                resObj.map((res) => (
                <RestCards key={res.data.id} resData = {res} /> //key is here for uniquely distinguish the cards 
                ))
              }
            </div>
          </div>
        </div>
      );
}

export default Body

