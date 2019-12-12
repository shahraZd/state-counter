import React from "react";
import AfficheCounter from "./afficheCounter";

class Counter extends React.Component {
  state = {
    counter: 0
  };

  addCounter = x => {
    this.setState({ counter: this.state.counter + x });
  };

  minusCounter = x => {
    if (this.state.counter > 0)
      this.setState({ counter: this.state.counter - x });
  };

  render() {
    return (
      <div>
        <h1>this is my counter</h1>
        <button onClick={() => this.addCounter(this.props.val)}>+</button>
        <span>{this.state.counter}</span>
        <button onClick={() => this.minusCounter(this.props.val)}>-</button>

        <AfficheCounter z={this.state.counter} />
      </div>
    );
  }
}
export default Counter;
