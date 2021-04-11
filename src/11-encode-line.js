/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let result = '';
  for (let cnt = 0; cnt < str.length; cnt += 1) {
    if (str[cnt] === str[cnt + 1]) {
      count += 1;
    } else {
      result = `${result}${count + str[cnt]}`;
      count = 1;
    }
  }
  return result.replace(/1/g, '');
}

module.exports = encodeLine;
