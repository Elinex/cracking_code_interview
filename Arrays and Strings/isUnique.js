// Implement an algorithm to determine if a string has all unique characters. 

// with no extra data structure
// function isUnique(str){
//   for (let i = 0; i < str.length; i++){
//     for (let j = 0; j < str.length; j++){
//       if (str[i] === str[j] && i !== j){
//         return false
//       }
//     }
//   }
//   return true
// }

// with extra data structure
function isUnique(str){
  let chars = {};

  for (let i = 0; i < str.length; i++){
    if (chars[str[i]]){
      return false
    } else {
      chars[str[i]] = true
    }
  }

  return true;
}

// Tests
console.log(isUnique('abc')) // true
console.log(isUnique('aabc')) // false
console.log(isUnique('')) // true
console.log(isUnique('ababab')) // false