const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nam', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
function check(tmp){
    var count;
    for (let index = tmp.length-1; index >=0; index--) {
        if(tmp[index]==' '){
            count=index+1;
            break;
        }
    }
    var res='';
    for (let index = count; index < tmp.length; index++) {
        res+=tmp[index];
    }
    return res;
}
function slove(Name){
    for (let index = 0; index < students.length; index++) {
        var tmp=students[index].name;
        var ans=check(tmp);
        if(Name==ans){
            console.log(students[index].score);
            break;
        }
    }
}
slove('Duy');