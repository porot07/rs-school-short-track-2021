/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const str2 = s2.split('');
  for (let cnt = 0; cnt < s1.length; cnt += 1) {
    const index = str2.findIndex((s) => s === s1[cnt]);
    if (index >= 0) {
      count += 1;
      str2.splice(index, 1);
    }
  }

  return count;
}

module.exports = getCommonCharacterCount;
