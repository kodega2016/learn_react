import React, { Component } from "react";
import User from "./User";

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
