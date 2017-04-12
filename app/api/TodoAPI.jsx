var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos)); //localStorage only excepts strings, stringify converts the array to a string
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    if ($.isArray(todos)) {
      return todos;
    } else {
      return [];
    }
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    //filter by showCompleted
    //filter is vanilla javascript method for Arrays, goes through an array and filters into a new Array based on a criteria set in the function
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted; //or show all that is completed
    });

    //filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    //sort todos with non-completed first
    filteredTodos.sort((a,b) => {
      if(!a.completed && b.completed){
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
