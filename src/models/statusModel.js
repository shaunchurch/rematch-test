const setStatusMessage = (state, payload) => {
  return { ...state, message: payload };
};

export const status = {
  state: {
    message: ''
  },
  reducers: {
    setStatusMessage
  },
  effects: {}
};
