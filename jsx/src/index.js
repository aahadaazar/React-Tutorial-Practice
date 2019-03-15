import React from "react";
import ReactDOM from "react-dom";

// const App = () => {
//     return <div class="main-div">Hi There</div>
// }

var App = function App() {
    const buttonText = 'Click Me!';
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{backgroundColor:'blue',color:'white'}}>{buttonText}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
