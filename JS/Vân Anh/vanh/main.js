//! Ex1
///////////// Way1
// function findEven(n) {
//   let x = 1;
//   while (x <= n) {
//     if (x % 2 === 0) console.log(x);
//     x++;
//   }
// }
// var n = prompt("Enter n: ");
// findEven(n);

///////////// Way2
// let findEven = (n) => {
//   let x = 2;
//   while (x <= n) {
//     console.log(x);
//     x += 2;
//   }
//   return x;
// };

// var n = 6;
// findEven(n);

//! Ex2
// function findSum(n) {
//   let x = 1,
//     sum = 0;
//   while (x <= n) {
//     sum += x;
//     x++;
//   }
//   console.log(sum);
// }
// let n = 3;
// findSum(n);

//! Ex3
// function countEven(a) {
//   let cnt = 0;
//   for (x of a) {
//     if (x % 2 === 0) cnt++;
//   }
//   console.log(cnt);
// }
// let a = [1, 2, 3, 6, 2, 9, 0];
// countEven(a);

//! Ex4
// var arr = ["A", "C", "A", "A", "B", "D", "B"];

// // function removeDuplicates(arr) {
// //   var unique = [];
// //   arr.forEach((element) => {
// //     if (!unique.includes(element)) {
// //       unique.push(element);
// //     }
// //   });
// //   return unique;
// // }

// // function removeDuplicates(arr) {
// //   return [...new Set(arr)];
// // }
// console.log(removeDuplicates(arr));

//! Ex5
// const studentNames = [
//   { id: 1, name: "Nguyễn Thị Tèo" },
//   { id: 2, name: "Phạm Văn Bưởi" },
//   { id: 3, name: "Hoàng Văn Nam" },
//   { id: 4, name: "Vũ Ngọc Duy" },
//   { id: 5, name: "Nguyễn Minh Nhật" },
//   { id: 6, name: "Phí Duy Quân" },
//   { id: 7, name: "Trần Minh Minh" },
// ];

// const studentScores = [
//   { id: 1, score: 9.2 },
//   { id: 2, score: 2.3 },
//   { id: 3, score: 3.7 },
//   { id: 4, score: 6.9 },
//   { id: 5, score: 5.2 },
//   { id: 6, score: 9.6 },
//   { id: 7, score: 6.1 },
// ];

// function merge2arrOfObj() {
//   for (var i in studentNames) {
//     studentNames[i].score = studentScores[i].score;
//   }
// }
// merge2arrOfObj();
// console.log(studentNames);

//! Ex6
// const students = [
//   { id: 1, name: "Nguyễn Thị Tèo", score: 9.2 },
//   { id: 2, name: "Phạm Văn Bưởi", score: 2.3 },
//   { id: 3, name: "Hoàng Văn Nam", score: 3.7 },
//   { id: 4, name: "Vũ Ngọc Duy", score: 6.9 },
//   { id: 5, name: "Nguyễn Minh Nam", score: 5.2 },
//   { id: 6, name: "Phí Duy Quân", score: 9.6 },
//   { id: 7, name: "Trần Minh Minh", score: 6.1 },
// ];

// function findScore(nameOfStu) {
//   var scoreOfStu;
//   var len = nameOfStu.length;
//   var cnt = 0;
//   for (var obj of students) {
//     var tmp = obj.name;
//     let n = tmp.length;
//     if (tmp.substring(n - len) === nameOfStu) {
//       scoreOfStu = obj.score;
//       cnt++;
//       if (cnt === 2) break;
//     }
//   }
//   if(cnt === 0) return ("Not Found!");
//   if (cnt === 1) return scoreOfStu;
//   return students[2].score;
// }
// console.log(findScore("Nam"));

//! Ex7
// function repeatString(s, n) {
//   console.log(Array(n).fill(s));
// }
// repeatString("ahihi", 3);

//! Ex8
// function deleteEle(arr1, arr2) {
//   let filtered = arr1.filter((element) => !(arr2.includes(element)));
//   console.log(filtered);
// }
// const arr1 = [0, 1, false, 2, undefined, "", 3, null];
// const arr2 = [0, false, undefined, "", null];
// deleteEle(arr1, arr2);

//! Ex9

// function converArr2DtoObj(arr) {
//   let obj = {};
//   arr.forEach((pairOfEle) => {
//     let key = pairOfEle[0];
//     let value = pairOfEle[1];
//     obj[key] = value;
//   });
//   return obj;
// }
// const data = [
//   ["a", 1],
//   ["b", 2],
// ];
// console.log(converArr2DtoObj(data));

//! Ex10
// const obj = { a: 1, b: 2, c: 3, d: 4 };
// function filterKey(arr) {
//   var tmp = Object.entries(obj);
//   for (var ele of arr) {
//     tmp = tmp.filter(([key, value]) => !(key === ele));
//   }
//   return Object.fromEntries(tmp);
// }
// const arr = ["a", "c"];
// console.log(filterKey(arr));

//! Ex11
// const students = [
//   { id: 1, name: "Nguyễn Thị Tèo", score: 9.2 },
//   { id: 2, name: "Phạm Văn Bưởi", score: 2.3 },
//   { id: 3, name: "Hoàng Văn Nam", score: 3.7 },
//   { id: 4, name: "Vũ Ngọc Duy", score: 6.9 },
//   { id: 5, name: "Nguyễn Minh Nhật", score: 5.2 },
//   { id: 6, name: "Phí Duy Quân", score: 9.6 },
//   { id: 7, name: "Trần Minh Minh", score: 6.1 },
// ];

// function filterValue(students) {
//   var filtered = [];
//   for (let obj of students) {
//     if (obj.score > 5.0) {
//       let nameOfStu = obj.name;
//       console.log(nameOfStu);
//       let x = nameOfStu.indexOf("Duy");
//       if (x == -1 || x == 0 || x + 3 == nameOfStu.length) filtered.push('Pass');
//       else filtered.push('Fail');
//     }
//     else filtered.push('Fail');
//   }
//   return filtered;
// }
// console.log(filterValue(students));
