// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees.

function rotateMatrix(matrix){
  let newMatrix = []
  let j = 0

  while(j < matrix.length){
    let row = []
    let i = matrix.length - 1
    for (let k = 0; k < matrix.length; k++){
      row[k] = matrix[i][j]
      i--
    }
    newMatrix.push(row)
    j++
  }

  return newMatrix

}

// Tests
console.log(rotateMatrix([
  [0,1,2,3],
  [4,5,6,7],
  [8,9,10,11],
  [12,13,14,15]
]))
// [
//   [12,8,4,0],
//   [13,9,5,1],
//   [14,10,6,2],
//   [15,11,7,3]
// ]
console.log(rotateMatrix([
  [0,1,2],
  [3,4,5],
  [6,7,8]
]))
// [
//   [6,3,0],
//   [7,4,1],
//   [8,5,2]
// ]