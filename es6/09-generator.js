function* iterate(array){
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Henry', 'Raquel', 'Leonardo', 'Katherine']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);