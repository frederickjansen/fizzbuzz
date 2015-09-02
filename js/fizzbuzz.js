var FizzBuzz = (function () {
  /**
   * Implementation of FizzBuzz
   * @param n uint between 1 and infinity
   */
  var run = function (n) {
    if (typeof n === 'undefined') {
      console.error('No value provided');
    } else if (typeof n !== 'number') {
      console.error('N must be of type number');
    } else if (n < 1) {
      console.error('N must be >= 1');
    } else {
      var output;
      for (var i = 1; i <= n; i++) {
        output = '';
        if (i % 3 === 0) {
          output += 'Fizz'
        }
        if (i % 5 === 0) {
          output += 'Buzz';
        }
        console.log(output || i);
      }
    }
  };

  return {
    run: run
  }
})();
