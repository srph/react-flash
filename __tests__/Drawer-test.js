/** @jsx React.DOM */

jest.dontMock('../src/Drawer');

describe('it must fuck', function() {
  it('fucks itself', function() {
    var React = require('react/addons');
    var DrawerComponent = require('../src/Drawer');
    var TestUtils = React.addons.TestUtils;

    var drawer = TestUtils.renderIntoDocument(
      <DrawerComponent />
    );

    expect(7).toBe(7);
  });
});