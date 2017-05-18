import firebase from 'firebase';

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

var firebaseRef = firebase.database().ref();


//set returns a promise, so you can do the then()
firebaseRef.set({ //set will remove all existing records if you do it again to same location
  app: {
    appName: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Stephen',
    age: 45
  }
}).then(() => {
  console.log('Set worked!');
}, (e) => {
  console.log('Set failed');
});

// firebaseRef.child('app').set({ //using child will only remove things in the child
//   appName: 'Todo Application'
// });

//Like this update will only update top level properties
//Update also returns a promise
firebaseRef.update({
  isRunning: false,
  //The below wont work as intended, it will update name but will remove Version
  // app: {
  //   appName: 'Todo App'
  // }
});

//You can do 2 methods to make the app change work

//1) Multi path update
firebaseRef.update({
  isRunning: false,

  'app/appName': 'Todo Application'
});

//2) Using child
firebaseRef.child('app').update({
  version: '1.5.0'
});


//Remove

//firebaseRef.remove(); //will remove whole database

//firebaseRef.child('app').remove(); //will remove the app object

//firebaseRef.child('app/version').remove(); //will just remove version prop

//You can also remove something by setting its property to null

// firebaseRef.child('app').update({
//   version: '2.0.0',
//   appName: null
// });

// firebaseRef.update({
//   isRunning: null
// });
//
// firebaseRef.child('user/age').remove();

//Fetching all data using once('value'),returns promise if successful, its object/snapshot of database

// firebaseRef.once('value').then((snapshot) => {console.log('Got entire database', snapshot.val())}
// , (e) => {
//   console.log('Unable to fetch value', e);
// });

firebaseRef.child('app').once('value').then((snapshot) => {
  console.log('Got entire database', snapshot.key, snapshot.val())}
  , (e) => {
    console.log('Unable to fetch value', e);
  });

//.on() listens for changes on database and does something when it happens, in this example console log will be called twice.
//Adding the initial data is considered a change
firebaseRef.on('value', (snapshot) => {
  console.log('Got value', snapshot.val());
});

firebaseRef.update({isRunning: true});

//Firebase does not work with arrays, one can work with array lke objects

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

//push() , is to add something
todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
