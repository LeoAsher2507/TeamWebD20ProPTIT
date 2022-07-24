# **Thẻ Image**
 Link trang web tham khảo 
<a href="https://suntech.edu.vn/the-the-hien-hinh-anh-trong-html.sunpost.html" target="" title="">tại đây. </a>
## 1. Cấu trúc thẻ thể hiện hình ảnh trong HTML
### Cú pháp của thẻ thể hiện hình ảnh trong HTML
```HTML
<img src="đường dẫn tới vị trí ảnh của bạn">
```

* Bên cạnh thuộc tính src, ta cũng có thể kết hợp các thuộc tính khác trong thẻ img như:

    * `width`: Qui định độ rộng của ảnh
    * `height`: Qui định chiều cao của ảnh
    * `alt`: Mô tả thông tin chi tiết cho 1 ảnh ( Được hiển thị thay thế khi đường dẫn đến tập tin hình ảnh không chính xác)
    * `title`:  Hiển thị nội dung tấm ảnh khi người dùng di chuyển con trỏ vào.
* Ngoài ra còn các thuộc tính khác như border, hspace, vspace, align. Tuy nhiên các thuộc tính này hiện không còn được hỗ trợ trong phiên bản HTML5.
* Ví dụ:
```HTML
<html>
<head>
	<title>Thẻ Thể Hiện Hình Ảnh Trong HTML</title>
	<meta charset="utf-8">
</head>
<body>
	<img src="https://proptitclub.github.io/assets/img/pro.png" width="300px" height="" alt="Logo ProPTIT" title="Logo ProPTIT" />
</body>
</html>
```
* Kết quả :

![IMAGE4](/image/4.jpg)
> Một hình ảnh được hiển thị trên trình duyệt với kích thước chiều rộng là 300px. Thông thường để không làm méo ảnh thì chúng ta chỉ sét chiều rộng hoặc chiều cao của ảnh mà không sét cả 2. Khi sét chiều rộng hoặc chiều cao thì chiều còn lại tự động được căn chỉnh sao cho kích thước ảnh tỉ lệ với ảnh gốc mà không làm ảnh bị méo,...
## 2. Quy tắc để tạo hình ảnh
*  Để hình ảnh trên website của bạn có chất lượng cao, tốc độ load ảnh nhanh,... thì bạn nên tuân thủ một số nguyên tắc sau đây:

### Lưu hình ảnh đúng định dạng
*  Các trang web chủ yếu sử dụng hình ảnh ở định dạng jpeg, gif hoặc png. Nếu bạn chọn sai định dạng hình ảnh thì hình ảnh của bạn có thể không sắc nét như mong muốn và có thể khiến trang web tải chậm hơn.

### Lưu hình ảnh với kích thước phù hợp
*  Bạn nên chỉnh sửa hình ảnh cho phù hợp với kích thước mà bạn dự định sẽ hiển thị trên trang web. Nếu hình ảnh nhỏ hơn chiều rộng hoặc chiều cao mà bạn dự tính, hình ảnh có thể bị bóp méo và kéo dài. Nếu hình ảnh lớn hơn chiều rộng và chiều cao nếu bạn dự tính, hình ảnh sẽ hiển thị lâu hơn trên trang.

### Sử dụng độ phân giải thích hợp
*  Màn hình máy tính được tạo thành từ các điểm được gọi là pixel. Hình ảnh được sử dụng trên web cũng được tạo thành từ điểm vô cùng nhỏ đó. Độ phân giải đề cập đến số điểm trên mỗi inch và hầu hết các màn hình máy tính chỉ hiển thị các trang web ở 72 pixel trên inch. Vì vậy, lưu hình ảnh ở độ phân giải cao hơn dẫn đến hình ảnh lớn hơn mức cần thiết và mất nhiều thời gian để tải xuống hơn.

