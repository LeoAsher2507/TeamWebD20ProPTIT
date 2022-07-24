var a = ['A', 'C', 'A', 'A', 'B', 'D', 'B'];
var b = new Set();
for(let i=0;i<a.length;i++)
{
    b.add(a[i]);
}
console.log(b);