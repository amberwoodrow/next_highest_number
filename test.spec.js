var main = require('./main.js');

describe('main', function() {

  it('gets the next greatest number', function() {
    expect(main.nextGreatest(2314)).toEqual(2341);
  });

  it('gets the next greatest number', function() {
    expect(main.nextGreatest(2314)).toEqual(2341);
  });

  it('gets the next greatest number', function() {
    expect(main.nextGreatest(2314)).toEqual(2341);
  });

  it('it doesn\'t get the next greatest number', function() {
    expect(main.nextGreatest(1)).toEqual("No greater number");
  });

  it('it doesn\'t get the next greatest number', function() {
    expect(main.nextGreatest(99)).toEqual("No greater number");
  });

});