## 3. Chú thích hình ảnh với figure và figurecaption
*  Trên các website mỗi hình ảnh thường đi kèm với một chú thích. HTML5 đã giới thiệu thẻ `<figure>`  để chứa hình ảnh và chú thích của chúng để cả hai được liên kết với nhau. Bạn có thể có nhiều hình ảnh bên trong phần tử `<figure>` miễn là tất cả chúng đều có cùng chú thích. Để chú thích cho một hình ảnh ta dùng thẻ `<figcaption>` bên trong `<figure>`. Trước khi các phần tử này được tạo, không có cách nào để liên kết phần tử `<img>` với chú thích của nó.
```HTML
<html>
<head>
	<title>Thẻ Thể Hiện Hình Ảnh Trong HTML</title>
	<meta charset="utf-8">
</head>
<body>
	<figure>	
		<img src="https://proptitclub.github.io/assets/img/pro.png" alt="Logo ProPTIT" width="300px" height="" />
		<br/>
		<figurecaption>
			Logo ProPTIT gồm 2 gam màu chủ đạo xanh dương và trắng.
		</figurecaption>		
	</figure>
</body>
</html>
```
* Kết quả :

![IMAGE5](/image/5.jpg)
# **Thẻ Links**
Link trang web tham khảo
<a href="https://suntech.edu.vn/the-links-trong-html.sunpost.html" target="" title=""> tại đây. </a>
## 1. Cấu trúc thẻ liên kết trong HTML
### Thẻ liên kết là gì?
*  Thẻ liên kết là một thẻ HTML cơ bản bao gồm thẻ mở, thẻ đóng và các thuộc tính bên trong nó. Nó được sử dụng để liên kết, chuyển hướng đến một website, webpage, nội dung hay file nào đó,...
### Cú pháp của thẻ liên kết trong HTML
 ```HTML
 <a href="url" target="" title=""> Nội dung </a>
 ```
 * Trong đó:

    * `href`: Chỉ định trang, liên kết, đối tượng sẽ được chuyển đến khi ấn vào thẻ liên kết.
    * `target`: _blank -> Quy định về kiểu chuyển trang.
    * `title`: Mô tả chi tiết về thẻ liên kết.
* Ví dụ:
```HTML
<html>
<head>
	<title>Thẻ Liên Kết</title>
	<meta charset="utf-8">
</head>
<body>
	<a href="https://www.youtube.com/c/CLBL%E1%BA%ADpTr%C3%ACnhPTIT" target="_blank" title="Di chuyển đến youtubepage của CLB"> ProPTIT </a>
</body>
</html>
```
* Kết quả :

![IMAGE1](/image/1.jpg)
> Khi bạn để thuộc tính target="_blank" thì khi nhấn vào liên kết nó sẽ mở một tab mới để chuyển đến trang đích. Còn mặc định khi không để thuộc tính target thì khi nhân vào liên kết nó sẽ load trang đích ngay tại tab bạn đang mở.
## 2. Liên kết tới một trang web khác
*  Như bạn thấy ở trên giá trị của thuộc tính `href` là trang bạn muốn mọi người đi đến khi họ nhấp vào liên kết. Người dùng có thể nhấp vào bất kỳ đâu giữa thẻ mở `<a>` và thẻ đóng của nó `</a>` để được đưa đến trang được chỉ định trong thuộc tính `href`. Khi bạn liên kết đến một trang web, giá trị của thuộc tính href sẽ là 1 Website với đầy đủ địa chỉ, đó là được gọi là URL tuyệt đối. Các trình duyệt hiển thị các liên kết màu xanh lam với một gạch dưới theo mặc định. Ví dụ:
```HTML
<html>
<head>
	<title>Thẻ Liên Kết</title>
	<meta charset="utf-8">
</head>
<body>
	<p> Hệ Thống ProPTIT Gồm:
		<ul>
			<li> <a href="https://proptit.com/"> Website </a> </li>
			<li> <a href="https://www.youtube.com/c/CLBL%E1%BA%ADpTr%C3%ACnhPTIT"> Youtube Channel </a> </li>
			<li> <a href="https://www.facebook.com/clubproptit"> Fanpage </a> </li>		
		</ul>
	</p>
</body>
</html>
```
* Kết quả :

