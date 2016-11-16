export default (state = true, action) => {
  switch (action.type) {
    case 'switch_font':
      return action.payload;
    default:
      return state;
  }
};
