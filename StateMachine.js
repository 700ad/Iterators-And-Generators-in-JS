function* stateMachine(state) {
    let transition;
    while (true) {
        transition === 'INC' ? state++ : state;
        transition === 'DEC' ? state-- : state;
        transition = yield state
    }
}

const iterator = stateMachine(0);

console.log(iterator.next());
// { value: 0, done: false }
console.log(iterator.next('INC'));
// { value: 1, done: false }
console.log(iterator.next('INC'));
// { value: 2, done: false }
console.log(iterator.next('DEC'));
// { value: 1, done: false }