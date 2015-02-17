/** @jsx React.DOM */
var React = require('react');
var MessageMixin = require('./MessageMixin');

var Message = React.createClass({
  mixins: [MessageMixin],
  render: function() {
    var message = this.props.data;

    return (
      <div key={message.id}>
        {message.text} | <span onClick={this._removeHandler}>X</span>
      </div>
    );
  }
});

module.exports = Message;
