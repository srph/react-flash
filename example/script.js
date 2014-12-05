/** @jsx React.DOM */
var React = require('react');
var Flash = require('../src/index');
var Router = require('react-router');
var { Routes, Route, RouteHandler, Link } = Router;
var { Drawer } = Flash;

var App = React.createClass({
  mixins: [Flash.ContainerMixin],
  render: function() {
    return (
      <div>
        <Drawer stack={this.state.stack} remove={this.remove} />
        <Link to="app">Home</Link> | 
        <Link to="inbox">Inbox</Link> |
        <Link to="archive">Archive</Link>
        <div onClick={this.add}>CLICK</div>
        <RouteHandler flash={this.add} />
      </div>
    );
  }
});

var Inbox = React.createClass({
  render: function() {
    return (
      <div> Inbox </div>
    );
  }
});

var Archive = React.createClass({
  render: function() {
    return (
      <div> Archive </div>
    );
  }
});

var routes = (
  <Route name="app" handler={App} path="/">
    <Route name="inbox" handler={Inbox} path="inbox" />
    <Route name="archive" handler={Archive} path="archive" />
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.body);
});