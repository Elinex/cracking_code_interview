// Write a method to replace all spaces in a string with '%20'. 

function URLify(str){
  const toArray = str.split('')
  for (let i in toArray){
    if(toArray[i] === ' '){
      toArray[i] = '%20'
    }
  }
  return toArray.join('')
}

// Tests
console.log(URLify('Mr John Smith')) // 'Mr%20John%20Smith'