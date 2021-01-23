import Clock from "./Clock";
import UserList from "./UserList";

function App() {
  const appName = "Learning React Js project from scratch.";
  const subtitle = "Explore basic concept of react js";
  return (
    <div>
      <h2>{appName}</h2>
      <p>{subtitle}</p>
      <UserList />
    </div>
  );
}

export default App;
