import React, { Component } from "react";
import { render } from "react-dom";

interface AppProps {}
interface AppState {
  isLoggedIn;
  showWarning;
}

/* Element Variables */
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}
function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}
/* End */

function UserGreeting() {
  return <h3>Welcome back!</h3>;
}

function GuestGreeting() {
  return <h3>Please sign up.</h3>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

/* Inline If with Logical && Operator */
function Mailbox(props) {
  const unreadMsg = props.unreadMsg;
  return (
    <div>
      <h3>Hello,</h3>
      {unreadMsg.length > 0 && (
        <h4>You have {unreadMsg.length} unread messages.</h4>
      )}
    </div>
  );
}
/* End */

/* Inline If-Else with Conditional Operator */
function WarningBanner(props) {
  if (!props.war) {
    return null;
  }
  return <div className="warning">Warning!</div>;
}
/* End */

class Conditional_Rendering extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      showWarning: true
    };    
  }
  /* Element Variables */
  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };
  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };
  /* End */

  /* Inline If-Else with Conditional Operator */
  handleToggleClick = () => {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  };
  /* */
  render() {
    /* Element Variables */
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    /* End */
    const messages = ["React", "Re: React", "Reply: React"];

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}

        <div>
          /* Inline If with Logical && Operator */
          <Mailbox unreadMsg={messages} />
        </div>

        <div>
          /* Inline If-Else with Conditional Operator */
          <WarningBanner war={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    );
  }
}
export default Conditional_Rendering;
