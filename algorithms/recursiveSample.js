
let final = []

export const rangeOfNumbers = (startNum, endNum) => {
  final.push(startNum)
  if (startNum === endNum) {
    return [startNum]
  } else {
    rangeOfNumbers(startNum + 1, endNum)
    return final
  }
}


export const countdown = (n) => {
  if (n < 1) {
    return []
  } else {
    const result = countdown(n - 1)
    result.push(n)
    return result.sort((a, b) => b - a)
  }
}


export const translatePigLatin = (str) => {
  const letters = str.split('')
  let notVovelLetters = []
  let text = []
  const firstLetter = letters.shift()
  const checkVovel = /[aeiouAEIOU]/

  for (let i = 0; i < str.length; i++) {
    if (checkVovel.test(letters[i])) {
      break;
    }
    text.push(letters[i])
  }


  for (let i = 0; i < str.length; i++) {
    if (!checkVovel.test(letters[i])) {
      break;
    }
    notVovelLetters.push(letters[i])
  }
  console.log('bankai', notVovelLetters)

  if (checkVovel.test(firstLetter)) {
    console.log('vovel')
    return firstLetter + letters.join('') + 'way'
  } else {
    console.log('notvovel')
    return notVovelLetters.join('') + firstLetter + text.join('') + 'ay'
  }
}
