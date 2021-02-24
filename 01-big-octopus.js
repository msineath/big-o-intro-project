function quadraticBiggestFish(fishes) {
  let longest = null;
  let fishFound = true;

  for (let i = 0; i < fishes.length; i++) {
    let currFish = fishes[i];
    fishFound = true;
    if (longest === null)
      longest = currFish;
    for (let j = i + 1; j < fishes.length; j++) {
      if (currFish.length < fishes[j].length)
        fishFound = false;
    }
    if (fishFound)
    return currFish
  }
  return longest
}

const fishies = ['fish', 'fiiiissshhhhhh', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
'ffiiiiisshh', 'fsh'];
// console.log(quadraticBiggestFish(fishies));


function nlognBiggestFish(fishes) {
  // Code goes here ...
  fishes.sort((a,b) => {
    return a.length - b.length;
  })
  return fishes[fishes.length - 1];
}

// console.log(nlognBiggestFish(fishies))

function linearBiggestFish(fishes) {
  let longest = fishes[0];
  fishes.forEach(fish => {
    if (longest.length < fish.length)
      longest = fish;
  })
  return longest;
}
// console.log(linearBiggestFish(fishies))

tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  for (let i = 0; i < tilesArray.length; i++) {
    if (tilesArray[i] === direction)
      return i;
  }
}

// console.log(slowDance('down',tilesArray))


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
  if (direction in tilesObj)
    return tilesObj[direction];
}

console.log(fastDance('down',tilesObj))
