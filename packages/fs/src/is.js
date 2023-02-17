// 用来判断是否是xxx的方法

const fs = require("fs");

/**
 * 是不是文件夹
 */
function isDir(_path) {
  return fs.statSync(_path).isDirectory();
}

/**
 * 是不是文件
 */
function isFile(_path) {
  return fs.statSync(_path).isFile();
}

module.exports = {
  isDir,
  isFile,
};
