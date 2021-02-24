// Time : O(n^2), Space: O(1)
function badTwoSum(arr, targetSum) {
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (first + arr[j] === targetSum)
        return true;
    }
  }
  return false;
}

const arr = [0, 1, 2,3,4, 5,6, 7];
// console.log(badTwoSum(arr, 6)); // => should be true
// console.log(badTwoSum(arr, 10)); // => should be false

function okayTwoSum1(arr, targetSum) {
  arr.sort((a,b) => a - b);

}

console.log(okayTwoSum1(arr, 6)); // => should be true
console.log(okayTwoSum1(arr, 10)); // => should be false

function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}


function twoSum(arr, targetSum) {
  // Code goes here ...
}


function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}
