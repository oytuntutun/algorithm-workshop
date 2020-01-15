// find biggest common divisor between a and b

const findCommonDivisor = (a, b) => {
  // find dividers of a & b
  let firstDividers = []
  let secondDividers = []
  let commonDividers = []

  // find all divisors of a
  for (var i = 0; i <= a; i++) {
    if (a % i === 0) firstDividers.push(i)
  }

  // find all divisors of b
  for (var i = 0; i <= b; i++) {
    if (b % i === 0) secondDividers.push(i)
  }

  // find common divisors and store them in commonDividers
  firstDividers.forEach((x) => {
    if (secondDividers.includes(x)) commonDividers.push(x)
  })

  console.log(
    'first numbers divisors', firstDividers,
    'second numbers divisors', secondDividers,
    'common divisors', commonDividers
  )

  // find highest common divisor
  console.log('highest common divisor is', Math.max(...commonDividers))
}

export default findCommonDivisor
