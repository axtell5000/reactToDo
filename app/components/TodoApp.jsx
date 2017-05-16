var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

import TodoSearch from 'TodoSearch';


//This is the only component that maintain state, the rest are for presentation and user interactive responses,
//Try keep the number of components that maintain state to a minimum
var TodoApp = React.createClass({


  render: function () {

    /*Have to pass the toggle function down to todoList first*/
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList />
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
