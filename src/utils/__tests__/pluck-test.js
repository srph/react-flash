var src = '../pluck';
jest.dontMock(src);

describe('pluck', function() {
  var pluck, obj;
  beforeEach(function() {
    pluck = require(src);
    obj = { x: '1', y: '2', z: [] };
  });

  it('should pluck out a property', function() {
    expect(pluck(obj, 'x')).toEqual({ x: '1' });
  });

  it('it should pluck out properties', function() {
    expect(pluck(obj, ['x', 'y'])).toEqual({ x: '1', y :'2' });
  });
});