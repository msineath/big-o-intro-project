function firstAnagram(str1, str2) {
  if (str1.length === 0 || str2.length === 0)
    return false;
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    let ssi = str2.indexOf(letter);
    if (ssi)
      str2.split('').splice(ssi,1).join('');
    else
      return false;
  }
  if (str2.length === 0)
    return true;
  else
    return false;
}

console.log(firstAnagram("gizmo", "sally"));    // => false
console.log(firstAnagram("elvis", "lives"));    // => true


function secondAnagram(str1, str2) {
  // Code goes here ....
}


function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
