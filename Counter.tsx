import React, { Component } from "react";
import { render } from "react-dom";

interface AppProps {}
interface AppState {}

/* Raising and Handling Events */

export default class Counter extends Component<AppProps, AppState> {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevStates", prevState);
    if(prevProps.counter.value !== this.props.counter.value){
      // Ajax call and get new data from the server
      console.log("Counter - Updated");
    }    
  }

  componentWillUnmount(){
    console.log("Counter - Unmount")
  }

  constructor(props) {
    super(props);    
  }

  render() {
    console.log("Counter - Rendered");
    
    return (
      <div>
        {this.props.children}
        
        <span className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">
          Increment
        </button>
        
        <button
          className="btn btn-sm btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses(){
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "ZERO" : value;
  }
}
