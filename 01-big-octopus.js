function quadraticBiggestFish(fishes) {
  let longest = null;
  for (let i = 0; i < fishes.length; i++) {
    let currFish = fishes[i];
    if (longest === null)
      longest = currFish;
    for (let j = i + 1; j < fishes.length; j++) {
      if (longest.length < fishes[j].length)
        longest = fishes[j];
      else
        longest = currFish;
    }
  }
  return longest
}

const fishies = ['fish', 'fiiiissshhhhhh', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
'ffiiiiisshh', 'fsh'];
console.log(quadraticBiggestFish(fishies));


function nlognBiggestFish(fishes) {
  // Code goes here ...
}


function linearBiggestFish(fishes) {
  // Code goes here ...
}


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  // Code goes here ...
}


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  // Code goes here ...
}
