/**
 * 将object格式化
 * @param {object} obj
 * @param {number} tap
 * @returns {string}
 */
function stringifyObject(obj, tap = 2) {
  return JSON.stringify(obj, undefined, tap);
}

module.exports = {
  stringifyObject,
};
