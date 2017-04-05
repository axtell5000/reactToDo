var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

  render: function () {

   var {todos} = this.props;
   console.log('In TodoList.jsx', this);

   var renderTodos = () => {
     return todos.map((todo)  => {
       //key is important, each component has to have an unique id
       return (
         <Todo key={todo.id} {...todo}/>
       );
     });
   };

   return (
     <div>
       {renderTodos()}
     </div>
   )
  }

});


module.exports = TodoList;
