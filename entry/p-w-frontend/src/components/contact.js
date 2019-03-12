import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const _name = this.state.name;
    const _email = this.state.email;
    const _message = this.state.message;
    console.log("about to send from front end");
    axios
      .post("http://localhost:5000/send", {
        name: _name,
        email: _email,
        message: _message
      })
      .then(response => {
        if (response.data.msg === "success") {
          alert("Message Sent.");
          this.setState({
            name: "",
            email: "",
            message: ""
          });
        } else if (response.data.msg === "fail") {
          alert("Message failed to send.");
        }
        console.log("completed cycle!");
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <section>
        <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea
              className="form-control"
              rows="5"
              id="message"
              onChange={this.handleChange}
              value={this.state.message}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export default Contact;
