import React, { Component } from 'react';
import { connect } from 'react-redux';

class CounterContainer extends Component {
  handleSetCounter = () => {
    const { setCounter } = this.props;
    const value = parseInt(this.refs.input.value, 10) || 0;
    setCounter(value);
  };

  handleSetStatusMessage = () => {
    const { setStatusMessage } = this.props;
    const message = this.refs.status.value || '';
    setStatusMessage(message);
  };

  render() {
    // get the actions mapped to component props in mapActions()
    // get the data mapped in mapState()
    const {
      count,
      statusMessage,
      increment,
      decrement,
      incrementAsync
    } = this.props;

    return (
      <div>
        <h1>{count}</h1>
        <p>{statusMessage}</p>
        <button onClick={increment}>Count</button>
        <button onClick={decrement}>Discount</button>
        <button onClick={incrementAsync}>Increment in a second</button>
        <br />
        <input type="number" ref="input" />
        <button onClick={this.handleSetCounter}>Set counter</button>
        <hr />
        <input type="text" ref="status" />
        <button onClick={this.handleSetStatusMessage}>Set status</button>
      </div>
    );
  }
}

// map of required data and how to retrieve it from global state
const mapState = state => ({
  count: state.counter.count,
  statusMessage: state.status.message
});

// map of actions and how to call them, from global models
const mapActions = actions => ({
  increment: () => actions.counter.increment(1),
  decrement: () => actions.counter.decrement(10),
  incrementAsync: () => actions.counter.incrementAsync(1),
  setCounter: value => actions.counter.setCounter(value),
  setStatusMessage: value => actions.status.setStatusMessage(value)
});

// connect the component to the state and actions
export default connect(mapState, mapActions)(CounterContainer);
