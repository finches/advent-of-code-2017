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

    describe('#rowDivide()', function() {
      it('should return 4 when the input is [5, 9, 2, 8]', function() {
        assert.equal(solver.rowDivide([5, 9, 2, 8]), 4);
      });

      it('should return 3 when the input is [9, 4, 7, 3]', function() {
        assert.equal(solver.rowDivide([9, 4, 7, 3]), 3);
      });

      it('should return 2 when the input is [3, 8, 6, 5]', function() {
        assert.equal(solver.rowDivide([3, 8, 6, 5]), 2);
      });
    });

    describe('#solve()', function() {
      it('should 18 when the input is 5\t9\t2\t8\n9\t4\t7\t3\n3\t8\t6\t5', function() {
        assert.equal(solver.solve('5\t9\t2\t8\n9\t4\t7\t3\n3\t8\t6\t5'), 9);
      });
    });
  });