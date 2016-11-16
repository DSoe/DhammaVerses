// import data from './LibraryList.json';

export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    default:
      return state;
  }
};
