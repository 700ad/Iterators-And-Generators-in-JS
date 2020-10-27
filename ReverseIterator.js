const abc = ['A', 'B', 'C']

const reverseIterator = array => ({
    [Symbol.iterator]() {
        let i = array.length
        return {
            next: () => ({
                value: array[--i],
                done: i < 0
            })
        }
    }
})

for (let value of reverseIterator(abc)) {
    console.log(value)
}
// C
// B
// A

const reverseGenerator = function* (array) {
    let i = array.length
    while (i > 0) {
        yield array[--i];
    }
}

for (let value of reverseGenerator(abc)) {
    console.log(value)
}
// C
// B
// A