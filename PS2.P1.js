// Write two generators that together implement a series of even Fibonacci numbers. The first
// generator should return the series of fibonacci numbers starting from 0. The series F is defined
// as
// F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)
// The second generator should use the first to obtain the next number in the sequence, rejecting
// it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
//     Use the generators to print out the first 6 even Fibonacci numbers.

function* fibonacci() {
    var num1 = 0;
    var num2 = 1;
    while (true){
        var current = num1;
        num1 = num2;
        num2 = num1 + current;
        var result  = yield current;
    }
}
function* is_even(fib) {
    var count = 0;
    while (count < 6){
        var num = fib.next().value;
        if (num % 2 == 0){
            count = count + 1;
            var result = yield num;
        }
    }
}

function print(result) {
    for (var i = 0; i < 6; i++) {
        console.log(result.next().value);
    }

}

var result = is_even(fibonacci());
print(result);

