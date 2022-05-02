var React = require("react");
var ReactDOM = require("react-dom");

const fName = "Gautami";
const lName = "Patel";
const Age = "25";
ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}
    </h1>
    <h2>Hello {fName + " " + lName}</h2>
    <h3>Hello {`${fName} ${lName}`}</h3>
    <p>My Age Is {Age} </p>
  </div>,
  document.getElementById("root")
);
