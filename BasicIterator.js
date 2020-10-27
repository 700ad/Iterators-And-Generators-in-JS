const abc = ["A", "B", "C"]

const iterator = abc[Symbol.iterator]()

console.log(iterator.next());
// {value: 'A', done: false}
console.log(iterator.next());
// {value: 'B', done: false}
console.log(iterator.next());
// {value: 'C', done: false}
console.log(iterator.next());
// {value: undefined, done: true}
