const obj = { a: 1, b: 2, c: 3, d: 4 }
const a=['a','c'];
const b=new Object();
function filterKey(a)
{
    for(let i=0;i<Object.keys(obj).length;i++)
    {
        var x=0;
        for(let j=0;j<a.length;j++)
            {
                if(Object.keys(obj)[i]===a[j])
                 {
                    x=1;
                    break;
                 }
            }
        var m= Object.keys(obj)[i];
        var n=Object.values(obj)[i];
        if(x==0)b[m]=n;
    }
}
filterKey(a);
console.log(b);