// Implement a method to perform basic string compression using the counts of repearted 
// characters.

function stringCompression(str){
  const compressed = compress(str);

  if (compressed.length >= str.length){
    return str
  } else {
    return compressed
  }
}

function compress(str){
  let compressed = ''
  let i = 1
  let freq = 1;

  while (i <= str.length){
    let current = str[i]
    let previous = str[i-1]
    if (current === previous){
      freq++
    }
    else {
      compressed += previous + freq
      freq = 1
    }
    i++
  }
  
  return compressed
}

// Tests
console.log(stringCompression('aabcccccaaa')) // a2b1c5a3
console.log(stringCompression('a')) // a
console.log(stringCompression('aa')) // aa
console.log(stringCompression('aaa')) // a3
console.log(stringCompression('fandangos')) // fandangos
console.log(stringCompression('ffffffaaaaaa')) // f6a6
