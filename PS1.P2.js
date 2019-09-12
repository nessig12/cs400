//function that takes as input each of the following strings in turn
//‘4+2’
// ‘5*7’
// ‘6-1’
// ‘9/2’
// This function should
// Determine the operator (+, *, -, or /) embedded in the string
// Return a function to implement the input operator that returns the result
const expression = '4+2';
const evaluate = expression => {
    switch (expression) {
        case '+':
            return (left, right) => left + right;
        case '*':
            return (left, right) => left * right;
        case '%':
            return (left, right) => left % right;
    }
}
let operator = evaluate(expression[1]);
console.log(typeof(expression[0]))
console.log(expression[1])
console.log(expression[2])
console.log(Integer.valueOf(operator(expression[0]), expression[2]));
//console.log(`${expression} = ${operator(expression)}`)

const getOperation = operator => {
    switch (operator) {
        case '+':
            return (left, right) => left + right;
            break;
    }
}
let mathFunction = getOperation('+');
console.log(mathFunction(30,12));