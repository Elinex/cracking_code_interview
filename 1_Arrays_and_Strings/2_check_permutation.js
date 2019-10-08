// Given two strings, write a method to decide if one is a permutation of the other

function checkPermutation(strA, strB){
  if (strA.length !== strB.length){
    return false
  }
  const charsA = charFrequency(strA)
  const charsB = charFrequency(strB)
  for (let char in charsA){
    if (charsA[char] !== charsB[char]){
      return false
    }
  }
  return true
}

function charFrequency(str){
  let obj = {}
  for (let i = 0; i < str.length; i++){
    if (obj[str[i]]){
      obj[str[i]]++
    } else {
      obj[str[i]] = 1
    }
  }
  return obj
}

// Tests
console.log(checkPermutation('', 'a')) // false
console.log(checkPermutation('abc', 'cba')) // true
console.log(checkPermutation('abc', 'aef')) // false
console.log(checkPermutation('', '')) // true
console.log(checkPermutation('aabc', 'abc')) // false
console.log(checkPermutation('abracadabra', 'cadabraabra')) // true
console.log(checkPermutation('cadabra', 'cadabraabra')) // false