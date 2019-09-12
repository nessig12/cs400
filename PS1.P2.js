// Determine the operator (+, *, -, or /) embedded in the string & Return a function to implement the input operator that returns the result
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
const expressions = ['4+2','5*7','8%3', '6-1', '9/2'];

for (i = 0; i < expressions.length; i++){
    const expression = expressions[i];
    let operator = evaluate(expression[1]);
    console.log(`${expression} = ${operator(parseInt(expression[0],10), parseInt(expression[2],10))}`)
}
