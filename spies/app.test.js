//spy come with builded in expect
const expect = require('expect');

describe('App', () => {
  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Darling', 50);
    expect(spy).toHaveBeenCalledWith('Darling', 50); //if test fail, spy will not be called
  });
});
