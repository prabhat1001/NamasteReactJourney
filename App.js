import React from "react"; //importing react from node_modules
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>;

const Title = () => (
  <h1 className="head" tabIndex="5">
    {elem}
    inside React Component 🚀
  </h1>  
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1>Namaste React Functional Component</h1>
  </div>
);
 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
