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

// console.log(badTwoSum(arr, 6)); // => should be true
// console.log(badTwoSum(arr, 10)); // => should be false

function okayTwoSum1(arr, targetSum) {
  arr.sort((a,b) => a - b);
  let i = 0;
  let j = arr.length - 1;
  while(i < j) {
    if(arr[i] + arr[j] > targetSum)
    j--
    else if(arr[i] + arr[j] < targetSum)
    i++
    else
    return true
  }
  return false
}

// console.log(okayTwoSum1(arr, 6)); // => should be true
// console.log(okayTwoSum1(arr, 10)); // => should be false

function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
  
}
//


function twoSum(arr, targetSum) {
  // Code goes here ...
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    if(!obj[arr[i]]) {
      obj[targetSum - arr[i]] = i
    } else {
      return [i, obj[arr[i]]]
    }
  }
  return false
}
const arr = [0, 1, 5, 7];

console.log(twoSum(arr, 6)); // => should be true
console.log(twoSum(arr, 10)); // => should be false

function twoSumIndices(arr, targetSum) {
  // Code goes here ...

}
