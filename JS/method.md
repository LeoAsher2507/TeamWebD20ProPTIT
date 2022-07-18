# *Một số method trong JS*

## **forEach**
### ``forEach`` medthod thực thi một callback function mỗi khi lặp qua các erray elements, truyền vào 1 function
```
const characters = ['a', 'b', 'c', 'd'];
characters.forEach((element, index) => console.log(`${index}: ${element}`));

/* 
    0: a
    1: b
    2: c
    3: d
*/
```

## **map** 
### Trả về 1 mảng mới bằng cách thực thi một callback mỗi khi lặp qua các array elements, truyền vào 1 function
```
const numbers = [3, 6, 4, 5];
const mappedNumbers = numbers.map(function(value,index){
    return value + 10;
});
console.log(mappedNumbers);

/* [13, 16, 14, 15] */
```

## **every**
### Trả về Boolean xem toàn bộ phần tử có thỏa mãn một điều kiện nào đó cụ thể hay không, truyền vào 1 function
```
const numbers = [3, 6, 4, 5];
const mappedNumbers = numbers.every(function(value,index){
    return value > 0;
});
console.log(mappedNumbers); // --> true

```
## **Some**
### Trả về Boolean xem có 1 phần tử bất kì nào đó của mảng thỏa mãn một điều kiện nào đó không, truyền vào 1 function
```
const numbers = [-1, 6, 4, 5];
const mappedNumbers = numbers.some(function(value,index){
    return value < 0;
});
console.log(mappedNumbers); // --> true

```


## **find**
### Trả về phần tử đầu tiên của mảng thỏa mãn một điều kiện nào đó, truyền vào 1 function
```
const numbers = [-1, 6, 4, 5];
const mappedNumbers = numbers.find(function(value,index){
    return value < 0;
});
console.log(mappedNumbers); // --> -1

```

## **filter**
### Trả về một array các phần tử của mảng thỏa mãn một điều kiện nào đó, truyền vào 1 function
```
const numbers = [-1, 6, 4, 5];
const mappedNumbers = numbers.find(function(value,index){
    return value > 0;
});
console.log(mappedNumbers); // --> [6,4,5]

```

## **include**
### Trả về Boolean một phần tử nào đó của mảng thỏa mãn 1 điều kiện nào đó, truyền vào 1 function
```
const numbers = [-1, 6, 4, 5];
const mappedNumbers = numbers.include(function(value,index){
    return value > 0;
});
console.log(mappedNumbers); // --> true

```

## **reduce**
### Trả về một phần tử được tích lũy dần khi lặp qua mỗi phàn tử của mảng, truyền vào là 1 function gồm 4 tham số (giá trị tích lũy của những phần tử trước đó, giá trị của phần tử hiện tại, chỉ mục của phần tử hiện tại, mảng đang xét) và 1 biến là biến tích lũy
```
const a = [10,20,30,40];
const val = a.reduce(function(preVal,curVal,curInd,a) {
    return preVal + curVal;
},0 )

console.log(val); // => 10+20+30+40
```

## **findIndex**
### Trả về chỉ mục đầu tiên của một phần tử của mảng thỏa mãn điều kiện nào đó
```
const a = [10,20,30,40];
const val = a.findIndex(function(val) {
    return val-20 == 0;
})
console.log(val); // => 1
```

## **sort**: sắp xếp mảng
```
const a = [100,21,300,45];
a.sort(function(numberA,numberB){
    return numberA-numberB;
})
console.log(a); // => 21 45 100 300
```

## **length** 
### Trả về giá trị là độ dài của mảng
```
const a = [10,20,30,40];
console.log(a.length); // => 4
```

## **toString**: biến mảng thành chuỗi
```
const a = [10,20,30,40];
console.log(a.toString()); // => 10,20,30,40
```
## **join**: giống toString, nhưng có thể chèn thêm kí tự ở giữa
```
const a = [10,20,30,40];
console.log(a.join(' @@ ')); // => 10 @@ 20 @@ 30 @@ 40
```

## **pop**: xóa phần tử cuối, push: thêm phần tử vào cuối
## **shift**: xóa và trả về phần tử đầu tiên của mảng
## **concat**: nối 2 mảng
```
const a = [10,20,30,40];
const b = [20,30,40]
console.log(a.concat(b)); // => [10,20,30,40,20,30,40]
```

## **trim**: xóa bỏ khoảng trắng đầu và cuối của string
```
const a = "    DucAnhDepTrai2002    "
console.log(a.trim());// ==> DucAnhDepTrai2002
```

## **replace**: thay thế 1 chuỗi, từ bởi 1 chuỗi, từ khác
```
const a = "100 200 100 200 100";
console.log(a.replace("100","200")); // => 200 200 100 200 100
nếu muốn thay thế toàn bộ
console.log(a.replace(/100/g,"200"));
```
## **slice**: cắt string 
```
const a = "100 200 100 200 100";
console.log(a.slice(1,5)); // => 00 2
```
## **split**: cắt thành nhiều strinh nhỏ

## **toFixed**: làm tròn phần thập phân của 1 số 