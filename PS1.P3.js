//function that accepts two input parameters: a string, and a function. The function
//should execute the passed function with the passed string and return the result.
//pass the string ‘supercalifragilisticexpialidocious’ and a lambda function that returns an array containing
// fragments of the input string broken on the character ‘c’


const find_num_dif = (string,mString) => {
    let result = 0 ;
    for (i = 0; i < string.length ; i++){
        if (string[i] !== mString[i])
            result ++;
    }
    return result
}

const info_object = (string, mString) => {

    numdif = find_num_dif(string, mString);

    var info =  {
        originalString: string,
        modifiedSting: mString,
        numberReplaced: numdif,
        length: string.length
    }
    return info;
}

const m_function = (string, lambda_function) => lambda_function(string);


console.log(`Expression 1: ${m_function("supercalifragilisticexpialidocious", string => string.split(/(?=c)/g))}`);

var results = info_object("supercalifragilisticexpialidocious", (m_function("supercalifragilisticexpialidocious", string => string.replace(/a/g,'A'))));

console.log("Expression 2:");
console.log(results);




