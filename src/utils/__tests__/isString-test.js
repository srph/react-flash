var src = '../isString';
jest.dontMock(src);

describe('isString util', function() {
  var isString;
  beforeEach(function() { isString = require(src); });

  it('should be true if value is a string', function() {
    expect(isString('123')).toBe(true);
    expect(isString('123.0')).toBe(true);
    expect(isString('yoloplsswag')).toBe(true);
  });

  it('should be false if value is a number', function() {
    expect(isString(123)).toBe(false);
    expect(isString(123.0)).toBe(false);
  });

  it('should be false if value is a regex', function() {
    expect(isString(/yoloplsswag/)).toBe(false);
    expect(isString(/^(yolo|swag)/)).toBe(false);
  });

  it('should be false if value is an object', function() {
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
  });
});