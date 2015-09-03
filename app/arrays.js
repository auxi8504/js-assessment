exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    var sum = 0;
    var i;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function (arr, item) {
    var filtered = arr.filter(function (element) {
      return element !== item;
    });
    return filtered;
  },

  removeWithoutCopy: function (arr, item) {
    var i;
    for (i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    var occurances = arr.filter(function (arrayItem) {
      return arrayItem === item;
    }).length;
    return occurances;
  },

  duplicates: function (arr) {
    var duplicates = [];
    var sortedArray = arr.sort();
    var i;
    for (i = 0; i < arr.length - 1; i++) {
      if (sortedArray[i + 1] === sortedArray[i] && duplicates.indexOf(sortedArray[i]) === -1) {
        duplicates.push(sortedArray[i]);
      }
    }
    return duplicates;
  },

  square: function (arr) {
    var squareArr = [];
    var i;
    for (i = 0; i < arr.length; i++) {
      squareArr.push(arr[i] * arr[i]);
    }
    return squareArr;
  },

  findAllOccurrences: function (arr, target) {
    var occurrencesIndexArray = [];
    var i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurrencesIndexArray.push(i);
      }
    }
    return occurrencesIndexArray;
  }
};
