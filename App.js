import React from "react"; //importing react from node_modules
import ReactDOM from "react-dom/client";

const userInput = <script>alert("XSS attack!")</script>;

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React Using JSX 🚀
  </h1>  
);

const HeadingComponent = () => (
  <div id="container">
    
    // all the below three are same

    {Title()}
    <Title />
    <Title></Title>

    <p>Here: {userInput}</p>
    <h1>Namaste React Functional Component</h1>
  </div>
);
 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
