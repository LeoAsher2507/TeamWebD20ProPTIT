1. ECMAScript ES6 là gì?
•	ES6 là chữ viết tắt của ECMAScript 6, là phiên bản mới nhất của chuẩn ECMAScript. ECMAScript do hiệp hội các nhà sản xuất máy tính Châu Âu đề xuất làm tiêu chuẩn của ngôn ngữ Javascript. Bạn cứ nghĩ xem hiện nay có khá nhiều trình duyệt Browser ra đời và nếu mỗi Browser lại có cách chạy Javascript khác nhau thì các trang web không thể hoạt động trên tất cả các trình duyệt đó được, vì vậy cần có một chuẩn chung để bắt buộc các browser phải phát triển dựa theo chuẩn đó.
•	ES6 ra đời vào năm 2015 nên cái tên ES2015 được lấy làm tên chính thức với nhiều tính năng mới học hỏi các ngôn ngữ cấp cao khác, hy vọng dần theo thời gian Javascript trở thành một ngôn ngữ lập trình hướng đối tượng.
•	Phiên bản sắp ra trong năm 2017 đó là phiên bản ES7 cũng đang được nghiên cứu và phát triển, họ cũng nhắm đến các kiến thức mới lạ như async function, observer, .. Hy vọng sẽ có nhiều biến động mới.
2. Các chức năng mới của ES6
•	Arrow function: Bạn có thể tạo hàm bằng cách sử dụng dấu mũi tên =>.
•	Block Scoped: Định nghĩa biến với từ khóa let, cách định nghĩa này thì biến chỉ tồn tại trong phạm vi khối của nó (Block Scope)
•	Destructuring Assignments: Bạn có thể khởi tạo các biến từ một mảng bằng một dòng code đơn giản.
•	Default Parameters: Bạn có thể gán giá trị mặc định cho các tham số.
•	Template String: Tạo templaet HTML cực kì đơn giản
•	Weak, Set: các kiểu dữ liệu phức tạp mới
3. Arrow function
•	Arrow là một dạng viết tắt của các function sử dụng dấu =>, tương tự như trong C#, Java 8,…
Cú pháp căn bản:
Cú pháp căn bản nhất của arrow function như sau:
var functionName = (var1, var2) => {
    // Nội dung function
};
ví dụ
    var hello = () => {
    console.log('Hello Bạn');
    };
    hello();
4. Block Scoped

Block Scoped là gì:

•	Block Scoped là phạm vi trong một khối, nghĩa là chỉ hoạt động trong phạm vi được khai báo bời cặp {}.

•	ở Es6 người ta sử dụng biến let để khai báo cho biến trong cặp {}
xét ví dụ sau:

    for (let i = 0; i < 5; i++) {
    setTimeout(function(){
        console.log('hello ', i);
    }, 1000);
}

kết quả trả về sẽ là:

hello 1

hello 2


hello 3


hello 4

hello 5

- Vậy biến let so với var có gì khác biệt:

•	let tạo ra một biến chỉ có thể truy cập được trong block bao quanh nó, khác với var - tạo ra một biến có phạm vi truy cập xuyên suốt function chứa nó.

cũng cùng ví dụ về biến let ở trên nay ta sử dụng biến var:

    for (var i = 0; i < 5; i++) {
    setTimeout(function(){
        console.log('hello ', i);
    }, 1000);
}

nhưng ở biến var kết quả trả về sẽ là :

hello 5

hello 5

hello 5

hello 5

hello 5

•	Biến const : dùng để khai báo một hằng số - là một giá trị không thay đổi được trong suốt quá trình chạy.

ví dụ:

  const A = 5;

  A = 6;  // sẽ xảy ra lỗi

Chú ý:

•	Trong es6 hạn chế dùng biến var thay vào đó là ta dùng biến let

•	Nếu bạn sử dụng Jquery trong Es6 thì $(this) trong ES6 sẽ được hiểu là (window)

•	Để sửa chữa khi bạn sử dụng $(this) sẽ thay bằng $(e.currentTarget)

5. Babel.js
 
•	Babel.js. Mọi người có thể viết code ES6 và dùng Repl của BabelJS để dịch lại sang mã ES5 chạy được trên browser. BabelJS mang lại khả năng phát triển và sử dụng các tính năng của ES6 ngay tại thời điểm này và chỉ cần thêm một thao tác compile là code sẽ chạy được trên các browser bình thường.

6. Class trong js

Class trong js được sử dụng để tạo một đối tượng. Class như một hàm khởi tạo.

Ví dụ:

```
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

Từ khóa class được sử dụng để tạo một class. Các thuộc tính được gán trong một hàm khởi tạo.

Bây giờ bạn có thể tạo một đối tượng. Ví dụ,

```
class Person {
  constructor(name) {
    this.name = name;
  }
}

const person1 = new Person('John');

console.log(person1.name); // John
```

7. Default Parameter Values.

Trong phiên bản ES6, bạn có thể chuyển các giá trị mặc định trong các tham số hàm. Ví dụ

```
function sum(x, y = 5) {
    // take sum
    // the value of y is 5 if not passed
    console.log(x + y);
}

sum(5); // 10
sum(5, 15); // 20
```
Trong ví dụ trên, nếu bạn không truyền tham số cho y, nó sẽ có giá trị là 5 theo mặc định.

8. JavaScript Template Literals.

Chữ mẫu đã làm cho việc bao gồm các biến bên trong một chuỗi trở nên dễ dàng hơn. Ví dụ, trước đây bạn phải làm:

```
const first_name = "Jack";
const last_name = "Sparrow";

console.log('Hello ' + first_name + ' ' + last_name);
Điều này có thể đạt được bằng cách sử dụng mẫu theo nghĩa đen bằng cách:

const first_name = "Jack";
const last_name = "Sparrow";

console.log(`Hello ${first_name} ${last_name}`);
```
9. Cấu trúc JavaScript

Cú pháp hủy cấu trúc giúp việc gán giá trị cho một biến mới dễ dàng hơn. Ví dụ,
```
// before you would do something like this
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

let name = person.name;
let age = person.age;
let gender = person.gender;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female
```
Sử dụng cú pháp cấu trúc ES6 , đoạn mã trên có thể được viết như sau:
```
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

let { name, age, gender } = person;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female
```

10. Tham số phần còn lại JavaScript và toán tử Spread

Bạn có thể sử dụng tham số còn lại để biểu diễn số lượng đối số không xác định dưới dạng một mảng. Ví dụ,
```
function show(a, b, ...args) {
  console.log(a); // one
  console.log(b); // two
  console.log(args); // ["three", "four", "five", "six"]
}

show('one', 'two', 'three', 'four', 'five', 'six')
```

Bạn chuyển các đối số còn lại bằng ...cú pháp. Do đó, tham số phần còn lại tên .

Bạn sử dụng cú pháp lây lan ... để sao chép các mục vào một mảng duy nhất. Ví dụ,
```
let arr1 = ['one', 'two'];
let arr2 = [...arr1, 'three', 'four', 'five'];
console.log(arr2); // ["one", "two", "three", "four", "five"]
```
Cả tham số còn lại và toán tử spread đều sử dụng cùng một cú pháp. Tuy nhiên, toán tử spread được sử dụng với mảng (giá trị có thể lặp lại).
