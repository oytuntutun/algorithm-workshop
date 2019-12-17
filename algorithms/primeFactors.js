import isPrime from './isPrime'

// find all the prime numbers until maxNumber and show them

const primeFactors = (maxNumber) => {
  let foundPrimes = []

  // loop the numbers starting from 2 until maxNumber if it is prime store it
  for (let i = 2; i < maxNumber; i++) {
    if(isPrime(i) === `${i} is prime`) {
      foundPrimes.push(i)
    }
  }
  console.log(foundPrimes)
}

export default primeFactors
