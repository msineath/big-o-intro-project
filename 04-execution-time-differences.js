function myMin1a(list) {
  // Code goes here ...
  let switched = false;
  let smallest
  for (let i = 0; i < list.length; i++) {
    smallest = list[i]
    for (let j = 0; j < list.length; j++) {
      if (list[j] < smallest)
        smallest = list[j];
    }
  }
  return smallest
}

const list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
console.log(myMin1a(list));  // =>  -5

function myMin1b(list) {
  list.sort((a,b) => a - b);
  return list[0];
}


function myMin2(list) {
  // Code goes here ...
  let smallest = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i] < smallest)
      smallest = list[i];
  }
  return smallest
}


function largestContiguousSubsum1(array) {
  // Code goes here ...
}


function largestContiguousSubsum2(array) {
  // Code goes here ...
}
