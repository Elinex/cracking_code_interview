// Write a method to replace all spaces in a string with '%20'. 

function URLify(str){
  const a = str.replace(/ /gi, '%20')
  return a
}

// Tests
console.log(URLify('Mr John Smith')) // 'Mr%20John%20Smith'