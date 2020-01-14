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
import persistentBugger from './algorithms/persistentBugger'
import formatAStringOfNames from './algorithms/formatAStringOfNames'
import countSmileys from './algorithms/countSmileys'
import socks from './algorithms/socks'
import {rangeOfNumbers, countdown} from './algorithms/recursiveSample'
import highestScoringWord from './algorithms/highestScoring'
import checkWord from './algorithms/TRGrammerRule'


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

// findFriends(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
// returnStringAsSortedBlocks('21AxBz')

// console.log(persistentBugger(39))

const given = [
  {name: 'Bart'},
  {name:'Oytun'},
  {name: 'Lisa'},
  {name: 'Ayaz'}
]

// console.log(formatAStringOfNames(given))

const smileys = [':D',':~)',';~D',':)']
// console.log(countSmileys(smileys))


// console.log(socks(7, [1,2,1,2,1,3,2,2]))

// console.log('rangeofnums', rangeOfNumbers(2, 9))

// console.log('countdown',countdown(10)); // [5, 4, 3, 2, 1]

// console.log(checkWord('gözlük'))

console.log(highestScoringWord('what time are we climbing up the volcano'))
