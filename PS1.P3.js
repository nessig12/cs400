//function that accepts two input parameters: a string, and a function. The function
//should execute the passed function with the passed string and return the result.


//pass the string ‘supercalifragilisticexpialidocious’ and a lambda function that returns an array containing
// fragments of the input string broken on the character ‘c’

const split_string = string => string.split('c');


const replace = string => {
    console.log(`originalString: ${string}`);
    console.log(`modifiedString: ${string.replace(/a/, 'A')}`);
    console.log(`numberReplaced: ${5}`);
    console.log(`length: ${string.length}`);
    return
}



console.log(`String broken up: ${split_string('supercalifragilisticexpialidocious')}`);
replace('supercalifragilisticexpialidocious');