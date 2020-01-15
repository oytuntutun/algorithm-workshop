// find if the number is palindrome
// palindrome: if a word or sentence is the same when you read & write
// from the end it is named palindrome.

const checkPalindrome = (string) => {
  const reversedString = string
    // if the input is in another type than string, try to convert to string
    .toString()
    // create an array from each letter
    .split('')
    // reverse the letters in the array
    .reverse()
    // concatanate them to create reversed string
    .join('')

  const reversedStringToCheck = reversedString
    // replace symbols to compare with the original in order to check sentences
    .replace(/[^A-Z0-9]+/ig, '')
    // convert capital letters to lower case
    .toLowerCase()

  const modifiedString = string
    .toString()
    .toLowerCase()
    .replace(/[^A-Z0-9]+/ig, '')

  if (modifiedString === reversedStringToCheck) return `palindrome: ${string} COMPARED TO ${reversedString}`

  else return `Not a palindrome: ${string}`
}

export default checkPalindrome
