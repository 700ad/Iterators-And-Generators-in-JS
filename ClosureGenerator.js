// Simple Closure in JS.
const adder = x => y => x + y
let x = adder(2); // Value For x is Passed.
let y = x(1); // Value For y is Passed.
console.log(y); // 3

function* adderGenerator(x) {
    let y = yield x
    // Won't be an infinite loop.
    // in generators, on every iteration 
    // only one yield statement is executed
    // after iteration of while loop execution will be stoped.
    while (true) { yield x + y }
}

let addIterator = adderGenerator(2)
console.log(addIterator.next());
// {value:2, done:false}
console.log(addIterator.next(1));
// {value:3, done:false}
console.log(addIterator.next(3));
// {value:3, done:true}
// Won't Add after 2 Iterations.