// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards.

function palindromePermutation(str){
  const freq = charFrequency(str);
  let odds = 0;

  for (let key in freq){
    if (freq[key] % 2 !== 0 && key !== ' '){
      odds++
    }
  }

  if (odds > 1){
    return false
  }
  else {
    return true
  }
  
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
console.log(palindromePermutation('tact coa')) // true
console.log(palindromePermutation('ana')) // true
console.log(palindromePermutation('pampa')) // true
console.log(palindromePermutation('coisa')) // false
console.log(palindromePermutation('ama deus')) // false
console.log(palindromePermutation('ama dmaa')) // true