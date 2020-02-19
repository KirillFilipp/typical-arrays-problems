
exports.min = function min(array) {
  if (!Array.isArray(array) || array.length == 0) {
    return 0;
  } else {
    let result = array.sort((a, b) => a - b);
    return result[0];
  }
}

exports.max = function max(array) {
  if (!Array.isArray(array) || array.length == 0) {
    return 0;
  } else {
    let result = array.sort((a, b) => a - b);
    return result[result.length - 1];
  }
}

exports.avg = function avg(array) {
  if (!Array.isArray(array) || array.length == 0) {
    return 0;
  } else {
    let result = array.reduce((accumulator, currentValue) => accumulator + currentValue);
    return result / array.length;
  }
}
