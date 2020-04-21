import React, { Component } from "react";
import { render } from "react-dom";

class Rendering_Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: [
        { id: 1, title: "One" },
        { id: 2, title: "Two" },
        { id: 3, title: "Three" }
      ]
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.nums.map(num => (
            <li key={num.id}>
              {num.id}.{num.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Rendering_Lists;
