/* 
Bai1
let n = 6;
for(let i = 2; i <= n; i++) {
    console.log(i);
}
*/

/*
Bai2
let n = 5;
console.log(n*(n+1)/2);
*/

/* 
Bai3
let a = [1,2,3,4,5,6];
console.log(a.reduce(function(preVal,curVal) {
    if(curVal%2 == 0) preVal++;
    return preVal;
},0))
*/

/*
Bai4
let a = ['A', 'C', 'A', 'A', 'B', 'D', 'B'];
let ans = [];
for(let val of a) {
    if(ans.includes(val) == false) {
        ans.push(val);
    }
}
console.log(ans);
*/

/*
Bai5
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
let ans = studentNames.map(function(value,index) {
    return {
        id: value.id,
        name: value.name,
        score: studentScores.find(function(value1,index1) {
            return value1.id == value.id;
        }).score
    }
})
console.log(ans);
*/

/*
Bai6
const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nam', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

function findScore(name) {
    for(let val of students) {
        let arrName = val.name.split(" ");
        if(arrName[arrName.length-1] == name) {
            return val.score;
        }
    }
}
console.log(findScore('Nam'));
console.log(findScore('Duy'));
*/


/*
Bai7
function repeatString(str,repeat) {
    let ans = [];
    for(let i = 1; i <= repeat; i++) {
        ans.push(str);
    }
    return ans;
}
console.log(repeatString('ahihi',3));
*/

/*
Bai8
function eraseFalse(arr) {
    let ans = [];
    for(let val of arr) {
        if(val) {
            ans.push(val);
        }
    }
    return ans;
}
console.log(eraseFalse([0, 1, false, 2, undefined, '', 3, null]));
*/

/*
Bai9
const data = [['a', 1], ['b', 2]];
function toObject() {
    let ans = {};
    for(let val of data) {
        ans[val[0]] = val[1];
    }
    return ans;
}
console.log(toObject(data))
*/

/*
Bai10
const obj = { a: 1, b: 2, c: 3, d: 4 }
function filterKey(arrKey) {
    let ans = {};
    for(let key in obj) {
        if(arrKey.includes(key) == false) {
            ans[key] = obj[key];
        }
    }
    return ans;
}
console.log(filterKey(['a', 'c']));
*/

/*
Bai11
const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
function calc() {
    let ans = [];
    for(let val of students) {
        let arrName = val.name.split(" ");
        if(arrName[1] == "Duy") {
            ans.push("Fail");
        }
        else if(val.score <= 5.0) {
            ans.push("Fail");
        }
        else ans.push("Pass");
    }
    return ans;
}
console.log(calc());
*/