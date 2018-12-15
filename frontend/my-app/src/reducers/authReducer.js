const initstate = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initstate, action) {
  switch (action.type) {
    default:
      return state;
  }
}
