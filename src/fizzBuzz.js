class FizzBuzz {
  constructor() {
  }
  play(number) {
    if (this._isDivisibleBy(15, number)) {
      return 'FizzBuzz';
    }
    else if (this._isDivisibleBy(5, number)) {
      return 'Buzz';
    }
    else if (this._isDivisibleBy(3, number)) {
      return 'Fizz';
    }
    else {
      return number;
    }
    ;
  }
  _isDivisibleBy(divisor, number) {
    return number % divisor === 0;
  }
}


// var fizzBuzz = new fizzBuzz();
//
// for (var i = 1; <= 100; i++) {
//   console.log(fizzBuzz.play(i));
// }

// function FizzBuzz() {
// }

// FizzBuzz.prototype.play = function (number) {
//   if (this._isDivisibleBy(15, number)) {
//     return 'FizzBuzz';
//   } else if (this._isDivisibleBy(5, number)) {
//     return 'Buzz';
//   } else if (this._isDivisibleBy(3, number)) {
//     return 'Fizz';
//   } else {
//     return number;
//   };
// };
// FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
//   return number % divisor === 0;
// };
