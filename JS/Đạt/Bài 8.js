var arr = [0, 1, false, 2, undefined, '', 3, null];
var arrDone = [];
for (let i=0; i<arr.length; i++) {
    if (arr[i]) arrDone.push(arr[i]);
}
console.log(arrDone);