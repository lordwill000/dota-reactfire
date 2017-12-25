import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAj14sDlLwJbRSjjQjDpyyw_C4ZgN0Xd1M',
  authDomain: 'dota-reactfire.firebaseapp.com',
  databaseURL: 'https://dota-reactfire.firebaseio.com',
  projectId: 'dota-reactfire',
  storageBucket: 'dota-reactfire.appspot.com',
  messagingSenderId: '736686943892'
};
firebase.initializeApp(config);
export default firebase;
