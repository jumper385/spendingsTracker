import * as firebase from 'firebase'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBMooBeF9f4l2JOfpdM4slV1wCrb7Q7Tdo",
    authDomain: "spendings-ccfa1.firebaseapp.com",
    databaseURL: "https://spendings-ccfa1.firebaseio.com",
    projectId: "spendings-ccfa1",
    storageBucket: "spendings-ccfa1.appspot.com",
    messagingSenderId: "73018238579"
  };
firebase.initializeApp(config);

export default firebase