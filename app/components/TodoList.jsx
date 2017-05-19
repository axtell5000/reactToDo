var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoApi = require('TodoAPI');


export var TodoList = React.createClass({

  render: function () {

   var {todos, showCompleted, searchText} = this.props;
   console.log('In TodoList.jsx', this);

   var renderTodos = () => {

     var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);

     if (filteredTodos.length === 0) {
       return (
         <p className="container__message">Nothing To Do</p>
       );
     }

     return filteredTodos.map((todo) => {
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
    return state;
  }

)(TodoList);
