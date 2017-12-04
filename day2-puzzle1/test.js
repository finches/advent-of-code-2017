let assert = require('chai').assert;
let solver = require('./solver.js');

describe('solver', function() {
    describe('#parseRow()', function() {
      it('should return [5,1,9,5] when the input is 5\t1\t9\t5', function() {
        assert.deepEqual(solver.parseRow('5\t1\t9\t5'), [5,1,9,5]);
      });
    });

    describe('#parseMatrix()', function() {
      it('should return an array of individual lines when the input is 5\t1\t9\t5\n7\t5\t3\n2\t4\t6\t8', function() {
        assert.deepEqual(solver.parseMatrix('5\t1\t9\t5\n7\t5\t3\n2\t4\t6\t8'), ['5\t1\t9\t5', '7\t5\t3', '2\t4\t6\t8']);
      });
    });

    describe('#rowDiff()', function() {
      it('should return 8 when the input is [5, 1, 9, 5]', function() {
        assert.equal(solver.rowDiff([5, 1, 9, 5]), 8);
      });

      it('should return 4 when the input is [7, 5, 3]', function() {
        assert.equal(solver.rowDiff([7, 5, 3]), 4);
      });

      it('should return 6 when the input is [2, 4, 6, 8]', function() {
        assert.equal(solver.rowDiff([2, 4, 6, 8]), 6);
      });
    });

    describe('#solve()', function() {
      it('should 18 when the input is 5\t1\t9\t5\n7\t5\t3\n2\t4\t6\t8', function() {
        assert.equal(solver.solve('5\t1\t9\t5\n7\t5\t3\n2\t4\t6\t8'), 18);
      });
    });
  });