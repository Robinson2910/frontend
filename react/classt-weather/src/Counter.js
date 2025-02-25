import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    // this.handleDecrement = this.handleDecrement.bind(this);
  }
  handleDecrement() {
    this.setState((currState) => {
      return { count: currState.count - 1 };
    });
  }
  handleIncrement() {
    this.setState((currState) => {
      return { count: currState.count + 1 };
    });
  }

  //React.component is the parent class

  //that parent class provides with two methods rendor method which returns some js
  render() {
    const date = new Date();
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={() => this.handleDecrement()}>-</button>
        <span>
          {date.toDateString()}
          {this.state.count}
        </span>
        <button onClick={() => this.handleIncrement()}>+</button>
      </div>
    );
  }
}
export default Counter;