![IMAGE1](/image/2.jpg)
> Như bạn có thể thấy chúng ta sử dụng thẻ liên kết để liên kết tới 3 website khác nhau. Mỗi trang web đều có URL riêng của nó. Đây là địa chỉ web mà bạn sẽ nhập vào một trình duyệt nếu bạn muốn truy cập trang cụ thể đó.
## 3. Liên kết tới một webpage khác trong cùng một website
```HTML
<html>
<head>
	<title>Thẻ Liên Kết</title>
	<meta charset="utf-8">
</head>
<body>
	<p>
		<ul>
			<li><a href="./Demo.html">Home</a></li>
 			<li><a href="./Demo1.html">About</a></li>
 			<li><a href="./Demo2.html">Movies</a></li>
 			<li><a href="./Demo3.html">Contact</a></li>
		</ul>
	</p>
</body>
</html>
```
> Khi sử dụng URL tương đối bạn không cần chỉ định tên miền. URL tương đối sẽ trợ giúp bạn rất nhiều khi thực hành xây dựng một trang web trên máy tính của bạn vì bạn có thể tạo liên kết giữa các trang mà không cần phải thiết lập tên miền hoặc máy chủ của bạn.
## 4. Liên kết Email
*  Để tạo một liên kết với email của người dùng và gửi một email đến một địa chỉ email cụ thể, bạn cũng sử dụng thẻ liên kết `<a>`. Tuy nhiên, lần này giá trị của thuộc tính href bắt đầu với `mailto:` và theo sau là địa chỉ email bạn muốn email sẽ được gửi đến.  Khi bạn nhấp vào liên kết đó, chương trình email của bạn sẽ được mở lên với người gửi là địa chỉ email của bạn còn người nhận thư là địa chỉ được chỉ định trong liên kết. Ví dụ:
```HTML
<html>
<head>
	<title>Thẻ Liên Kết</title>
	<meta charset="utf-8">
</head>
<body>
	<a href="mailto:nguyenhonganhron@gmail.com">Gửi Email cho tui</a>

</body>
</html>
```
* Kết quả :

![IMAGE3](/image/3.jpg)
> Một hòm thư mới được mở ra với người nhận là địa chỉ mail trong thẻ liên kết.
# **Thẻ Video**
Link trang web tham khảo
<a href="https://suntech.edu.vn/the-video-va-audio-trong-html5.sunpost.html" target="" title=""> tại đây. </a>
## 1. HTML5 Video
* Để chèn một Video vào trang web chúng ta có thể sử dụng thẻ `<video> `với cấu trúc như sau:
```HTML
<video>
  ﻿ <source src="đường-dẫn-file-video.mp4" type="video/mp4" />
</video>
```
* Ví dụ :
```HTML
<html>
<head>
	<title>HTML5 Audio & Video</title>
	<meta charset="utf-8">
</head>
<body>	
	<video controls="control" width="1000" height="1000">
 		<source src="/Video/ProPTIT.mp4" type="video/mp4" />
	</video>
</body>
</html>
```
* Trong đó:

    * `type`: định dạng của file video.
    * `video/mp4`: định dạng MP4.
    * `video/webm`: định dạng WebM.
    * `video/ogg`: định dạng OGG.
* Kết quả :

![IMAGE6](/image/6.jpg)
* Bên cạnh đó HTML5 cũng cung cấp một số thuộc tính giúp các lập trình viên có thể tùy chỉnh việc hiển thị các chức năng khác của video như sau:

![IMAGE7](/image/7.jpeg)
# **Thẻ Audio**
Link trang web tham khảo
<a href="https://suntech.edu.vn/the-video-va-audio-trong-html5.sunpost.html" target="" title=""> tại đây. </a>
* Để chèn một Audio vào trang web chúng ta làm tương tự như khi chèn video như sau:
```HTML
<audio>
  ﻿ <source src="đường-dẫn-file-audio.mp3" type="audio/mpeg" />
</audio>
```
* Ví dụ:
```HTML
<html>
<head>
	<title>HTML5 Audio & Video</title>
	<meta charset="utf-8">
</head>
<body>	
	<audio controls="control" width="200" height="200">
 		<source src="/Video/ProPtit.mp3" type="audio/mpeg" />
	</audio>
</body>
</html>
```
* Trong đó:

    * `type`: định dạng của file âm thanh.
    * `audio/mpeg`: định dạng MP3.
    * `audio/ogg`: định dạng OGG.
    * `audio/wav`: định dạng WAV.
* Kết quả :

![IMAGE8](/image/8.jpg)
* Ngoài ra thẻ audio cũng có một số thuộc tính khác bạn có thể sử dụng như:
![IMAGE9](/image/9.jpeg)