import React, { Component } from "react";

class Clock extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("ComponentDidMount");
  }

  render() {
    return <div>Current time is:{new Date().toLocaleTimeString()}</div>;
  }
}
export default Clock;
