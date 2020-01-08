// Write a function, persistence, that takes in a positive parameter num
// and returns its multiplicative persistence, which is the number of times
// you must multiply the digits in num until you reach a single digit.
let count = 1

const persistentBugger = (num) => {
  let findIndividuals = num.toString().split('')
  let numerify = findIndividuals.map((x) => parseInt(x)).reduce((a,b) => {
    return a*b
  })

  if(numerify.toString().length !== 1) {
    count += 1
    persistentBugger(numerify);
  }

  return count
}

export default persistentBugger
