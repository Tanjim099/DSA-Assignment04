function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = new Array(cols).fill(null).map(() => new Array(rows));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const result = transpose(matrix);
console.log(result);
