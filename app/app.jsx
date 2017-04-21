
var React = require('react');
var ReactDOM = require('react-dom');

//Using destructuring syntax - es6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//The es5 equivalent of above is, we have to do it three additional times for Router, IndexRoute, hashHistory
//var Route = require('react-router').Route;

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure(); //calls the store we set up

store.subscribe(() => {
  console.log('New state ', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());


//Load foundation.need to use those style and css loader modules,to help app to use the file properly
// require('style!css!foundation-sites/dist/css/foundation.min.css');
//To start foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');


//<Router> is available because of our require above
ReactDOM.render(

  <TodoApp/>,

  document.getElementById('app')
);
