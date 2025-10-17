function maxProduct(nums) {
  let maxProd = nums[0];
  let minProd = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];

    // If current element is negative, swap maxProd and minProd
    if (curr < 0) {
      [maxProd, minProd] = [minProd, maxProd];
    }

    // Update max and min products
    maxProd = Math.max(curr, maxProd * curr);
    minProd = Math.min(curr, minProd * curr);

    // Update the global result
    result = Math.max(result, maxProd);
  }

  return result;
}

// Example:
console.log(maxProduct([2, 3, -2, 4])); // Output: 6
console.log(maxProduct([-2, 0, -1]));  // Output: 0
console.log(maxProduct([-2, 3, -4]));  // Output: 24
