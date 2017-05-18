/**
 * Created by User on 2017/05/17.
 */

import firebase from 'firebase';

try {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDrPGp2Gm5JTwNT1Ov59akaxX4W1jFUHrA",
    authDomain: "todo-app-94422.firebaseapp.com",
    databaseURL: "https://todo-app-94422.firebaseio.com",
    projectId: "todo-app-94422",
    storageBucket: "todo-app-94422.appspot.com",
    messagingSenderId: "909014873223"
  };

  firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
