import React, { Component } from "react";
import ThemeContext from "./themeContext";

class ContextBtn extends Component {
  static contextType = ThemeContext;

  constructor() {
    super();
    console.log(this.context);
  }

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    // console.log(this.context);
    return <div>Current theme is: {this.context.theme}</div>;
  }
}
export default ContextBtn;
