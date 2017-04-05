var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

//Is going to maintain state
var TodoApp = React.createClass({

  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Feed the cat'
        },
        {
          id: 4,
          text: 'Wash the dishes'
        }

      ]
    }
  },

  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },

  render: function () {

    var {todos} = this.state; //getting from the state
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
