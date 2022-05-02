// import React from "react";
// import ReactDOM from "react-dom";

var React = require("react");
var ReactDOM = require("react-dom");

const name = "Gautami";
const Age = "25";
ReactDOM.render(
  <div>
    <h1>Hello {name}</h1> <p>My Age Is {Age} </p>
  </div>,
  document.getElementById("root")
);
