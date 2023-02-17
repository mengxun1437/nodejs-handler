// 获取内容
const fs = require("fs");
const path = require("path");
const { isFile } = require("./is");

/**
 * 获取文件的类型
 * @param {string} file
 * @returns {string}
 */
function getFileType(file) {
  if (!file) {
    return "none";
  }
  const spIndex = file.lastIndexOf(".");
  if (spIndex < 0) {
    return "none";
  }
  return file.slice(spIndex + 1);
}

/**
 * 获取文件夹的树结构
 * @param {string} base
 * @param {boolean} deep
 */
function getTree(base = "./", deep = false) {
  const res = [];
  const curr = fs.readdirSync(base);
  curr.forEach((c) => {
    const curPath = path.join(base, c);
    const _isFile = isFile(curPath);
    const data = {
      type: _isFile ? "file" : "dir",
      path: curPath,
    };
    if (_isFile) {
      data.fileType = getFileType(c);
    }
    if (deep && !_isFile) {
      data.child = getTree(curPath, deep);
    }
    res.push(data);
  });
  return res;
}

module.exports = {
  getFileType,
  getTree,
};
