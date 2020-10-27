const people = ['Sam', 'Norman', 'Kelly']

let res = people.filter(name => name.includes("m")).map(name => name.toLowerCase())
console.log(res);
// ['sam', 'norman']

function* format(array) {
    for (let value of array) {
        if (value.includes('m')) {
            yield value.toLowerCase()
        }
    }
}

console.log([...format(people)]);
// ['sam', 'norman']
