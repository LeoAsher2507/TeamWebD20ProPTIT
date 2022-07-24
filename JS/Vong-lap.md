# Vòng Lặp
## 1.Vòng lặp while
* Vòng lặp while là câu lệnh lặp đơn giản nhất được cung cấp bởi JavaScript.

    + Vòng lặp while lặp qua một khối mã miễn là điều kiện được chỉ định đánh giá là đúng.

    + Ngay khi điều kiện thất bại, vòng lặp dừng lại
* Cú pháp:
```js
    while(Điều kiện) {
    // Mã thực thi
    }
```
## 2.Vòng lặp do while
* Vòng lặp do-while là một biến thể của vòng lặp while, đánh giá điều kiện ở cuối mỗi lần lặp của vòng lặp.
* Với vòng lặp do-while:

    + Khối mã được thực thi một lần.

    + Sau đó đánh giá điều kiện, nếu điều kiện là đúng, câu lệnh được lặp lại miễn là điều kiện được chỉ định được đánh giá là đúng.
* Cú pháp:
```js
do {
    // Mã thực thi
}
while(Điều kiện);
```
## 3.Vòng lặp for:
* Cú pháp:
```javascript
{
    for(let i = 0 ; i < 10; i++){
        console.log(i);
    }
}
```
* let i = 0 : khởi tạo biến cho vòng lặp

* i < 10 : điều kiện để vòng lặp thực hiện

* i++ : tăng giá trị biến chạy lên 1 mỗi khi thực hiện xong hành động

## 4.Vòng lặp for ... of
* Vòng lặp này được ra mắt ở phiên bản ES6. Tương tự như for, vòng lặp này được sử dụng để duyệt từng phần tử của đối tượng duyệt. Số lượng lặp bằng với số phần tử của đối tượng.
* cú pháp:
```javascript
for(let ten_bien_chay of ten_bien){
    ....
}
```
* ten_bien_chay: biến khai báo
* ten_bien: một Array, String, Map, WeakMap, Set (không có Object)
* Ví dụ:
```javascript
var students = [
    {
        name: 'A',
        age: '19'
    },
    {
        name: 'B',
        age: '20',
    },
    {
        name: 'C',
        age: '21',
    }
]
for(let a of students){
    console.log(a.name)
}
```

* Kết quả:

A<br>
B<br>
C

* Kết quả cũng giống như chúng ta sử dụng vòng lặp for nhưng có thể thấy cú pháp của for...of tường minh, dễ hiểu hơn là for.

* Tuy nhiên for...of không duyệt theo kiểu giảm dần giống như trong for được.

## 5.Vòng lặp for ... in
* Vòng lặp này thường được sử dụng với mục đích là lặp trong một object chứ không phải trong array hay string giống như hai vòng lặp trên. Số lượng lặp tương ứng với số thuộc tính của object mà ta duyệt.
* Cú pháp:
```javascript
for(let key in obj){
    ...
}
```
* let key: khai báo biến chạy

* obj: đối tượng duyệt (thường là object)

* Ví dụ:
```javascript
var students = [
    {
        name: 'A',
        age: '19'
    },
    {
        name: 'B',
        age: '20',
    },
    {
        name: 'C',
        age: '21',
    }
]
// in ra cac key cua obj trong students
for(let student of students){
    for(let key in student){
        console.log(key);
    }
}
```
* Kết quả:

name

age

name

age

name

age

# 6.Lời khuyên:
* Đối với những người mới lập trình thì nên sử dụng vòng lặp for bình thường vì các biến chạy, điều kiện, tăng giảm biến chạy đều thực hiện trên cùng một dòng, do đó dễ dàng sửa lỗi.

* * Không nên bỏ trống các giá trị trong cú pháp của vòng lặp for.
* * Chỉ nên sử dụng vòng lặp for...in khi cần lặp qua object, không nên sử dụng với array.
* * Vòng lặp for...of không dùng được với object.
* Với những người đã quen với vòng lặp for thì nên sử dụng linh hoạt hai vòng lặp for...of  và for...in, vì có thể sử dụng trong nhiều trường hợp và khiến cho code của chúng ta dễ đọc hơn.
