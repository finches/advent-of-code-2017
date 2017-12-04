let assert = require('chai').assert;
let solver = require('./solver.js');

describe('solver', function() {
    describe('#captchaSolver()', function() {
      it('should return 3 when the input is 1122', function() {
        assert.equal(solver.captchaSolver('1122'), 3);
      });

      it('should return 4 when the input is 1111', function() {
        assert.equal(solver.captchaSolver('1111'), 4);
      });

      it('should return 0 when the input is 1234', function() {
        assert.equal(solver.captchaSolver('1234'), 0);
      });

      it('should return 9 when the input is 91212129', function() {
        assert.equal(solver.captchaSolver('91212129'), 9);
      });
    });
  });