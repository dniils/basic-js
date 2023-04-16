const { NotImplementedError } = require("../extensions/index.js");

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
  const freq1 = {};
  const freq2 = {};
  let commonCount = 0;

  for (let i = 0; i < s1.length; i++) {
    freq1[s1[i]] = (freq1[s1[i]] || 0) + 1;
  }

  for (let i = 0; i < s2.length; i++) {
    freq2[s2[i]] = (freq2[s2[i]] || 0) + 1;
  }

  for (let char in freq1) {
    if (freq2[char]) {
      commonCount += Math.min(freq1[char], freq2[char]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
