//function that takes as input each of the following strings in turn
//‘4+2’
// ‘5*7’
// ‘6-1’
// ‘9/2’
// This function should
// Determine the operator (+, *, -, or /) embedded in the string
// Return a function to implement the input operator that returns the result
const evaluate = expression => {
    switch (expression) {
        case '+':
            return (left, right) => left + right;
        case '*':
            return (left, right) => left * right;
        case '%':
            return (left, right) => left % right;
        case '-':
            return (left, right) => left - right;
        case '/':
            return (left, right) => left / right;
    }
}

const expression = '8%3';
let operator = evaluate(expression[1]);
console.log(`${expression} = ${operator(parseInt(expression[0],10), parseInt(expression[2],10))}`)