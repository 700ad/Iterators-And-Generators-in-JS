function* range(start, end) {
    while (start < end) yield start++;
}

for (let value of range(5, 7)) {
    console.log(value);
}
// 5
// 6

console.log([...range(0, 5)])
// [0,1,2,3,4]