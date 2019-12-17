// executeOrder function takes a template and searches for the fields of the template
// if it finds an area that matches properties of the leads then replaces it.
// also there are areas where there are words within {...} it sets the one of those
// words to each person

const leads = [
  { name: 'John', address: 'first street' },
  { name: 'Hasan', address: 'second street' },
  { name: 'Abdurrezzak', address: 'third street' },
  { name: 'Oytun', address: 'forth street' }
]

const template = '{Hello*Hi*Cheers*Happy Week*No Monday Syndrome} **name**, are you a {beauty*jerk}? {Meet*Fight*play pool with} me at **address**'

const executeOrder = () => {
  let modifiedTemplate = template.split('')
  let openingBrackets = []
  let closingBrackets = []
  let findIndexes = modifiedTemplate.forEach((char) => {
    let mainTemplate = template
    // find indexes for opening area
    if(char === '{') {
      let indexOfFirstOpening = modifiedTemplate.indexOf(char)
      openingBrackets.push(indexOfFirstOpening + openingBrackets.length + closingBrackets.length + 1)
      modifiedTemplate.splice( indexOfFirstOpening ,1)
      // console.log(openingBrackets)
    }

    // find indexes for closing area
    if(char === '}') {
      let indexOfLastOpening = modifiedTemplate.indexOf(char)
      closingBrackets.push(indexOfLastOpening + closingBrackets.length + openingBrackets.length)
      modifiedTemplate.splice( indexOfLastOpening ,1)
    }
    return
  })

  let foundStrings = []
  // find strings by their opening and closing points
  for (var i = 0; i < openingBrackets.length; i++) {
    let templateToArr = template.split('')
    foundStrings.push(templateToArr.slice(openingBrackets[i], closingBrackets[i]).join(''))
  }
  // convert words in the string to an array
  let stringsInFinal = foundStrings.map((string) => {
    let words = string.split('*')
    return words
  })

  leads.forEach((x, index)=> {
    let text = template
    let properties = Object.keys(x)

    properties.forEach((property, ind) => {
      text = text.replace(`**${property}**`, x[property])

      foundStrings.forEach((y, i) => {
        // remove found strings from template, replace them depending on string number
        text = text.replace(`{${y}}`, stringsInFinal[i][index%stringsInFinal[i].length])
      })
    })
    console.log(text)
  })
}

export default executeOrder
