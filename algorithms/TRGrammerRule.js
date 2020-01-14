const checkWord = (word) => {
  const checkVovel = new RegExp(/^[aeıioöuüAEIİOÖUÜ]*$/gm)
  const checkHardSound = new RegExp(/^[aıouAIOU]*$/gm);
  const checkSoftSound = new RegExp(/^[eiöüEİÖÜ]*$/gm);

  // find all vovels in the word
  let filterVovels = word.split('').filter((vovel) => {
    if(checkVovel.test(vovel)) {
       return vovel
    }
  })

  // get a sting of vovels of the word
  let vovelWord = filterVovels.join('')

  // our rule doesn't apply to words with one vovel
  if(!vovelWord.length || vovelWord.length === 1) return 'no word or one vovel'

  return checkHardSound.test(vovelWord) || checkSoftSound.test(vovelWord)
    ? true
    : false
}

export default checkWord
