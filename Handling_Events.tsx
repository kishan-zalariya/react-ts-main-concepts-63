import React, { Component } from "react";
import { render } from "react-dom";

interface AppProps {}
interface AppState {
  isToggleOn;
  count;
}

/* Handling Events */
function handleClick(e) {
  e.preventDefault();
  console.log("The link was clicked.");
}
/* End */

class Handling_Events extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      count: 0
    };
    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
  }

  handleToggle = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  };

  /* Passing Event Arguments */
  handelSayHello = userData => {
    alert("Hello, " + userData.name);
  };

  dohandelSayHello = () => {
    this.handelSayHello({ name: "Kishan" });
  };
  /* End */

  handelIncrement = () => {
    this.setState(
      { count: this.state.count+1 }
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>

        <a href="#" onClick={handleClick}>
          Click me to see preventDefault ex.
        </a>

        <div>
          // Passing Event Arguments
          <button onClick={() => this.handelSayHello({ name: "Kishan" })}>
            Say Hello
          </button>
        </div>

        <span>{this.state.count}</span>
        <button onClick={this.handelIncrement}> + </button>
      </div>
    );
  }
}
export default Handling_Events;
