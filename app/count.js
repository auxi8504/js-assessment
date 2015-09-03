exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var count = 0;
    var timeout;
    var output = function (value, count) {
      timeout = setTimeout(function () {
        console.log(value);
      }, count * 100);
    };

    while (start <= end) {
      if (count === 0) {
        console.log(start);
      } else {
        output(start, count);
      }
      ++start;
      ++count;
    }

    return {
      cancel: function () {
        clearTimeout(timeout);
      }
    }
  }
};
