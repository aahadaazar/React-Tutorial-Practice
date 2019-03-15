import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null
    };
    console.log(super(props));
  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          lat: position.coords.latitude
        });
      },
      err => {
        console.log(err);
      }
    );
    return <div className="aahad">Position:{this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
