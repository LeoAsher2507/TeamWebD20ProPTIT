const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
const a =splitName(students);
function splitName (students)
{
    let res = new Array();
    for(let i=0;i<students.length;i++)
    {
        var s = students[i].name.split(' ');
        s.pop();
        s.shift();
        res.push(s.join(' '));
    }
    return res;

}
const s='Thị';
const b= new Array();
function findName(a)
{
    for(let i=0;i<a.length;i++)
    {
        if(a[i].includes(s) && students[i].score>5.0)
            b.push('Pass');
        else b.push('Fail');
    }
}
findName(a);
console.log(b);