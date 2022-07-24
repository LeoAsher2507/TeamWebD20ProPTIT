var a = ['A', 'C', 'A', 'A', 'B', 'D', 'B'];
var res = new Set();
for (let i=0; i<a.length; i++) {
    res.add(a[i]);
}
res.forEach(function(value) {
    console.log(value);
})