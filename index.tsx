import React, { Component } from "react";
import { render } from "react-dom";
import Handling_Events from "./Handling_Events";
import Conditional_Rendering from "./Conditional_Rendering";
import "./style.css";
import tick from "./Rendering_Elements";
import Rendering_Lists from "./Rendering_Lists";
import Counters from "./Counters";
import Navbar from "./Navbar";

/*
  Multiple Components in Sync
  Lifting the State Up 
*/

interface AppProps {}
interface AppState {
  name;
  counters;
}

/* Rendring Elements */
setInterval(tick, 1000);
/* End */

/* Components and Props */
function Welcome(props) {
  return <h3>Hello, {props.name}</h3>;
}
/* End */

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "Kishan",
      /* Lifting the State Up */
      counters: [
        { id: 1, value: 4, seleted: "true" },
        { id: 2, value: 0, seleted: "true" },
        { id: 3, value: 0, seleted: "true" }
      ]      
    };    
    console.log("Index - Constructor");
  }

  componentDidMount(){
    // AJAX Call here
    console.log("Index - Mounted");
  }

  /* Lifting the State Up */
  handleIncrement = counter => {    
    const counters = [...this.state.counters]; //Clone counters array
    const index = counters.indexOf(counter); //get index of particular counter
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  };

  handleReset = () =>{
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  };

  handleDelete = counterId => {
    console.log("Event Handler called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };
  /* End */

  render() {
    console.log("Index - Rendered");

    return (
      <div>
        <div>
          <span>► Rendring Elements:</span>
          <span id="showdate"> </span>
        </div>
        <hr />

        <div>
          <span>► Components and Props:</span>
          <Welcome name={this.state.name} />
        </div>
        <hr />

        <div>
          <span>► Handling Events:</span>
          <Handling_Events />
        </div>
        <hr />

        <div>
          <span>► Conditional Rendering:</span>
          <Conditional_Rendering />
        </div>
        <hr />

        <div>
          <span>► Rendering Lists:</span>
          <Rendering_Lists />
        </div>
        <hr />

        <div>
          <span>► Composing Components:</span>          
          <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
          
          <span hidden>
            // Multiple Components in Sync
            // Lifting the State Up
          </span>

          <main className="container">
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
            />
          </main>
        </div>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
