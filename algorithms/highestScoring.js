/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position
in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest
in the original string. */


const highestScoringWord = (sentence) => {
  let scores = []

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let wordsToArr = sentence.split(' ')
  let calculateWords = wordsToArr.forEach((word) => {
    let letters = word.split('')
    let wordScore = 0
    let scoreOfWord = letters.forEach((score) => {
      wordScore += alphabet.indexOf(score)
    })
    scores.push(wordScore)
  })

  let highestScore = Math.max(...scores)
  let indexOfHighest = scores.indexOf(highestScore)
  return wordsToArr[indexOfHighest]
}

export default highestScoringWord
