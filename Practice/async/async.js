
//time is in ms
// const delay = (time, func ) => {
//
//     setTimeout(func, time);
// }

//javascript is non-blocking
const delay = _ => {
    setTimeout(_ => {
        console.log(`In timer runnning function`);
        return 42;
    }, 2000)
}

console.log(`Starting`);
let a =2;
let b = 3;
let c = delay();
console.log(`a+b+c = ${a+b+c}`);
console.log(`Done`);