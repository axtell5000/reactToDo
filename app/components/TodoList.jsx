var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';


export var TodoList = React.createClass({

  render: function () {

   var {todos} = this.props;
   console.log('In TodoList.jsx', this);

   var renderTodos = () => {

     if (todos.length === 0) {
       return (
         <p className="container__message">Nothing To Do</p>
       );
     }

     return todos.map((todo)  => {
       //key is important, each component has to have an unique id
       //Now we have to pass down onToggle to Todo
       return (
         <Todo key={todo.id} {...todo} />
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


export default connect(

  (state) => {
    return {
      todos: state.todos
    }
  }

)(TodoList);
