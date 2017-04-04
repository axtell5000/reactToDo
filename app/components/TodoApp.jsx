var React = require('react');
var TodoList = require('TodoList');

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

  render: function () {

    var {todos} = this.state; //getting from the state
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;
