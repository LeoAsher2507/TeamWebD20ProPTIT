const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

function slove(){
    var res=[];
    students.forEach(function(value){
        if(value.score>=5.0){
            var index = value.name.indexOf('Duy');
            if(index == -1 || index+2 == value.name.length-1 || index == 0 ){
                res.push('Pass');
                return;
            }
            res.push('Fail');
            return;
        }
        res.push('Fail');
        return;
    })
    console.log(res);
}
slove();