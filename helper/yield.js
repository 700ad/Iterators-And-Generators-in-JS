const abc = ['A', 'B', 'C']

const tryingYield = function* (array) {
    yield* array
    yield array.map(letter => letter.toLowerCase())
    yield Math.random()
}
// for (let value of tryingYield(abc)) {
//     console.log(value)
// }
// ! Because of the First Yield of tryingYield()
// A
// B
// C
// ! Because of the Second Yield of tryingYield()
// [ 'a', 'b', 'c' ]
// ! Because of the Third Yield of tryingYield()
// 0.34900964193715245

const shoutIterator = function* (word) {
    yield word + '!';
}
const tryingYield2 = function* (array) {
    yield* shoutIterator(array[0])
    yield* shoutIterator(array[1])
    yield* shoutIterator(array[2])
}

for (let value of tryingYield2(abc)) {
    console.log(value)
}
// A!
// B!
// C!