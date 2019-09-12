// function that takes a string as its input and returns a new string that contains all of the
// letters in the original string, but in alphabetical order

const alph = string => string.split('').sort().join('');

console.log(`String in Alphabetical order: ${alph('supercalifragilisticexpialidocious')}`)
console.log(`String in Alphabetical order: ${alph('normandie')}`)
