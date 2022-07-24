const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nam' , score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
var i=0,j=0;
for(let x=0;x<students.length;x++)
{
    if(students[x].name.endsWith('Quân'))
        {
            i++;
            j=students[x].score;
        }
    if(i==2)
        {
            console.log(j);
            return;
        }
    
}
console.log(j);