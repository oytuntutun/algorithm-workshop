var express = require('express');
var app = express();
import isPrime from './algorithms/isPrime'
import primeFactors from './algorithms/primeFactors'
import findFibonacci from './algorithms/fibonacci'
import findCommonDivisor from './algorithms/findCommonDivisor'
import removeDuplicates from './algorithms/removeDuplicates'
import checkPalindrome from './algorithms/checkPalindrome'
import executeOrder from './algorithms/executeOrder'
import hoistingExample from './algorithms/hoistingExample'
import findFriends from './algorithms/findFriends'


// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.listen(3000, function () {
  console.log('workshop-server working on port 3000!');
});


// checks a number if it is prime
// console.log(isPrime(16))

// find all prime numbers until reaches number that is sent
// console.log(primeFactors(69))

// nth fibonacci number
// console.log(findFibonacci(21))

// find greatest common divisor
// console.log(findCommonDivisor(240, 120))

// remove duplicates in an array
// let arrayToSend = [2, 4, 6, 8, 9, 4, 2, 4, 5, 123, 312, 'bar', 'foo', 'bar']
// console.log(removeDuplicates(arrayToSend))

// check if the string is palindrome
// console.log(checkPalindrome('A, man a plan a canal Panama'))

// find description in related file algorithms/excecuteOrder.js
// executeOrder()

// Hoisting
// hoistingExample()

findFriends(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
// returnStringAsSortedBlocks('21AxBz')
