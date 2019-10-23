const { maxSubarray } = require('./index');
const { expect } = require('chai');

function expectMaxSubarray(array, value) {
  expect(maxSubarray(array)).to.equal(value);
}

describe('Max subarray', function() {
  it('Returns 0 for an empty array', function() {
    expectMaxSubarray([], 0);
  });

  it('Returns the sum for an array of all positive ints', function() {
    expectMaxSubarray([2, 5, 0, 8], 15);
  });

  it('Handles [2, -1, 2]', function() {
    expectMaxSubarray([2, -1, 2], 3);
  });

  it('[5, -2, 1]', function() {
    expectMaxSubarray([5, -2, 1], 5);
  });

  it('[1, -2, 5]', function() {
    expectMaxSubarray([1, -2, 5], 5);
  });

  it('[1, 1, 1, -2, 1, 3]', function() {
    expectMaxSubarray([1, 1, 1, -2, 1, 3], 5);
  });

  it('[1, 1, 1, -90, 1, 1]', function() {
    expectMaxSubarray([1, 1, 1, -90, 1, 1], 3);
  });

  it('[1, 1, 1, -90, 1, 3]', function() {
    expectMaxSubarray([1, 1, 1, -90, 1, 3], 4);
  });

  it('[1, -90, 1, 5, -7, 5]', function() {
    expectMaxSubarray([1, -90, 1, 5, -7, 5], 6);
  });

  it('[1, -90, 5, -7, 5]', function() {
    expectMaxSubarray([1, -90, 5, -7, 5], 5);
  });

  it('[1, -90, 2, 5, -7, 5]', function() {
    expectMaxSubarray([1, -90, 2, 5, -7, 5], 7);
  });

  it.skip('[-90, -7, -1]', function() {
    expectMaxSubarray([-90, -7, -1], -1);
  });
});
