// Given an array (arr) as an argument complete the function countSmileys that
// should return the total number of smiling faces.
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :]



const countSmileys = (arr) => {
  let validSmileys = []

  arr.map((y) => {
    let divide = y.split('')
    if(y.length === 2) {
      if((divide[0] === ':' || divide[0] === ';') && divide[1] === ')' || divide[1] === 'D')
      validSmileys.push(y)
    }
    if(y.length === 3) {
      if((divide[0] === ':' || divide[0] === ';') && (divide[1] === '-' || divide[1] === '~') && (divide[2] === ')' || divide[2] === 'D'))
      validSmileys.push(y)
    }
  })


  return validSmileys.length !== 0 ?
   `${validSmileys.length} valid ${validSmileys.length === 1 ? 'smiley' : 'smileys'} exist: ${validSmileys}` :
   'no valid smileys, here is one :('
}

export default countSmileys
