/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const copyArr = arr.slice();
  const filteredArr = arr.filter((item) => item !== -1).sort((a, b) => (b - a));

  for (let cnt = 0; cnt < copyArr.length; cnt += 1) {
    if (copyArr[cnt] !== -1) copyArr[cnt] = filteredArr.pop();
  }

  return copyArr;
}

module.exports = sortByHeight;
