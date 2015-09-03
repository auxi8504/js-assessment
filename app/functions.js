exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray: function (fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak: function (fn, obj) {
    return fn.apply(obj);
  },

  functionFunction : function (str) {
    return function (anotherStr) {
      return str + ', ' + anotherStr;
    };
  },

  makeClosures : function (arr, fn) {
    var functs = [];
    var i;
    var myFunction = function (value) {
      return function () {
        return fn(value);
      };
    };
    for (i = 0; i < arr.length; ++i) {
      functs.push(myFunction(arr[i]));
    }
    return functs;
  },

  partial : function (fn, str1, str2) {
    return function (str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments : function () {
    var i = 0;
    var sum = 0;
    for (i = 0; i < arguments.length; ++i) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt : function (fn) {
    var args = [];
    var i = 0;
    for (i = 1; i < arguments.length; ++i) {
      args.push(arguments[i]);
    }
    fn.apply(null, args);
  },

  partialUsingArguments : function (fn) {
    //return the valid arguments
    var getArgs = function (argsParameter) {
      var i = 0;
      var args = [];
      for (i = 0; i < argsParameter.length; ++i) {
        if (typeof argsParameter[i] !== 'function') {
          args.push(argsParameter[i]);
        }
      }
      return args;
    };

    var func = function () {
      var args1 = getArgs(arguments);
      return function () {
        var args2 = getArgs(arguments);
        var allArguments = args1.concat(args2);
        return fn.apply(null, allArguments);
      };
    };

    return func.apply(null, getArgs(arguments));
  },
  curryIt : function (fn) {
    return function (a) {
      return function (b) {
        return function (c) {
          return fn(a, b, c);
        };
      };
    };
  }
};
