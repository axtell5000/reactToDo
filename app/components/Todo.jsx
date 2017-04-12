var React = require('react');
var moment = require('moment');

var Todo = React.createClass({


  render: function () {
    var {text, id, completed, createdAt, completedAt} = this.props; //getting props from parent

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
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" defaultChecked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }

});


module.exports = Todo;
