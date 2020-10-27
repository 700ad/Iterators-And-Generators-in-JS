let i = 0;

const next = () => ({
    value: i++,
    done: i > 3
})

// console.log(next());
// {value: 0, done: false}
// console.log(next());
// {value: 1, done: false}
// console.log(next());
// {value: 2, done: false}
// console.log(next());
// {value: 3, done: true}

const iterator = {
    [Symbol.iterator]() {
        return {
            next
        }
    }
}

for (let value of iterator) {
    console.log(value);
}
// 0
// 1
// 2
