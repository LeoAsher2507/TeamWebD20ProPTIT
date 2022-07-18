const studentNames = [
    { id: 1, name: 'Nguyễn Thị Tèo' },
    { id: 2, name: 'Phạm Văn Bưởi' },
    { id: 3, name: 'Hoàng Văn Nam' },
    { id: 4, name: 'Vũ Ngọc Duy' },
    { id: 5, name: 'Nguyễn Minh Nhật' },
    { id: 6, name: 'Phí Duy Quân' },
    { id: 7, name: 'Trần Minh Minh' },
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


const student = studentNames;
for (let i=0; i<student.length; i++) {
    student[i].score = studentScores[i].score;
}

// for (let i=0; i<student.length; i++) {
//     console.log(student[i]);
// }

var Name = [];

for (let i=0; i<student.length; i++) {
    let x = splitNameFunction(student[i].name);
    Name.push(x);
}

function splitNameFunction (name) {
    let splitName = name.split(" ");
    return splitName[splitName.length-1];
}

for (let i=0; i<student.length; i++) {
    console.log(findScore(Name[i], student));
}

function findScore (value, student) {
    let count = 0, res;
    for (let i=0; i<Name.length; i++) {
        if (student[i].name.endsWith(value)) {
            count++;
            if (count <= 2) res = student[i].score;
        }
    }
    return res;

}