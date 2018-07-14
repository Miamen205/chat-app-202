import * as firebase from 'firebase';
// import * as admin from 'firebase-admin';
// import serviceAccount from './serviceAccount.json';

const config = {
  apiKey: "AIzaSyB3KvjOMefGEpmlnplVJ7WhFr0IeAtI4Gw",
  authDomain: "my-bible-app-23322.firebaseapp.com",
  databaseURL: "https://my-bible-app-23322.firebaseio.com",
  projectId: "my-bible-app-23322",
  storageBucket: "my-bible-app-23322.appspot.com",
  messagingSenderId: "707612173281"
};

var fire = firebase.initializeApp(config);
export const ref = firebase.database().ref()
export default fire;
export const firebaseAuth = firebase.auth();
export const firebaseDB = firebase.database();
export const firebaseDb = firebase.database();
export const username = firebase.database();
export const firebaseApp = firebase.database();
export const firebaseStorageRef = firebase.storage().ref();

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://my-bible-app-23322.firebaseio.com'
// });