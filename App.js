import React from "react"; //importing react from node_modules
import ReactDOM from "react-dom/client";

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



const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React Using JSX 🚀
  </h1>  
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);
 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
