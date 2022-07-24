## Khai báo dữ liệu:
### Cấu trúc trong JavaScript, Biến, toán tử ...

  

>JavaScript (JS) là một ngôn ngữ lập trình thông dịch (được dịch lúc chạy), Javascript được sử dụng rất phổ biến để tích hợp vào các trang web, chạy ngay trong trình duyệt phía client giúp cho Website có được cách tương tác linh hoạt hơn với người dùng.
>
>JavaScript là một trong 3 ngôn ngữ mà tất cả các nhà phát triển web phải học, chúng ta có thể hình dung về vai trò của từng ngôn ngữ như sau:
>1.  HTML để định dạng nội dung website;    
>2.  CSS để trang trí, trình bày bố cục website;    
>3.  JavaScript để xây dựng các chương trình tương tác với người dùng trên website. Nó có thể đọc và thay đổi nội dung của các phần tử trong HTML.
    

  
  

#### Nhúng (Chèn) JS vào HTML: 4 cách:  Inline, Internal, External, External References
    

***Internal:***

-   Chèn code với thẻ `<script></script>` vào trong cặp thẻ `<head>` or `<body>`
    
-   ***VD:*** Nhúng trong cặp thẻ `<head>`
    
````
<html>
	<head>
		<title>Tiêu đề website</title>
		<script language="javascript">
			alert("Chào mừng bạn đến với Hocban.vn");
		</script>
	</head>
	<body>
		Nội dung website
	</body>
</html>
````
-   Nhúng trong cặp thẻ `<body>`
    
````
<html>
	<head>
		<title>Tiêu đề website</title>
	</head>
	<body>
		<script language="javascript">
			alert("Chào mừng bạn đến với Hocban.vn");
		</script>
		Nội dung website
	</body>
</html>
````
***Inline:**

Đối với cách nhúng inline chúng ta có thể chèn ngay vị trí bất kỳ của một dòng code HTML.
````
<html>
	<head>
		<style type="text/css">
			.vung-chon-tuy-y{
				background: #fffaca;
				padding: 20px;
			}
		</style>
	</head>
	<body>
		<div> Vùng chọn số 1 </div>
		<div class="vung-chon-tuy-y">
			<h2>Chèn JavaScript kiểu Inline, ví dụ hiển thị thời gian hiện tại</h2>
			<button type="button" onclick="document.getElementById('hien-thi-thoi-gian-ra').innerHTML = Date()"> Nhấn vào để xem thời gian</button>
			<p id="hien-thi-thoi-gian-ra"></p>
		</div>
		<div> Vùng chọn số 1 </div>
	</body>
</html>
````
  

***External:***

Để nhúng kiểu này đầu tiên các bạn dán code JavaScript vào một file txt và lưu lại với định dạng `.js`

Tiếp theo trong thẻ `<script>` , để viết JavaScript thì chúng ta viết đường dẫn đến file JavaScript đã lưu sử dụng cú pháp:
````
<script language="javascript" src="ten_tap_tin_javascript.js"></script>
````

***External References:***

Nhúng từ một file JavaScript có đường dẫn bất kỳ trên Internet mà không cần tải về, cách này có tên gọi là: External References. Cú pháp của nó có dạng như sau:
````
<script src="duong_dan.js"></script>
````
***Nhúng nhiều file kiểu External:***

Trong trường hợp có nhiều file JS khác nhau, để nhúng vào HTML thì chúng ta sử dụng cấu trúc có dạng như sau:
````
<script src="ten-file-01.js"></script>
<script src="ten-file-02.js"></script>
````
>***Lưu ý:*** Thẻ `<script>` để chứa code JS có thể đặt bất kỳ đầu trong HTML, và khi trình duyệt tải HTML bắt gặp Javascript ở đâu sẽ chạy ngay code JS ở đó. Vì thế ý tưởng đặt thẻ <script> trong thẻ <body> và đặt ở cuối (gần thẻ đóng body) là rất tốt vì nó cải thiện tốc độ hiện thị trang (HTML tải xong thì chạy JS!).
#### Một số hàm cơ bản của JS:
#### document.write():
-   Hàm `document.write()` có thể sử dụng để xuất văn bản text thuần túy, mã HTML hoặc cả hai. Ví dụ định dạng văn bản viết ra bằng thẻ HTML <h1>
    
