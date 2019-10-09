// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1.

function stringRotation(s1, s2){ 
  if(s1.length !== s2.length){
    return false
  }
  return (s2 + s2).includes(s1)
}

// Tests
console.log(stringRotation('waterbottle', 'erbottlewat'), true) 
console.log(stringRotation('waterbottle', 'erbotlewatt'), false)
console.log(stringRotation('aaata', 'aataa'), true)