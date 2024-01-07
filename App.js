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

const BodyComp = () =>{
 return(
  <div className="body-comp">
      <div className="rest-cont">
        <h2 className="rest-heading">Top restaurant chains in Mathura</h2>
        <div className="cards-cont">
          <div className="card">
            <div className="img-div">
              <img 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cfe5a6b2c186e42811f595e7ebfd7331" 
                alt="dish-img">
              </img>
            </div>
            <div className="detail-cont">
              <h4>Pizza Hut</h4>
              <div className="rating-cont">
                <img className="star" src="https://img.icons8.com/flat-round/64/000000/star--v1.png"></img>
                <p>4 . 27 mins</p>
              </div>
              <p className="address">Shankar Vihar</p>
            </div>
          </div>
          <div className="card">
            <div className="img-div">
              <img 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/klugweky5elnxe9ce1ot" 
                alt="dish-img">
              </img>
            </div>
            <div className="detail-cont">
              <h4>Dominos Pizza</h4>
              <div className="rating-cont">
                <img className="star" src="https://img.icons8.com/flat-round/64/000000/star--v1.png"></img>
                <p>4.5 . 17 mins</p>
              </div>
              <p className="address">Higway Plaza</p>
            </div>
          </div>
          <div className="card">
            <div className="img-div">
              <img 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/muh4uchyufzjjcnuaifj" 
                alt="dish-img">
              </img>
            </div>
            <div className="detail-cont">
              <h4>Dilli wale chur chur naan</h4>
              <div className="rating-cont">
                <img className="star" src="https://img.icons8.com/flat-round/64/000000/star--v1.png"></img>
                <p>3.5 . 40 mins</p>
              </div>
              <p className="address">Dampier Nagar</p>
            </div>
          </div>
          <div className="card">
            <div className="img-div">
              <img 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vriqqftj28fxtodlz0ia" 
                alt="dish-img">
              </img>
            </div>
            <div className="detail-cont">
              <h4>Bansal Foods</h4>
              <div className="rating-cont">
                <img className="star" src="https://img.icons8.com/flat-round/64/000000/star--v1.png"></img>
                <p>2.7 . 45 mins</p>
              </div>
              <p className="address">Shankar Vihar</p>
            </div>
          </div>
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
