import React, { Component } from "react";
import { render } from "react-dom";
import Counter from "./Counter";

/*
Composing Components
Passing Data to Components
Passing Children
Raising and Handling Events
Updating the State
Single Source of Truth
Removing the Local State
Destructuring Arguments
*/

export default class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicCovers: [
        { id: 1, title: "Composing Components" },
        { id: 2, title: "Passing Data to Components" },
        { id: 3, title: "Passing Children" },
        { id: 4, title: "Raising and Handling Events" },
        { id: 5, title: "Updating the State" },
        { id: 6, title: "Single Source of Truth" },
        { id: 7, title: "Removing the Local State" },
        { id: 8, title: "Multiple Components in Sync " },
        { id: 9, title: "Lifting the State Up" },
        { id: 10, title: "Stateless Functional Components" },
        { id: 11, title: "Destructuring Arguments" },
        { id: 12, title: "Lifecycle Hooks" },
        { id: 13, title: "Mounting Phase " },
        { id: 14, title: "Updating Phase " },
        { id: 15, title: "Unmounting Phase" }
      ]
    };
  }

  render() {
    console.log("Counters - Rendered");

    // Destructuring Arguments
    const { onReset, counters, onIncrement, onDelete } = this.props;

    return (
      <div>
        

        <div>
          <button className="btn btn-sm btn-primary m-2" onClick={onReset}>
            Reset
          </button>
          {counters.map(counter => (
            <Counter
              key={counter.id}
              onIncrement={onIncrement}
              onDelete={onDelete}
              counter={counter}
            >
              <h6>Counter #{counter.id}</h6>
            </Counter>
          ))}
        </div>
      </div>
    );
  }
}
