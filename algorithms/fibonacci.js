// Fibonacci numbers can be found by adding the number before it. like:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... and so on
// try to find nth fibonacci in this function

const findFibonacci = (index) => {
  // initial array to calculate next numbers
  let fibonacci = [0, 1]

  for (var i = 0; i < index - 2; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i + 1])
  }
  // show generated array
  console.log('generated array', fibonacci)
  // show last item
  console.log('item on index is', fibonacci[index - 1])
}

export default findFibonacci
