function maxSubarray(array) {
  if (!array instanceof Array || array.length === 0) {
    return 0;
  }

  let maxSum = 0, currentSum = 0;
  array.forEach(value => {
    currentSum = Math.max(0, currentSum + value);
    maxSum = Math.max(maxSum, currentSum);
  });

  return maxSum;
}

module.exports = {
  maxSubarray
};
