// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for
// the last two names, which should be separated by an ampersand.

const formatAStringOfNames = (names) => {

  if (names.length === 0) {
    return ''
  }

  if (names.length === 1) {
    return names[0].name
  }

  let nameList = []
  names.forEach((x) => {
    nameList.push(x.name)
  })
  let lastName = nameList.pop()

  return nameList.join(', ') + ` & ${lastName}`
}

export default formatAStringOfNames
