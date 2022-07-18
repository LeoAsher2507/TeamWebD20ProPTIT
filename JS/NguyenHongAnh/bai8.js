var a=[0, 1, false, 2, undefined, '', 3, null];
var b = new Array();
for(let i=0;i<a.length;i++)
{
    if(a[i])b.push(a[i]);
}
console.log(b);