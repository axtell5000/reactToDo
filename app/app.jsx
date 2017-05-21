
var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux'); //need this react-redux module to connect react and redux

//Using destructuring syntax - es6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//The es5 equivalent of above is, we have to do it three additional times for Router, IndexRoute, hashHistory
//var Route = require('react-router').Route;

var actions = require('actions');
var store = require('configureStore').configure(); //calls the store we set up
var TodoApi = require('TodoAPI');
import Login from 'Login';
import TodoApp from 'TodoApp';


store.dispatch(actions.startAddTodos());


//Load foundation.need to use those style and css loader modules,to help app to use the file properly
// require('style!css!foundation-sites/dist/css/foundation.min.css');
//To start foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');


//Provider allows access to the redux store we created, even the children within
ReactDOM.render(

  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,

  document.getElementById('app')
);
