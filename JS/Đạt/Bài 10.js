const obj = { a: 1, b: 2, c: 3, d: 4 };
const keys = ['a', 'c'];
const arr = myFunction(obj, keys);

function myFunction(obj, keys) {
    const res = {};
    const [key1, key2] = keys;
    for (let i in obj) {
        if (i != key1 && i != key2) res[i] = obj[i];
    }
    return res;
}
console.log(arr);