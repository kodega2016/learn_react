# Learning React JS

## Components

- Functional component
  in this type of component we have to define a function and return the content.

  ```javascript
  function App() {
    return <div>This is a functional component</div>;
  }
  export default App;
  ```

- Class Based Component
  in this type of component we have to extend the class to the Component from the 'react'

  ```javascript
  import React, { Component } from "react";
  class UserList extends Component {
    render() {
      return <div>This is user list</div>;
    }
  }
  export default UserList;
  ```

## Passing data to the component using props.

We can pass the data to the component using the props.

```javascript
<User user={{name:"Khadga",job:"Software Developer"}}>

function User(props) {
  return (
    <div>
      <h2>{props.user.name}</h2>
      <p>{props.user.job}</p>
    </div>
  );
}
export default User;



```

## State and Lifecycle

State and component life cycle.

- constructor()
- componentDidMount()
- componentWillUnmount()

## Conditional rendering and iterating list

```javascript
class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: "Khadga Shrestha",
          job: "Software Developer",
          active: true,
        },
        {
          name: "Nisma shrestha",
          job: "Business Analyst",
          active: false,
        },
      ],
    };
  }

  handleClick = () => {
    console.log("Clicking...");
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        {users.map((user, i) => (
          <User key={i} user={user} />
        ))}
      </div>
    );
  }
}

export default UserList;
```

```javascript
function User(props) {
  return (
    <div
      style={{
        backgroundColor: "#f0efeb",
        padding: "10px",
        marginTop: "5px",
        borderRadius: "4px",
      }}
    >
      <p>{props.user.name}</p>
      <p>{props.user.job}</p>
      {props.user.active && (
        <button onClick={props.onClick}>Connect with this user</button>
      )}
    </div>
  );
}
export default User;
```

## Forms

in react form data can be handled as

```javascript
class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      job: "",
      status: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Full name</label>
            <input
              className="form-control"
              placeholder="Enter full name"
              name="name"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Job</label>
            <input
              className="form-control"
              placeholder="Enter job"
              name="job"
              onChange={this.handleChange}
            />
          </div>
          <select
            name="status"
            onChange={this.handleChange}
            className="form-control"
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <br />
          <button
            onClick={this.handleSubmit}
            className="btn btn-outline-success"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
```

Here we have to give the name to the input field and change the value on change event.

## Context Api in react js

Context provides a way to pass data through the component tree without having to pass props down manually at every level

First of all we have to define context(ThemeContext) as

```javascript
import React from "react";

const ThemeContext = React.createContext({ theme: "light" });

export default ThemeContext;
```

Pass the context data to the descendent widgets using Provider as

```javascript
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
```

Access the data in using context

```javascript
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
```
