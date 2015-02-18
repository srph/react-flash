var src = '../MessageMixin.js';
jest.dontMock(src);

describe('MessageTimeout Mixin', function() {
  it('should unmounted in 8 seconds');
  it('should stop timer only if the timer exists');
  it('should not start auto timer if no duration props was passed');
  it('should removed traces of timeout when unmounted');
});