import React, { Component } from "react";

export default class Changes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rafayel",
      age: 22,
    };
    this.changeName = this.changeName.bind(this);
  }

  changeName() {
    this.setState({
      name: "Karen",
    });
  }

  increment = (e) => this.setState({ age: this.state.age + 1 });

  decrement = (e) =>
    this.setState({ age: this.state.age < 2 ? 1 : this.state.age - 1 });

  render() {
    return (
      <div>
        <h2>Name: {this.state.name}</h2>
        <button onClick={this.changeName}>Change Name</button>
        <h3>Age: {this.state.age}</h3>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
