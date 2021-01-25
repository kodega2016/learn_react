import React from "react";
import ContextExample from "./ContextExample";
import Form from "./Form";
import UserList from "./UserList";

function App() {
  const appName = "Learning React Js project from scratch.";
  const subtitle = "Explore basic concept of react js";
  return (
    <div className="container">
      <h2>{appName}</h2>
      <p>{subtitle}</p>
      <UserList />
      <Form />
      <ContextExample />
    </div>
  );
}

export default App;
