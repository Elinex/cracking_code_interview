// Given two strings, write a function to check if they are one edit (or zero edits) away.
// Editions: insert, replace or remove a character.

function oneAway(strA, strB){
  let editions = 0;

  let i = 0;
  let j = 0;

  while (i < strA.length || j < strB.length){
    // remove
    if (strA[i] !== strB[j] && strA[i+1] === strB[j]){
      editions++
      i++
    } 
    // replace
    else if (strA[i] !== strB[j] && strA[i] !== 'undefined'){
      editions++;
    } 
    // insert
    else if (strA[i] === 'undefined' && strB[j]){
      editions++
    }

    i++;
    j++;

  }

  if (editions <= 1){
    return true
  } else {
    return false
  }

}

// Tests
console.log(oneAway('pale', 'ple')) // true
console.log(oneAway('pales', 'pale')) // true
console.log(oneAway('pale', 'bale')) // true
console.log(oneAway('pale', 'bake')) // false
console.log(oneAway('pales', 'ple')) // false