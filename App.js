import React from "react"; //importing react from node_modules
import ReactDOM from "react-dom/client";

// React.createElement  =>  Object  =>  HTML Element ( on render )

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World! 🚀 "
// );


// JSX => JavaScript XML a syntax extension to JavaScript

const heading = (
  <h1 className="head" tabIndex="5">
    Hello World! using JSX 🚀 
  </h1>
);

//React Components

// Class Based Components
// Functional Components

const HeaderComponent = () => {
  return <h1>Namaste React Functional Component! 🚀 </h1>;
};

//Another way of writing the above code
const HeaderComponent2 = () => <h1 className="header">Namaste React Functional Component! 🚀 </h1>;


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
