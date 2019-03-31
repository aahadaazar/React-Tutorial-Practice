import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./SeasonsDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errMessage: null
    };
  }

  componentDidMount() {
    console.log('My component is mounted');
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude
        }), err =>
        this.setState({
          errMessage: err.message
        })
    );
  }

  componentDidUpdate() {
    console.log('My component is updated');
  }
  render() {
    return(
      <div className="border red">
      {this.renderComponent()}
      </div>
    )
  }

  renderComponent() {
    if (this.state.errMessage && !this.state.lat) {
      return (
        <div className="aahad">
          Error: {this.state.errMessage}
        </div>
      );
    }
    else
      if (!this.state.errMessage && this.state.lat) {
        return (
          // <div className="aahad">
          //   Position:{this.state.lat}
          // </div>
          <SeasonsDisplay lat={this.state.lat} err={this.state.errMessage}></SeasonsDisplay>
        );
      }
      else
        return <Spinner />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
