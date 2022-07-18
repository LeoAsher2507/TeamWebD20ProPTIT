//Bài 1
// var n = 100;
// for (let i=1; i<=n; i++) {
//     if (i % 2 == 0) console.log(i);
// }

//Bài 2
// var n = 100;
// var res = ((1 + n)*n)/2;
// console.log(res);

//Bài 3
var a = [1, 2, 3, 6, 2, 9, 0];
var res = 0;
res = a.filter(myFunction)
// for (let i=0; i<a.length; i++) {
//     if (a[i] % 2 == 0) res++;
// }
function myFunction(value) {
    return (value % 2 == 0);
} 
console.log(res.length);