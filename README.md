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
