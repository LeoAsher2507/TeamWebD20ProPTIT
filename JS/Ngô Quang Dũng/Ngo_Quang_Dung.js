//Bài 1
// for(let i=2; i<=100; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//Bai 2
// let n=3;
// let sum=0;
// let string="";
// for(let i=1; i<=n; i++){
//     sum+=i;
//     if(i<n){
//         string+=i;
//         string+="+";
//     }else{
//         string+=i;
//     }
// }
// console.log(string+"="+sum);

//Bai 3
// let a=[1,2,3,4,5,6,7,8];
// let count=0;
// for(let i=0; i<a.length; i++){
//     if(a[i]%2==0){
//         count++;
//     }
// }
// console.log(count);

//Bai 4
// let a=['A', 'C', 'A', 'A', 'B', 'D', 'B']
// let s=new Set();
// for(let i=0; i<a.length; i++){
//     s.add(a[i]);
// }
// console.log(s);

//Bai 5
// const studentNames = [
//     { id: 1, name: 'Nguyễn Thị Tèo' },
//     { id: 2, name: 'Phạm Văn Bưởi' },
//     { id: 3, name: 'Hoàng Văn Nam' },
//     { id: 4, name: 'Vũ Ngọc Duy' },
//     { id: 5, name: 'Nguyễn Minh Nhật' },
//     { id: 6, name: 'Phí Duy Quân' },
//     { id: 7, name: 'Trần Minh Minh' },
// ]
// const studentScores = [
//     { id: 1, score: 9.2 },
//     { id: 2, score: 2.3 },
//     { id: 3, score: 3.7 },
//     { id: 4, score: 6.9 },
//     { id: 5, score: 5.2 },
//     { id: 6, score: 9.6 },
//     { id: 7, score: 6.1 },
// ]
// const student = studentNames;
// for(let i=0; i<student.length; i++){
//     student[i].score = studentScores[i].score;
// }
// console.log(student);

//Bai 6

// const students = [
//     { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
//     { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
//     { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
//     { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
//     { id: 5, name: 'Nguyễn Minh Nam', score: 5.2 },
//     { id: 6, name: 'Phí Duy Quân', score: 9.6 },
//     { id: 7, name: 'Trần Minh Minh', score: 6.1 }
// ]
// function findScore(tenhocsinh){
//     for(let i=0; i<students.length; i++){
//         if(students[i].name.endsWith(tenhocsinh)){
//             console.log(students[i].name +" "+ students[i].score)
//         }
//     }
// }
// findScore('Nam')

//Bai 7
// var s = []
// function repeatString(string, repeat){
//     for(let i=0; i<repeat; i++){
//         s[i]=string
//     }
//     console.log(s)
// }
// repeatString('ahihi', 3)

//Bai 8
// var s = [0, 1, false, 2, undefined,'', 3, null]
// for(let i=0; i<s.length; i++){
//     if(s[i]==0||s[i]==false||s[i]==null||s[i]==''){
//         s.splice(i,1);
//     }
// }
// console.log(s)

//Bai 9
// const data = [['a', 1], ['b', 2]]
// var obj ={}
// for(let i=0; i<data.length; i++){
//     let a=data[i]
//     obj[a[0]]=a[1];
// }
// console.log(obj)

//bai 10
// const obj = { a: 1, b: 2, c: 3, d: 4 }
// function filterKey(arr){
//     let o = {}
//     for(let key in obj){
//         if(arr.includes(key)==false){
//             o[key] = obj[key]
//         }
//     }
//     console.log(o)
// }
// filterKey(['a', 'c'])

//bai 11
const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
var a = []
var dem=0;
for(let i=0; i< students.length; i++){
    let arrCut = students[i].name.split(" ")
    if(arrCut[arrCut.length-2]=="Duy"){
        a[dem]="False"
        dem++
    }else if(students[i].score<=5.0){
        a[dem]="False"
        dem++
    }else{
        a[dem]="Pass"
        dem++
    }
}
console.log(a)