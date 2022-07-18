// b1
// var sochan = n => {
//     let x = 1;
//     while(x<=n){
//         if(x%2==0){
//             console.log(x);
//         }
//         x++;
//     }
// };
// var n = prompt("Nhập số n");
// sochan(n);



//b2
// var tong = n => {
//     let x = 1, sum = 0;
//     while (x <= n) {
//         sum += x;
//         x++;
//     }
//     return sum;
// };
// var n = prompt("Nhập số n");
// console.log(tong(n));


//b3
// var sochan = n => {
//     let dem=0;
//     for (x of n) {
//         if(x%2===0){
//             dem++;
//         }
//     }
//     return dem;
// };
// var n = [1,2,3,6,3,9,0]
// console.log(sochan(n));


//b4
// var arr = ['A', 'C', 'A', 'A', 'B', 'D', 'B'];
// var trunglap = arr => {
//     let a = [];
//     arr.forEach(i => {
//         if (!a.includes(i)) {
//             a.push(i);
//         }
//     });
//     return a;
// }
// console.log(trunglap(arr));


//b5
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

// var arr = () => {
//     for (var i in studentNames) {
//         studentNames[i].score = studentScores[i].score;
//     }
// }
// arr();
// console.log(studentNames);



////b6
// const students = [
//     { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
//     { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
//     { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
//     { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
//     { id: 5, name: 'Nguyễn Minh Nam', score: 5.2 },
//     { id: 6, name: 'Phí Duy Quân', score: 9.6 },
//     { id: 7, name: 'Trần Minh Minh', score: 6.1 }
// ]
// var findScore = name => {
//     var score;
//     var len = name.length;
//     var cnt = 0;
//     for (var i of students) {
//         var tmp = i.name;
//         let n = tmp.length;
//         if (tmp.substring(n - len) === name) {
//             score = i.score;
//             cnt++;
//             if (cnt === 2) break;
//         }
//     }
//     if (cnt === 0) return "Not Found!";
//     if (cnt === 1) return score;
//     return students[2].score;
// };
// console.log(findScore("Nam"));



//b7
// var repeatString = (str, n) => {
//     var a = [];
//     let i = 1;
//     while (i <= n) {
//         a.push(str);
//         i++;
//     }
//     return a;
// };
// console.log(repeatString("Hello", 3));



//b8
// var arr = [0, 1, false, 2, undefined, '', 3, null]
// var arrDelete = arr => {
//     let a = [];
//     for (let i of arr) {
//         if (i !== undefined && i !== false && i !== null && i !== 0 && i !== '') {
//             a.push(i);
//         }
//     }
//     return a;
// }
// console.log(arrDelete(arr));


//b9
// var func = arr => {
//   let obj = {};
//   arr.forEach(i => {
//     let key = i[0];
//     let value = i[1];
//     obj[key] = value;
//   });
//   return obj;
// }
// const data = [
//   ["a", 1],
//   ["b", 2],
// ];
// console.log(func(data));



//b10
// const obj = { a: 1, b: 2, c: 3, d: 4 };
// var filterKey= arr => {
//   var tmp = Object.entries(obj);
//   for (var i of arr) {
//     tmp = tmp.filter(([key, value]) => !(key === i));
//   }
//   return Object.fromEntries(tmp);
// }
// const arr = ["a", "c"];
// console.log(filterKey(arr));


//b11
// const students = [
//   { id: 1, name: "Nguyễn Thị Tèo", score: 9.2 },
//   { id: 2, name: "Phạm Văn Bưởi", score: 2.3 },
//   { id: 3, name: "Hoàng Văn Nam", score: 3.7 },
//   { id: 4, name: "Vũ Ngọc Duy", score: 6.9 },
//   { id: 5, name: "Nguyễn Minh Nhật", score: 5.2 },
//   { id: 6, name: "Phí Duy Quân", score: 9.6 },
//   { id: 7, name: "Trần Minh Minh", score: 6.1 },
// ];
// var filterValue = students => {
//   var filtered = [];
//   for (let i of students) {
//     if (i.score > 5.0) {
//       let nameOfStudent = i.name;
//       console.log(nameOfStudent);
//       let x = nameOfStudent.indexOf("Duy");
//       if (x == -1 || x == 0 || x + 3 == nameOfStu.length) filtered.push('Pass');
//       else filtered.push('Fail');
//     }
//     else filtered.push('Fail');
//   }
//   return filtered;
// }
// console.log(filterValue(students));










