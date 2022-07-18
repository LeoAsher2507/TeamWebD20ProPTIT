const studentNames=[
    {
        id:1,name: 'Nguyễn Thị Tèo' 
    },
    {
        id:2,name: 'Phạm Văn Bưởi' 
    },
    {
        id:3,name: 'Hoàng Văn Nam' 
    },
    {
        id:4,name: 'Vũ Ngọc Duy' 
    },
    {
        id:5,name: 'Hoàng Minh Nhật' 
    },
    {
        id:6,name: 'Phí Duy Quân' 
    },
    {
        id:7,name: 'Trần Minh Minh' 
    },
]
const studentScores = [
    { id: 1, score: 9.2 },
    { id: 2, score: 2.3 },
    { id: 3, score: 3.7 },
    { id: 4, score: 6.9 },
    { id: 5, score: 5.2 },
    { id: 6, score: 9.6 },
    { id: 7, score: 6.1 },
]


function Try(studentNames,studentScores){
    const newArr=[]
    for (let index = 0; index < studentNames.length; index++) {
        for (let j = 0; j < studentScores.length; j++) { 
            if(studentNames[index].id === studentScores[j].id){
                const element=studentNames[index] ;
                element.score = studentScores[j].score;
                newArr.push(element);
            }
        }
    }
    console.log(newArr);
}
Try(studentNames,studentScores);