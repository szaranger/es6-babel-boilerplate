var assert = require('chai').assert;
var bar = require('../dist/').bar;

describe('Bar', function() {
  it('Should return Hello world!', function() {
    assert.equal(
      bar('Hello'),
      'Hello world!'
    );
  });
});
