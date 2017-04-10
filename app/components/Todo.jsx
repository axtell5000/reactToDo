var React = require('react');

var Todo = React.createClass({


  render: function () {
    var {text, id, completed} = this.props; //getting props from parent
    //must use defaultChecked instead of the normal checked - otherwise it will cause errors
    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" defaultChecked={completed}/>
        {text}
      </div>
    )
  }

});


module.exports = Todo;
