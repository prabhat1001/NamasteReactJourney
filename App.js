import React from "react"; //importing react from node_modules
import ReactDOM from "react-dom/client";
import Logo from "./assets/logo.png"

/**
 * Header
 * - Logo
 * - Nav items
 * 
 * Body
 *  - Search
 *  - Restaurant Container
 *    - Restaurant card
 * 
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */ 


const HeaderComp = () =>{
return(
  <div className="header-comp">
    <div className="header-div">
      <div className="logo">
      <img className="logo-img" src={Logo} alt="logo"/>
      </div>
      <ul className="nav-cont">
      <li>Home</li>
      <li>About</li>
      <li>Offers</li>
      <li>Help</li>
      <li>Cart</li>
      </ul>
    </div>
  </div>
)
}


const RestCards =(props)=>{
  return(
    <div className="card">
            <div className="img-div">
              {console.log(props)}
              <img 
                src={props.img} 
                alt="dish-img">
              </img>
            </div>
            <div className="detail-cont">
              <h4>{props.name}</h4>
              <div className="rating-cont">
                <img className="star" src="https://img.icons8.com/flat-round/64/000000/star--v1.png"></img>
                <p>{props.rating}</p>
              </div>
              <p className="address">{props.address}</p>
            </div>
    </div>
  )
}


const BodyComp = () =>{
 return(
  <div className="body-comp">
      <div className="rest-cont">
        <h2 className="rest-heading">Top restaurant chains in Mathura</h2>
        <div className="cards-cont">

        <RestCards 
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cfe5a6b2c186e42811f595e7ebfd7331"
          name="Pizza Hut"
          rating="4 . 27 mins"
          address="Shankar Vihar"
        />

        <RestCards 
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/klugweky5elnxe9ce1ot"
          name="Dominos Pizza"
          rating="4.5 . 17 mins"
          address="Highway Plaza"
        />

        <RestCards 
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/muh4uchyufzjjcnuaifj"
          name="Dilli wale chur chur naan"
          rating="3.5 . 40 mins"
          address="Dampier Nagar"
        />

        <RestCards 
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vriqqftj28fxtodlz0ia"
          name="Bansal Foods"
          rating="2.7 . 45 mins"
          address="Shankar Vihar"
        />
        </div>
      </div>
  </div>
 );
}

const FooterComp = () =>{
  return(<h2>Footer</h2>);
}

const FoodApp = () =>{
  return (
    <div className="food-comp">
      <HeaderComp/>
      <BodyComp/>
      <FooterComp/>
    </div>
  )
}


 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FoodApp />);
