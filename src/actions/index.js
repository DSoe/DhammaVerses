import firebase from 'firebase';
import config from '../../config';

// const Libraries = new Firebase('https://myapp-a22dc.firebaseio.com/');


export const selectLibrary = (libraryId) => { //eslint-disable-line
  return {
    type: 'select_library',
    payload: libraryId
  };
};

export const switchFont = (value) => { //eslint-disable-line
  return {
    type: 'switch_font',
    payload: value
  };
};

export function fetchAll() {
  return dispatch => {
    firebase.initializeApp(config);
    const firebaseRef = firebase.database().ref();
    firebaseRef.on('value', (snapshot) => {
      // console.log('fetch', snapshot.val());
      dispatch({
        type: 'FETCH_ALL',
        payload: snapshot.val()
      });
    });
  };
}
