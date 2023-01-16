// let data: number | string = 23
// console.log('Typescript Union Type', data)
function unionFunction(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    else
        return a.toString() + ' ' + b.toString();
}
console.log(unionFunction(5, 6));
console.log(unionFunction('Muhammad', 'Nabeel'));
