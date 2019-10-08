// Write an algorithm such that if an element in an MxN matrix is 0, its entire
// row and column are set to 0.

function zeroMatrix(matrix){
  const rows = matrix.length
  const cols = matrix[0].length
  let rowsToZero = {}
  let colsToZero = {}

  for (let row = 0; row < rows; row++){
    for (let col = 0; col < cols; col++){
      let element = matrix[row][col]
      if (element === 0){
        rowsToZero[row] = true
        colsToZero[col] = true
      }
    }
  }

  for (let row in rowsToZero){
    const num = Number(row)
    for (let i = 0; i < cols; i++){
      matrix[num][i] = 0
    }
  }

  for (let col in colsToZero){
    const num = Number(col)
    for (let i = 0; i < rows; i++){
      matrix[i][num] = 0
    }
  }

  return matrix
}

// Tests
console.log(zeroMatrix([
  [0,1,0],
  [0,1,1],
  [1,1,1]
]))
// [
//   [0,0,0],
//   [0,0,0],
//   [0,1,0]
// ]

console.log(zeroMatrix([
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
]))
// [
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [0, 0, 0, 0],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1]
// ]