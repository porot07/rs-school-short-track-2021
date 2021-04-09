/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  for (let firstArr = 0; firstArr < matrix[0].length; firstArr += 1) {
    for (let secondArr = 0; secondArr < matrix.length; secondArr += 1) {
      if (matrix[secondArr][firstArr] === 0) {
        break;
      }
      result += matrix[secondArr][firstArr];
    }
  }
  return result;
}

module.exports = getMatrixElementsSum;
