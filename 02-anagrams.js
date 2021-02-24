function firstAnagram(str1, str2) {
  if (str1.length === 0 || str2.length === 0)
    return false;
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    let ssi = str2.indexOf(letter);
    if (ssi !== -1) {

      str2 = str2.split('')
      str2.splice(ssi,1);
      str2 = str2.join('')
    }
    else
      return false;
  }
  if (str2.length === 0)
    return true;
  else
    return false;
}

// console.log(firstAnagram("gizmo", "sally"));    // => false
// console.log(firstAnagram("elvis", "lives"));    // => true


function secondAnagram(str1, str2) {
  // Code goes here ....
  if(str1.length !== str2.length) {
    return false;
  }
  str1.sort((a, b) => a - b)
  str2.sort((a, b) => a - b)

  for(let i = 0; i < str1.length; i++) {
    if(str1[i] !== str2[i]) 
    return false
  }
  return true
}

console.log(secondAnagram("gizmo", "sally"));    // => false
console.log(secondAnagram("elvis", "lives"))

function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
