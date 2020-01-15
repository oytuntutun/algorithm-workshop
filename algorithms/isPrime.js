// prime numbers are the numbers that are divisable to self and 1.
// if a number is divisable other than self and 1 it is not prime.

const isPrime = (number) => {
  // number should be divisable to numbers between 2(excluded)-number(included)
  for (let i = 2; i < number; i++)
    if (number % i === 0) return `${number} is not prime`

  return `${number} is prime`
}

export default isPrime
