var src = '../isObject';
jest.dontMock(src);

describe('isObject util', function() {
  var isObject;
  beforeEach(function() { isObject = require(src); });

  it('should return true if an object is passed', function() {
    expect(isObject({})).toBe(true);
  });

  it('should return false if a primitive is passed', function() {
    expect(isObject(5)).toBe(false);
    expect(isObject('5')).toBe(false);
  });
});