const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const result = matrix
    .map((arr) => arr.filter((el) => el === "^^").length)
    .reduce((a, c) => a + c, 0);

  return result ? result : 0;
}

module.exports = {
  countCats,
};
