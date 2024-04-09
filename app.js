import React from "react";
import ReactDOM from "react-dom/client"
// const parentElement = React.createElement(
//     "div",{id:"parent"},
//     React.createElement(
//         "div",{id:"child"}, 
//         [React.createElement("h1",{},"I am Sahil tag"),
//         React.createElement("h2",{},"I am h2 tag")]
//     )
// );
 
//React Element
const heading = React.createElement(
    "h1", 
    {id:"heading"},
    "Hello World with React!"
    );
console.log(heading);


//React Component
// Class Based Component - OLD
// Functional Component - NEW

//JSX - HTML like or XML like syntax
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
    