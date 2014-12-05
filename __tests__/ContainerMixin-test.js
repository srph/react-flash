/** @jsx React.DOM */

jest.dontMock('../src/ContainerMixin');

var React, TestUtils, ContainerMixin, Container, ContainerComponent;
describe('ContainerMixin', function() {
  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    ContainerMixin = require('../src/ContainerMixin.js');
    ContainerComponent = React.createClass({
      mixins: [ContainerMixin],
      render: function() {
        return (
          <div>
            <div onClick={this.add}> Add </div>
            <div onClick={this.flush}> Flush </div>

            {this.state.stack.map(function(message) {
              var remove = function() {
                this.remove(message.id);
              }

              return (
                <span onClick={remove} key={message.id}>{message.data.string}</span>
              )
            }.bind(this))}
          </div>
        );
      }
    });

    Container = TestUtils.renderIntoDocument(
      <ContainerComponent />
    );
  })

  it('adds one message', function() {
    expect(Container.state.stack.length).toBe(0);
    Container.add();

    expect(Container.state.stack.length).toBe(1);
  });

  it('should have incremented id on add', function() {
    Container.add();
    expect(Container.state.stack[0].id).toBe(1);
  });

  it('removes one message', function() {
    Container.add();
    Container.add();
    expect(Container.state.stack.length).toBe(2);
    Container.remove(1);
    expect(Container.state.stack.length).toBe(1);
    expect(Container.state.stack[0].id).toBe(2);
  });

  it('flushes all messages', function() {
    Container.add();
    Container.add();
    Container.add();
    Container.add();
    expect(Container.state.stack.length).toBe(4);

    Container.flush();
    expect(Container.state.stack.length).toBe(0);
  });
});