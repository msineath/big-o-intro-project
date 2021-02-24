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
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  for(let i = 0; i < str1.length; i++) {
    if(str1[i] !== str2[i])
      return false
  }
  return true
}

// console.log(secondAnagram("gizmo", "sally"));    // => false
// console.log(secondAnagram("elvis", "lives"))

function thirdAnagram(str1, str2) {
  let obj1 = {};
  let obj2 = {};
  let matched = null;
  str1.forEach(el => {
    let counter = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1.includes(el))
        counter++;
    }
    obj1[el] = counter;
  })
  str2.forEach(el => {
    let counter = 0;
    for (let i = 0; i < str2.length; i++) {
      if (str2.includes(el))
        counter++;
    }
    obj2[el] = counter;
  })
  obj1.forEach(key => {
    if (obj1[key] !== obj2[key])
      matched = false;
    else
      matched = true;
  })
  if (matched === false)
    return false;
  return true;
}

console.log(thirdAnagram("gizmo", "sally"));    // => false
console.log(thirdAnagram("elvis", "lives"))


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
