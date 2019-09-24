// Write two generators that together implement a series of even Fibonacci numbers. The first
// generator should return the series of fibonacci numbers starting from 0. The series F is defined
// as
// F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)
// The second generator should use the first to obtain the next number in the sequence, rejecting
// it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
//     Use the generators to print out the first 6 even Fibonacci numbers.

function* fibonacci() {
    [a, b] = [0, 1]
    while (true) {
        yield a;
        [a, b] = [b, a + b]
    }
}
function* is_even(fib) {
    count = 0;
    while (count < 6){
        num = fib.next().value;
        console.log(fib.next().value);
        if (num %2 == 0){
            count = count + 1;
            console.log(num);
        }
    }

}
var fib = fibonacci();
console.log(fib);

var result = is_even(fib);