// increment action/reducer
const increment = (state, payload) => {
  return { ...state, count: state.count + payload };
};

// decrement
const decrement = (state, payload) => {
  return { ...state, count: state.count - payload };
};

const setCounter = (state, payload) => {
  return { ...state, count: payload };
};

// asynchronous action that call sync actionreducers as events occur
// (notice this appears to be bound to the counter.reducers object)
async function incrementAsync(payload, rootState) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  this.increment(payload);
}

// the counter model
export const counter = {
  // default state object for counter
  state: {
    count: 0
  },

  // hook up the counter actionreducers
  reducers: {
    increment,
    decrement,
    setCounter
  },

  // hook up async counter effects
  effects: {
    incrementAsync
  }
};
