import React, { Component } from "react";
import User from "./User";

class UserList extends Component {
  render() {
    const users = [
      {
        name: "Khadga Shrestha",
        job: "Software Developer",
      },
      {
        name: "Nisma shrestha",
        job: "Business Analyst",
      },
    ];
    return (
      <User user={{ name: "Khadga Shrestha", job: "Software Developer" }} />
    );
  }
}

export default UserList;
