import React, { Component } from "react";

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
