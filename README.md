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
