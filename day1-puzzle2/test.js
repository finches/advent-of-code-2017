let assert = require('chai').assert;
let solver = require('./solver.js');

describe('solver', function() {
    describe('#captchaSolver()', function() {
      it('should return 6 when the input is 1212', function() {
        assert.equal(solver.captchaSolver('1212'), 6);
      });

      it('should return 0 when the input is 1221', function() {
        assert.equal(solver.captchaSolver('1221'), 0);
      });

      it('should return 4 when the input is 123425', function() {
        assert.equal(solver.captchaSolver('123425'), 4);
      });

      it('should return 12 when the input is 123123', function() {
        assert.equal(solver.captchaSolver('123123'), 12);
      });

      it('should return 4 when the input is 12131415', function() {
        assert.equal(solver.captchaSolver('12131415'), 4);
      });
    });
  });