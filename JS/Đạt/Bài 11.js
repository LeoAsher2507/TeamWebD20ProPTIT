const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

const hater = 'Duy';

const studentsMidname = splitNameFunction(students);
function splitNameFunction(student) {
    let res = [];
    for (let i=0; i<student.length; i++) {
        let fullName = student[i].name;
        let arr = fullName.split(" ");
        arr.pop();
        arr.shift();
        res.push(arr.join(" "));
    }
    return res;
}

const arr = myFunction(students, studentsMidname);

function myFunction (list, studentsMidname) {
    const res = [];
    for (let i=0; i<list.length; i++) {;
        if (list[i].score > 5.0 && !checkNameFunction(studentsMidname[i])) res.push('Pass');
        else res.push('Fail'); 
    }
    return res;
}

function checkNameFunction(name) {
    return name.includes(hater);
}

console.log(arr);