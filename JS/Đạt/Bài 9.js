const arr = [
    ['a', 1], ['b', 2]
 ];
 const object = myFunction(arr);
 function myFunction (arr) {
    const res = {};
    for (pair of arr) {
        const [key, value] = pair;
        res[key] = value;
    }
    return res;
 }
 console.log(object);