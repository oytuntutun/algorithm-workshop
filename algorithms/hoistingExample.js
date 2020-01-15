// JS hoists variables in this example i will try to sample them

var y;
var j;

const hoistingExample = () => {
  // here as you can see in your console, i can call console.log(notHoisted()) and it works
  console.log(notHoisted())
  function notHoisted() {
    return 'not hoisted function'
  }

  // if i try to call hoisted here it throws ReferenceError
  // this is because const hoisted gets hoisted to top since it is a variable
  // but the value of that variable isn't hoisted
  console.log('ReferenceError: Cannot access "hoisted" before initialization')


  const hoisted = () => {
    return 'hoisted'
  }

  // if we need to store the function in a variable we can use it after the variable
  console.log('expected: hoisted', hoisted())

  // if i call x like this with var it throws me undefined, not a ReferenceError
  console.log('expected undefined', x) // undefined
  var x = 'some data'
  // however if i call it here it returns me the value.
  console.log('expected "some data"', x) // 'some data'

  // so what JS does is this in the background first it hoists to the top
  // then it sets it's value
  console.log('expected undefined', y) // undefined
  y = 5
  console.log('expected 5', y) // 5


  // if we use let keyword it returns an error that says can not access before initialization
  // but if we use var keyword it gives us undefined
  console.log(j)
  // let j = 3
  var j = 3

}

export default hoistingExample
