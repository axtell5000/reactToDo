var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({


  render: function () {
    var {text, id, completed, createdAt, completedAt, dispatch} = this.props; //getting props from parent
    var todoClassName = completed ? 'todo todo-completed' : 'todo';

    var renderDate = () => {
      var message = 'Created: ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    //must use defaultChecked instead of the normal checked - otherwise it will cause errors
    return (
      <div className={todoClassName} onClick={() => {
        dispatch(actions.startToggleTodo(id, !completed));
      }}>
        <div>
          <input type="checkbox" defaultChecked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }

});

//The Todo is specifing what component we want to connect to the store, plus it helps with our testing files
export default connect()(Todo);
