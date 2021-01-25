import React, { Component } from "react";
import ContextBtn from "./ContextBtn";
import ThemeContext from "./themeContext";

class ContextExample extends Component {
  render() {
    return (
      <div className="card mt-2">
        <div className="card-body">
          Learning Context API in react js
          <ThemeContext.Provider value={{ theme: "light" }}>
            <ContextBtn />
          </ThemeContext.Provider>
        </div>
      </div>
    );
  }
}

export default ContextExample;