-  ***VD:***
    
````
<script>
	document.write("Hello World!"); // document.Writeln();
</script>
````
Ví dụ định dạng văn bản viết ra bằng thẻ HTML `<h1>`

`document.write("<h1>Hello World!</h1>");`

#### Hàm alert
    
-   Bạn có thể sử dụng hàm `alert()` để hiện thị một hộp thoại (popup) thông báo.
  ````  
  <script>  
	alert("Đây là một thông báo!");    
</script>
  ````  
#### Cấu trúc chương trình trong JS: gồm:

-   ***Biểu thức (expressions):*** là một tập hợp gồm các toán hạng và các toán tử.
    
-   ***Câu lệnh (statements):*** Các câu lệnh của javascript sẽ được đặt trong một cặp thẻ `<script>`. Các câu lệnh sẽ tuân thủ theo cú pháp(syntax) mà javascript đặt ra. Nếu bạn làm sai luật thì sẽ không thực hiện được.    
	Cú pháp cơ bản của ngôn ngữ [JavaScript](https://www.daipho.com/blogtag/javascript/) (JS), bao gồm các cách khai báo biến, các loại dữ liệu và cách viết mã lệnh.
	Cú pháp của [JavaScript](https://www.daipho.com/blogtag/javascript/) phần lớn được vay mượn từ Java

-   ***Từ khóa (keywords):***
    
-   ***Biến số (Variables):*** 2 cách khai báo:
    

![](https://lh4.googleusercontent.com/-DeA5tbXUZAue9ykP8ONLJIfEfeuahZz1_rMl-ViVjMqIcRTNJijlc-lrQRJrn1AP0foGSgZzj8FG6aF8MYGK7gSZyq93dCPJ34PAFKC50198VpO7nDY0PgJxaGvcUEDg-TkNWLoQxj7iaLcQ6Q)

>***Sự khác nhau giữa var và le :***
>-   var cho phép khai báo lại, let thì biến chỉ được khai báo 1 lần, nếu cố tình khai báo lần tiếp theo sẽ bị lỗi.   
>-   let thì phạm vi hiệu lực trong khối {} nó khai báo, var thì hiệu lực toàn cục (xem [Khối lệnh Javascript](https://xuanthulab.net/cau-lenh-dieu-kien-va-vong-lap-trong-javascript.html))
    

- ***Phạm vi của biến:***

	-   Cục bộ (local) - biến chỉ có hiệu lực trong hàm (khối) nó khai báo - ra khỏi hàm hết hiệu lực
    
	-   Toàn cục (global) - biến có hiệu lực toàn code, có thể truy cập ở bất kỳ đâu. Biến này không khai báo trong một hàm, mà khai báo bên ngoài.    

	Khi khai báo biến có thể không cần thiết phải gán giá trị cho nó. Khi biến khai báo mà không gán giá trị thì nó có giá trị là undefined

>Chú ý: Các dòng lệnh JS ngăn cách bởi dấu chấm phẩy `;`

>Cách đặt tên biến:
>	-   Bắt đầu bằng ký tự chữ hoặc _ hoặc $. Tiếp theo là chuỗi các ký tự chữ, số, gạch dưới, dollar    
>	-   Không được bắt đầu bằng số    
>	-   Không được chứa các ký hiệu toán học, logic ví dụ *, +    
>	-   Không được chứa khoảng trắng
    

- ***Hằng:*** Hằng số được khai báo và phải khởi tạo ngay với từ khóa `const`, sau khi khai báo và gán thì giá trị không thay đổi được nữa (cố tình thay đổi sẽ lỗi)

![](https://lh4.googleusercontent.com/zF1Dq7wnbSKMKd1HK96MdY6wqDWQClIzLN1TvIQbRqDS1f2QZhFmAxo-O9lbpM_QlK2Rm2Sp3W4el1nZkgMDApeqpFt6yG21GuO1Hemo4kIvn-5YXX2UDyi-hciXgYj_PVtm9nW-5VEiYs-9Jcs)

***Biến cẩu (Variable hoisting):***

Một điều khác về các biến trong [JavaScript](https://www.daipho.com/blogtag/javascript/) là có thể tham chiếu đến một biến được khai báo sau, mà không mắc phải một ngoại lệ. Khái niệm này được gọi là [cẩu](https://www.daipho.com/blog/cu-phap-lap-trinh-javascript-phan-1/#bien-cau) (hoisting); các biến trong JavaScript theo nghĩa “hoisted” hoặc được nâng lên đầu của hàm hoặc câu lệnh. Tuy nhiên, các biến chưa được khởi tạo sẽ trả về giá trị undefined.

***VD:***

![](https://lh3.googleusercontent.com/UsKtlW-uOwQ1MrDXbwkifLrLaVgEOLSs8JfI3ihByAD-mrEYMA6snfnw5IHRFhCbw64WDAUvUguN6TUVhkk0KhkdBkLDJka58-pi468NTFcR4lekJjGlMmE8SCuBAgwJ3cAfvYwYtB0UfYWj9U0)

Sẽ tương đương:
````
var hoist; \\ hoist mới được khai báo nên giá trị của hoist là undefined.
console.log(hoist);
var hoist = 500;
````
Cơ chế Hoisting của Javasript đã đưa khai báo biến lên trên cùng.
=> VD trên trả về undefined

***Kiểu dữ liệu trong JS:***

- Kiểu dữ liệu nguyên thủy:

	-   Number: Kiểu dữ liệu number trong JavaScript có thể xem là kiểu tổng hợp của int, float, double, … trong các ngôn ngữ lập trình khác. Hiểu đơn giản number là kiểu dữ liệu số, số nguyên, số thực,… đều là kiểu số cả.
    
		````
		let  number1 = 10;
		// Gán giá trị number1 = 10, number1 là kiểu number.
		let  number2 = 10.05;
		document.writeln(number1);
		// Hiển thị number1 ra trình duyệt.
		document.writeln(number2);
		// Hiển thị numbwer2 ra trình duyệt.
		document.writeln(number1 + number2);
		//Hiển thị tổng của hai số ra trình duyệt.
		````

	-   String: là các text như “Các kiểu dữ liệu trong JavaScript”, text có thể có một hoặc nhiều ký tự, cho phép bạn sử dụng cả ngoặc đơn và ngoặc kép để biểu diễn nó.
    
		VD tạo file .js và có đoạn code sau:
    
		````
		let  name = 'NIIT - ICT Hà Nội'; // Chuỗi trong dấu ngoặc đơn.
		let  action = ' hướng dẫn học ';
		let  JS = "JavaScript"; //Chuỗi trong dấu nháy kép.
		````
	-   Boolean: chỉ có 2 giá trị là true hoặc false.
    

	-   Undefine: là các giá trị không xác định. Trong JavaScript, khi một biến được khai báo mà không gắn với bất kỳ giá trị nào thì biến đó gọi là kiểu dữ liệu undefined, giá trị cũng là undefined luôn.
    
		````
		// Biến này chưa đượcgán giá trị
		// Do đó nó chứa giá trị mặc định là undefined
		let  undef;
		// Kiểu dữ liệu của nó lúc này là undefined
		document.write(typeof  undef);
		// Kết quả: undefined
		````
	-   Null: đơn giản là không có giá trị nào cả.
    

>Phân biệt Null và Undefine:
>-   Một biến được khai báo mà không gán giá trị khởi tạo thì JavaScript sẽ đặt cho nó giá trị mặc định là undefined, kiểu dữ liệu cũng là undefined.    
>-   Khi bạn kiểm tra kiểu dữ liệu bằng từ khóa typeof thì sẽ ra kiểu dữ liệu và undefined. Còn với null, nó có nghĩa là không có gì. Nhưng sự khác biệt là mặc dù biến đó không có giá trị nhưng kiểu dữ liệu của nó là object.
    

- Kiểu dữ liệu không nguyên thủy (tham chiếu):

	-   Object: Thể hiện một đối tượng và các thuộc tính có thể truy cập đến.
	-   Array: Nhóm các giá trị giống nhau.
	-   RegExp: Biểu thức chính quy.
    

#### Toán tử

>Toán tử gán, logic, số học, so sánh, toán tử điều kiện đều giống như các ngôn ngữ khác

![](https://lh3.googleusercontent.com/XNChvTWpWDPJ88uqWP5snoJm6ziSi_FpByQB-Qm1suAfc2TfxRWKcq7VZBQGJx-MNO_fYRxh64hLvr3AuUvW2B_ITsLD7htNpmm60TIcUkHW-pWOA1d0X9ce85FOUv1Lc7Ik3WelHQcyJxZqxEY)

![](https://lh3.googleusercontent.com/GMgFiC4LLNz5JQ1qfcbl63gLsvtwM8vArEvK2VnyR8eG6PpwqApuKSeQdKm-VQ_cuZp5QwGPLXEQsl3rybLHlvBynai70cskDAtT_l_3t0y1KfjO2z0FV9Bi1vpNc1JxIjGVGjkxMFltxVqhrus)
````
var x =  10  +  5;
document.write(x);
// In ra: 15
Có thể sử dụng nhiều số hạng:
var x =  10;
var y = x +  5  +  22  +  45  +  6548;
document.write(y);
//In ra : 6630
````
![](https://lh4.googleusercontent.com/WWB1GjaDtwrZPMnzGYC_zGTk_ILGgN7RDuwNWfBglN11CD79CWBxvMOkK2UW76dZDjlEfeNVtg7ILJO9W1OBHNQlhuJlIXwP4V6TPp7UuLKawmppT91q7JA6TTpaT32-Pi8fIdsgeqJmRSyVOKQ)

![](https://lh5.googleusercontent.com/KXlTJxk3F4bAnlZSqtODvbVwXjdXbGhyaKF0Mc9y-BiUMSwQ6_qQ9YYU92oGOkdha02yOMKrn0s-rc-kADG9sxknp_X4AL5D8R0d1W-0MLggqFFtldwe9M-9CzJxEZKSZPdj5hP8rO2nnbdkW2I)
````
var a =  (4  >  2)  &&  (10  <  15);
//a nhận giá trị false: vì 4 > 2 là true, 10 < 15 là false;
//a = true && false;
````
Toán tử điều kiện:

`variable = (condition) ? value1: value2;`

 Toán tử với chuỗi:
- Toán tử với chuỗi sử dụng nhiều là nối hai chuỗi lại với nhau, sử dụng toán tử + để nối. Lưu ý toán tử này có thể nối số vào chuỗi.

- Bạn có thể đưa vào chuỗi nằm giữa dấu `` (không phải '' hay ""), trong chuỗi đó có thể chèn biểu thức với ký hiệu ${biểu-thức}
	````
	let tb =  \`Hai nhân hai là ${2*2}`;
	let name =  "XuanThuLab";
	let msg =  \`Xin chao ${name}`;
	console.log(tb);
	console.log(msg);
	````
Toán tử typeof:

- Toán tử typeof trả về kiểu dữ liệu cần kiểm tra của một biến, một giá trị.

![](https://lh5.googleusercontent.com/jcHkzU6amlTtYlTVuzO60R-7cS4lQHnxG_F03Tf4G8nMv5QcwYB9wEaJ6aH3CKT0u2cpr1Sw2sp7PqOu10aeX_ZFv8cL1yp2HoJzfJr-E4T1wNmOXwy_0i3sIeBrvBznPISa4LHCC7Gq3BH0u08)
