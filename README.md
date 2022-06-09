# TeamWebD20ProPTIT 
## Buổi 1: Nhập môn web: Các kiến thức cơ bản về HTML.  

# **CÁCH WEBSITE HOẠT ĐỘNG**
## **I. MỘT SỐ ĐỊNH NGHĨA**
### **1. Webpage và Website**
#### _1.1. Webpage_
- Một web page (trang web) là một cách để hiển thị thông tin trên Internet. Nó chứa nội dung dạng văn bản, hình ảnh, liên kết, video v.v..
- Web page được liên kết với một URL cụ thể trong miền (domain) tương ứng.
- Một Web page là một tài liệu được hiển thị trực tiếp trên trình duyệt (browser).
- Một Web page thường được viết bằng HTML. Internet browser sẽ giải nén mã HTML đó và hiện thị nội dung tới client.

#### _1.2. Website_
- Website là một tập hợp các trang web (web pages) có liên quan với nhau và tồn tại trong cùng một tên miền (domain).
- 1 website được lưu trữ (host) trên ít nhất 1 máy chủ (web server), được truy cập thông qua một địa chỉ; 
> Tập hợp tất cả các websites công khai có thể truy cập được tạo thành World Wide Web (www).

### **2. Client và Server**
Máy tính được kết nối với web được gọi là clients (máy khách) và servers (máy chủ. 

![clientandserver](client_server.png)

#### _2.1. Client_
* Client (máy khách) là các thiết bị kết nối Internet của người dùng web điển hình (ví dụ: máy tính được kết nối với Wi-Fi hoặc điện thoại được kết nối với mạng di động) và phần mềm truy cập web có sẵn trên các thiết bị đó (thường là trình duyệt web như Firefox, Chrome, Safari, ...)

#### _2.2. Server_
* Server (máy chủ) là máy tính lưu trữ các webpages, sites, hoặc apps. Khi một thiết bị khách muốn truy cập một trang web, một bản sao của trang web được tải xuống từ máy chủ vào máy khách để được hiển thị trong trình duyệt web của người dùng. 

![interaction](interact.jpg)

### **3. Một số định nghĩa khác**
#### _3.1. Source Code_
* Mã nguồn được xem như là một phần mềm hoàn chỉnh được cài đặt lên web server/hosting của bạn, nó như công cụ để tạo lập và quản lý nội dung website.

#### _3.2. Web Server_
* Web server: Là nơi lưu trữ mã nguồn và nội dung website
* Web server được xác định bởi địa chỉ IP
* Web Server có thể xử lý và truyền tải dữ liệu đến máy khách (Client) trên Internet thông qua giao thức HTTP

#### _3.3. IP address_
* IP (giao thức Internet) được viết tắt bởi cụm từ Internet Protocol
* Mỗi thiết bị tham gia mạng máy tính cần phải có địa chỉ IP và không có địa chỉ IP nào trùng nhau
> Một địa chỉ IP về cơ bản trỏ đến một máy tính

#### _3.4. URL_
* URL còn được gọi là liên kết hay đường dẫn mạng, dẫn người dùng đến một địa chỉ web hay một nguồn tài nguyên xác định trên Internet.

![url_structure](url_structure.png)  

* Cấu trúc của một URL
    * Protocol (còn được gọi là scheme) là một giao thức mạng chỉ định một tập hợp các quy tắc dựa trên một tài nguyên gồm: truyền, định dạng, hiển thị.
        * Giao thức phổ biến nhất là giao thức HTTP (giao thức chuyển siêu văn bản) - một giao thức ứng dụng xác định ngôn ngữ cho máy khách và máy chủ để nói chuyện với nhau. 

    * Domain
        * Tên miền là tên thay thế cho địa chỉ IP của máy chủ web.
        * Việc gán (ánh xạ) tên miền cho địa chỉ IP được thực hiện bởi hệ thống phân giải tên miền (DNS)

    * Top-Level Domain (TLD) là "tiện ích mở rộng" trong tên miền.
        * .com có ​​nghĩa là nội dung là thương mại
        * .org đề cập đến một trang web của một tổ chức
        * .edu đề cập đến một trang web giáo dục.
        * .gov đề cập đến một trang web của chính phủ

    * File Path
        * URL path chỉ định từ thư mục bạn muốn truy cập các tệp trên máy chủ.

## **II. CÁCH WEBSITE HOẠT ĐỘNG**
![webworks](web_works.jpg)

1. Người dùng nhập vào trình duyệt một URL
2. Trình duyệt gửi yêu cầu đến máy chủ DNS.
3. Hệ thống DNS trả kết quả dịch miền sang địa chỉ IP
4. Trình duyệt đưa ra yêu cầu đến máy chủ với địa chỉ IP đã nhận được đó
5. Máy chủ web nhận được yêu cầu truy xuất nội dung website và nó gửi một tập hợp các file bao gồm HTML, CSS, các tập tin đa phương tiện khác như âm thanh, hình ảnh (nếu có) cho trình duyệt
6. Trình duyệt “dịch” các file mà máy chủ đã gửi thành trang web mà chúng ta nhìn thấy trên màn hình.  
  
# Tài liệu về cách hoạt động của một trang web

##	Các thành phần của web 
![Cấu tạo của website](https://tmarketing.vn/wp-content/uploads/2021/07/cau-tao-cua-website.jpg)
1)	Web hosting
- 	Là nơi lưu chữ mã nguồn và nội dung của website.
-	Web sever được xác định bằng địa chỉ IP
-	Tuy nhiên thì web sever chỉ dùng cho trang web lớn còn trang web nhỏ và vừa sử dụng một phần tài nguyên của web sever ngoài ra có thể sử dụng shared hosting hoặc máy chủ ảo VPS
### Một số loại hosting phổ biến hiện nay
![Các loại hosting](https://tmarketing.vn/wp-content/uploads/2021/07/cac-hosting-pho-bien-hien-nay.jpg)
- Shared hosting (lưu trữ chia sẻ):Dịch vụ lưu trữ web chia sẻ là  dịch vụ lưu trữ web trong đó nhiều trang web nằm trên một máy chủ web được kết nối với Internet. Đây thường là lựa chọn kinh tế nhất cho việc lưu trữ, vì tổng chi phí bảo trì máy chủ được phân bổ cho nhiều khách hàng.
- Dedicated server hosting(lưu trữ máy chủ vật lý) : Dịch vụ lưu trữ chuyên dụng, máy chủ chuyên dụng hoặc dịch vụ lưu trữ được quản lý là một loại lưu trữ Internet trong đó khách hàng thuê toàn bộ máy chủ không được chia sẻ với bất kỳ ai khác
- VPS hosting – Virtual Private Server Hosting (Lưu trữ máy chủ ảo riêng): Máy chủ ảo là một máy ảo được một dịch vụ lưu trữ Internet bán dưới dạng dịch vụ. Máy chủ chuyên dụng ảo cũng có ý nghĩa tương tự. VPS chạy bản sao hệ điều hành của riêng mình và khách hàng có thể có quyền truy cập superuser vào phiên bản hệ điều hành đó, vì vậy họ có thể cài đặt hầu hết mọi phần mềm chạy trên HĐH đó.
- Cloud Hosting (Lưu trữ máy chủ đám mây): Điện toán đám mây, còn gọi là điện toán máy chủ ảo, là mô hình điện toán sử dụng công nghệ máy tính và phát triển dựa vào mạng Internet. Thuật ngữ “đám mây” ở đây là lối nói ẩn dụ chỉ mạng Internet và như sự liên tưởng về độ phức tạp của các cơ sở hạ tầng chứa trong nó.
2)	Tên miền
![Tên miền](https://ecpmedia.vn/wp-content/uploads/2019/06/khai-niem-domain-la-gi-va-cach-chon-domain-phu-hop.jpg)
-	Tên thay thế cho địa chỉ ip của máy chủ web do địa chỉ ip là dãy số dài khó nhớ 
-	Việc gán tên miền chi địa chỉ ip được thực hiện bởi hệ thống phân giải tên miền (DNS).
3)	Dữ liệu
-	Dữ liệu người dùng hay cơ sở dữ liệu : là những thông tin được lưu trữ về người dùng vd : tên đăng nhập, mật khẩu, nhật ký hoạt động
-	Dữ liệu website : các tập tin đa phương tiện như văn bản, hình ảnh, âm thanh, video,..được lưu chữ trên máy chủ của trang web  
4)	Mã nguồn 
-	Để dễ hình dung và mã nguồn được coi như là một phần hoàn chỉnh và nó được cài đặt trên lên web sever/ hosting nó chính là công cụ để tạo lập và quản lý nội dung của trang web 
-	Hiện nay mã nguồn web thường là các phần mềm quản trị Drupal, WordPress,..
5)	Giao diện người dùng
-	Giao diên người dung là tất cả những bố cục về màu sắc hình ảnh, nội dung văn bản,các hiệu ứng,.. thể hiện lên trang web mà khi người dung truy cập vào và có thể tương tác với nó.
##	  Cách hoạt động của một trang web 
![hình ảnh minh họa](https://tmarketing.vn/wp-content/uploads/2021/07/cach-thuc-hoat-dong-website.jpg)
1.	Đầu tiên người dùng nhập vào trình duyệt một địa chỉ có dạng: https:... , bạn có chỉ cần gõ “facebook.com” là trình duyệt sẽ tự hiểu và đổi thành đường dẫn ở trên.
2.	Sau đó trình duyệt gửi yêu cầu đến máy chủ DNS.
3.	Hệ thống DNS sẽ trả kết quả phân tích tên miền trong đường dẫn đã gửi là facebook.com, nó có địa chỉ máy chủ là 210.211.113.135
4.	Sau khi nhận được địa chỉ IP – nơi lấy dữ liệu, trình duyệt sẽ tìm đến địa chỉ IP đã nhận – tức máy chủ chứa nội dung website.
5.	Máy chủ web nhận được yêu cầu truy xuất nội dung website và nó gửi một tập hợp các file bao gồm HTML, CSS , các tập tin đa phương tiện khác như âm thanh, hình ảnh (nếu có) cho trình duyệt;
6.	Trình duyệt “dịch” các file mà máy chủ đã gửi thành trang web mà chúng ta nhìn thấy trên màn hình.
## Web tĩnh và Web động
![hình ảnh](https://mona.media/wp-content/uploads/2021/12/web-dong-va-web-tinh.png)
1. Web tĩnh 
-  Là trang web đơn thuần chỉ sử dụng hoàn toàn ngôn ngữ lập trình HTML. Nó có nhiệm vụ đăng tải các thông tin giống như một tờ báo. Sau khi tải trang HTML từ máy chủ xuống, trình duyệt sẽ hỗ trợ biên dịch mã và hiển thị nội dung của trang web. Và người dùng hầu như không thể tương tác được với website. 
2. Web động
- Là một chương trình chạy với giao thức http://. Có thể xem nó là một tập hợp các dữ liệu số hóa được tổ chức thành cơ sở dữ liệu và trình diễn trên các trang web dưới dạng văn bản, âm thanh, hình ảnh. Dynamic website được tích hợp thêm các phần xử lý thông tin và truy xuất dữ liệu.
3. Sự khác nhau
#### Khác nhau về chức năng
- Web động được tích hợp thêm các phần xử lý thông tin và truy xuất dữ liệu. Còn web tĩnh thì không. Người sở hữu trang web có quyền điều hành, chỉnh sửa và cập nhật thông tin trên trang web một cách dễ dàng. Khách hàng có được quyền trao đổi thông tin với chủ website và những khách hàng khác.
-  Web động luôn có thông tin mới được cập nhật bởi phần mềm quản trị web do các công ty thiết kế website cung cấp. Các thông tin này được lưu vào cơ sở dữ liệu của trang web và đưa ra sử dụng dựa vào yêu cầu của người dùng.
#### Khác nhau về ngôn ngữ
![khác nhau về ngôn ngữ](https://bizflyportal.mediacdn.vn/thumb_wm/1000,100/bizflyportal/images/png15875345352415.jpg)
#### Khác nhau về khả năng tương tác với khách hàng
- Đối với website tĩnh, người dùng hầu như không thể tương tác được với website. Không thể trò chuyện, giao tiếp với nó. Nội dung của Website tĩnh đã được xác định ngay từ đầu. Nếu muốn thay đổi hay thêm bớt nội dung, người quản lý phải làm lại khuôn để có thể in ra những tờ báo mới. 
- Web động lại khác, với các chương trình ứng dụng, khách hàng có được quyền trao đổi thông tin với chủ website và những khách hàng khác một cách dễ dàng nhất.
#### Khác nhau về ứng dụng giữa website động và website tĩnh
#### Khác nhau về chi phí bảo trì, nâng cấp  
  
# **CẤU TRÚC CỦA HTML**

- HTML là chữ viết tắt của cụm từ Hyper Text Markup Language (Ngôn ngữ đánh dấu siêu văn bản) được sử dụng để tạo một trang web, trên một website có thể sẽ chứa nhiều trang và mỗi trang được quy ra là một tài liệu HTML. HTML là một trong những ngôn ngữ quan trọng trong lĩnh vực thiết kế website (được xem là bộ khung của website), đây là ngôn ngữ duy nhất mà các trình duyệt cốc cốc , chrome, opera… có thể hiểu và hiển thị được.
- HTML sử dụng các **thẻ** để xác định nội dung của trang.

  > **Trang web tĩnh:** Các tài liệu HTML (trang HTML) có thể là các file với phần mở rộng (.html) được lưu trữ trên hệ thống file của máy chủ web (webserver), từ đó trình duyệt truy cập đọc được và hiện thị.
  >
  > **Trang web động:** Các trang HTML mà trình duyệt lấy về từ webserver được phát sinh bởi một ứng dụng chạy trên server (ứng dụng phát triển bằng các ngôn ngữ lập trình như PHP, C# ...).
  >
  > **Siêu văn bản (HyperText):** Ám chỉ sự liên kết giữa các trang, một trang HTML có liên kết tham chiếu đến một trang khác trên cùng một Website hay giữa các website.

  > **_Lưu ý:_** _HTML không phải là ngôn ngữ lập trình._

- Cấu trúc cơ bản của trang HTML thường gồm 3 phần:

  - \<!Doctype>: Phần khai báo chuẩn của html hay xhtml.
  - \<head>\</head>: Phần khai báo ban đầu, khai báo về [meta](https://hocwebchuan.com/reference/tag/tag_meta.php), [title](https://hocwebchuan.com/reference/tag/tag_title.php), [css](https://hocwebchuan.com/tutorial/tut_css.php), javascript…
  - \<body>\</body>: Phần chứa nội dung của trang web, nơi hiển thị nội dung.

  ![](https://lh3.googleusercontent.com/WQxv00RpcjiEw_eij60G4_g54afFUZEsedAg8Wg8DmvfBWaQiUcHxUaiaTa0naj4UH5YI4obfIb3LW6j3tOUOr7ax4uLth6K2YrWh2jnI93LY38vYNeYtqgaeF-TVBDdH-m3BQUWpBjddwNO8w)

Cụ thể:

- Đầu tiên, trước khi khai báo các thẻ khác trong HTML chúng ta cần khai báo dạng tài liệu và phiên bản HTML bằng thẻ `<!DOCTYPE>`, cách khai báo này là khác nhau cho các phiên bản HTML.

  Trong HTML4 chúng ta khai báo nội dung tiếp theo viết theo tiêu chuẩn HTML4 bằng cách đưa cú pháp sau vào dòng đầu tiên của mã nguồn:

  _\<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" \"[http://www.w3.org/TR/html4/strict.dtd]">_

  Với HTML5, cách khai báo đơn giản hơn do HTML5 không còn dựa trên SGML nên không phải khai báo DTD:

  ![](https://lh3.googleusercontent.com/bZcVaG1WDK-tBbdfVRhPIVL99xnsd72Yvc80ApsJASGjpb_FSkwOxPeL5OQ22Hh7MbBdKJF-vW5nK6U3VtbT1rnIVQdOXNlGYPEl0iVnW5Sgjhqrgb06ozf4IZQh7zSqy_IBDXjyA68-3O7aCw)

- Một tài liệu (trang) HTML hoàn chỉnh có một thẻ gốc là `<html>`, mọi thẻ khác trình bày trong thẻ <html> này.
- Tiếp theo, toàn bộ nội dung trong thẻ `<html>` chính là nội dung siêu văn bản. Trong nội dung này chúng ta nhìn bố cục sẽ có hai phần:

  - Phần đầu được khai báo bằng thẻ `<head>`. Trong phần này, chúng ta có thể khai báo một số vấn đề như:

    - Tiêu đề của văn bản

    - Văn bản sử dụng bảng mã ký tự nào

    - Các thông tin thêm cho văn bản chính (metadata) như thông tin tác giả, mô tả bài viết, từ khóa bài viết…

    - Các file css, javascript có thể chèn vào tại đây.

    Đây là thẻ cần mở ngay sau mở thẻ `<html>`, thẻ `<head>` chứa các thành phần (phần tử HTML) hầu như là không hiện thị tới người dùng, chúng là các điều khiển, thiết lập giúp trang html được hiện thị theo một mục đích cụ thể.

  - Phần nội dung được khai báo bằng thẻ `<body>`. Thẻ `<body>` nằm trong thẻ `<html>`, những thành phần hiện thị tới người dùng (đoạn văn, hình ảnh, liên kết ...) phải nằm trong thẻ này. Một trang HTML chỉ có 1 thẻ `<body>`
  
  
# <span style = "color : Yellow"> 3</span>. Block và inline elements qua phân biệt div và span 
### Trong văn bản HTML, các phần tử HTML được phân loại ra thành 2 cấp độ đó là: <span style = "color : LightSkyBlue">block</span> và <span style = "color : LightSkyBlue">inline</span>

<br>


<div >

    * Phần tử HTML cấp độ block là những phần tử chiếm hết không gian theo chiều ngang của phần tử cha (phần tử chứa nó). Còn chiều cao mở rộng theo nội dung của phần tử này. Trong trình duyệt các phần tử dạng này tạo ra các dòng mới (xuống dòng) ở trước và sau phần tử, các phần tử cấp độ block như: <h1>, <form>, <li>, <ol>, <ul>, <p>, <pre>, <table>, <div> ...

    Các phần tử block hiện thị liên tiếp theo chiều đứng của phần tử chứa nó                                                                                                                   
```
<div> Học</div> <div> lập trình</div>
```                               
<div> Học</div> <div> lập trình</div>
</div>

<div> 

    * Phần tử HTML cấp độ inline là những phần tử chiếm không gian chiều ngang theo nội dung của phần tử, không tạo ra dòng mới (xuống dòng) trước và sau phần tử. Các phần tử inline như: <b>, <a>, <strong>, <img>, <input>, <em>, <span> ...

    Các phần tử inline hiển thị liên tiếp theo chiều ngang của phần tử chứa nó
```
<span> Học</span>
<span> lập trình</span>
```
<span> Học</span>
<span> lập trình</span>
</div>

#### <span style = "color : Yellow"> 3.1</span>. Thẻ  `<div>` : là phần tử dạng block cơ bản dùng để chứa nội dung, dùng nó để phân nội dung thành các phân đoạn, thường được sử dụng làm khối để chứa các phần tử HTML khác. Thường thì div sẽ được sử dụng kết hợp với CSS để trình bày.

Cú pháp cơ bản : `<div> Nội dung </div>`

Ví dụ : 
```
<div style = "color:LightSkyBlue">Nội dung thẻ div</div>
``` 
<div style = "color:LightSkyBlue">Nội dung thẻ div</div>

> Thẻ `<div>` để định nghĩa phần từ kiểu block trong html, nó tự tạo dòng mới và ngắt dòng 

Block-level elements 

![Block_element](https://i.pinimg.com/564x/27/a3/47/27a347e98a25036c362094edd17cab1e.jpg)

<br>

#### <span style = "color : Yellow"> 3.2</span>. Thẻ `<span>` : là loại thẻ inline, thường nó được dùng để chứa văn bản, chứa phần tử inline khác. Tương tự div, span thường kết hợp với CSS để định dạng, trình bày nội dung nó chứa

Cú pháp cơ bản : `<span>Nội dung</span>` : 

Ví dụ :

```
Học 
    <span style="color:LightSkyBlue">HTML</span>
cơ bản
```

Học 
    <span style="color:LightSkyBlue">HTML</span>
cơ bản

> Thẻ `<span>` định nghĩa các inline, phần văn bản dạng inline không ngắt dòng.

Inline elements

![inline_element](https://i.pinimg.com/564x/af/0b/67/af0b67b8b4a1ac8a7f84a709b1ebcb4b.jpg)

<br>

> <h3> Lưu ý : Phần tử loại block thì có thể chứa các phần tử inline, phần tử inline thì không thể chứa phần tử block </h3>
<br>

### <span style = "color: Cyan"> Tóm tắt </span>:

1, Phần tử HTML có 2 loại: Block và inline <br>
2, Phần tử cấp độ block luôn bắt đầu trên dòng mới và chiếm hết không gian theo chiều ngang <br>
3, Phần tử cấp độ inline không tạo dòng mới và chỉ chiếm không gian bằng nội dung nó chứa <br>
4, Thẻ `<div>` là một phần tử cấp độ block và thường được dùng để chứa các phần tử HTML khác <br>
5, Thẻ `<span>` là một phần tử inline để đánh dấu một phần văn bản, tài liệu. <br>
6, Phần tử loại block thì có thể chứa các phần tử inline, phần tử inline thì không thể chứa phần tử block.

# **Cách sử dụng thẻ tạo bảng `<table> </table>` trong html.**
Tạo bảng dùng thẻ `<table> </table>` gồm 2 phần con là `<thead> </thead>` và `<tbody> </tbody>`.  
Bên trong phần `<thead> </thead>` xác định tiêu đề từng cột dùng thẻ `<th> </th>`.  
Bên trong phần `<tbody> </tbody>` xác định nội dung từng hàng dùng thẻ `<tr> </tr>`.  
Bên trong mỗi hàng tương ứng với mỗi thẻ `<tr> </tr>` ta dùng thẻ `<td> </td>` xác định nội dung từng cột với mỗi hàng đó.  
  
### Một số thuộc tính:   
  
![thuộc tính table](https://user-images.githubusercontent.com/93191061/171989656-8f1e51e1-6e91-463b-90a9-6aa1ff3edfb8.png)  
  
ví dụ về đường viền: thêm phần code border = "..." ở thẻ table. VD: `<table border = "3">`.  
  
![border](https://user-images.githubusercontent.com/93191061/171873470-f9b0f88b-c534-4aa3-9d2f-9c3288492dd7.png)  
  
### Cách gộp các ô bên trong bảng làm một  
Thông thường, khi tạo một cái bảng thì số ô trên mỗi hàng phải bằng nhau. 
Tuy nhiên, có một vài trường hợp đặc biệt, chúng ta cần phải tạo ra những cái bảng mà số ô trên mỗi hàng có sự hơn kém nhau.
  

#### Gộp các ô theo chiều ngang  

  
Để gộp các ô theo chiều ngang thì chúng ta đặt thuộc tính colspan vào bên trong thẻ mở của cái ô mà ta muốn bắt đầu gộp nó với những ô nằm phía bên phải.  
Cú pháp: `colspan="số ô muốn gộp lại với nhau"`. 

#### Gộp các ô theo chiều dọc  
Để gộp các ô theo chiều dọc thì chúng ta đặt thuộc tính rowspan vào bên trong thẻ mở của cái ô mà ta muốn bắt đầu gộp nó với những ô nằm phía dưới.  
cú pháp: `rowspan="số ô muốn gộp lại với nhau"`.  
  

# **Các thẻ từ h1-> h6**
1. Định nghĩa: heading hay còn được gọi là  tiêu đề 
2. Tính chất: Trong đó h1 là tiêu đề quan trong nhất và tính quan trong giảm dần vì vậy h6 sẽ là thẻ có tính ít quan trong nhất.
3. Lưu ý: Chỉ sử dụng duy nhất một thẻ h1 trên một trang, điều này đại diện cho tiêu đề/ chủ đề chính của toàn trang.
4. Example:
    ![exh1-h6](data:image/png;base64,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)

# Thẻ p
1. Định Nghĩa: là paragraph thẻ được sử dụng để chứa một đoạn văn, trình duyệt tự động thêm một dòng trống trước và sau mỗi <p> phần tử.
2. Example:
![exp](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARUAAAC2CAMAAADAz+kkAAAC01BMVEX////o6OgAAAD///v///37///x///v///3///6//////j///X//+////P/7tH//+D//+a0dABAmdfoqVnewZ3i///t/P+73PqY1/+AsNH/9+uSzP++2PD/57FyVIHG9P//6cSiabTS///H4Oz//sqyHDHD3P+kW07w9v3Byd6aAADIa361mMn//sB3ABWdcXf1w4f44cZzcon/88eFT1mNw+XUq5L869rttWjKzvmXRwDo9v///9msaUT/04u5hVyLi4vTf367s9Ld8v+0mIry2a2ewOOuk3d+mcOBkaLhtZJyi76RnazQ7fbx2sNMk/C4cW2fWqrNgCSyo+Hd4PvbnG3gu6bTrdnmo0kAAE0AAHaZ4f9NTlHdq2l4a3q3cCwAI5EAAD8sAADUtITln3+GXlisgm53otl3bZllQXek2+qmgLTbjX64ps7k3ri+eIl7fHzHknSFeHhxn8e2hIDCwJ6PprzJrY1TaJBYjcLi2tN1gp+RfHhecq1pYZdRPYiMcZGOYXqAca51YHCsqn5oV0VXX6aghERchJqjo6WIXEE9dq2dssaUhnTCiEW4kGAwUoo5T3JJaYNETFNbeqG3f2m039+FjpeikavKt7GwVlm0WYgod96BAMzNk9QAJ9OcNFvGVgC7xsWyAACqc6AcAMpiu/KVYc0AU9ylSoIbauD/4uiUMskaQ9xuP82kast5oufjqtibFUF+Ucq0OHilAIazgZWuT5KiAG3enILOWizsx+XHor8gISM5MSllGyPHltVBAAAAP6FJJQB0DFt5GwAAABWTOwAAOGNNOQBjGwBZIWBQADoAdLuBVAzSeVSUNTN9AESXOMlqZNRZO0iff9VHS2uttuy2VMgbMUP+xdQtGQB8p6UAAC+i07GeAE8AMJvdkQAvADduOlobmOqCbk5EABnikc2MRFs0VFxHMGFyk5GoOTZ6dNfSeyXToqKqPi6I4H2fAAARKklEQVR4nO2di1sTZ77H38xMIORCIiRchkSQoA0UuwkIkYKQJQQRy6UlXCphbZuirhaNEC8E7dkea09BvLVamipqU/ECK9527dpQ1+qx7nZLadfb2mN362nt2T2rS/+Efd+ZJAxXtQICeT8PzxNmMnkz883vvX3nlzeAhxkMwGAw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)

# Thẻ ul ol li
1. Định nghĩa: (ul) unordered list danh sách không có thứ tự, (ol) orderly list danh sách có thứ tự, (li) list. Nói chung chúng ta sử dụng để tạo ra các danh sách thí là ul li hoặc ol li.
2. Tính chất: Mỗi danh sách sẽ bắt bắt đầu với ul hoặc ol và mỗi danh mục bắt đầu với li. Trong ol tag có thêm thuộc tính(Attribute) type xác định loại điểm đánh dấu mục danh sách, có thể lựa chọn type="1" (các mục sẽ được đánh dấu bắt đầu bằng 1), type="A" (các mục sẽ được đánh dấu từ "A"),... Đặc biệt các danh sách có thể lồng nhau.
3. Example: 
![exul-ol-li](https://i.ytimg.com/vi/mEbIaatnMa4/maxresdefault.jpg)

## 1. "div" và "span"
Cú pháp :        
``` HTML
<div>Nội dung</div>
<span>Nội dung</span>   
```
**Thẻ span** :    
* Thẻ <span> là thẻ khá đặc biệt trong HTML, theo mặc định thì thẻ span được thêm vào đoạn văn nhưng không làm thay đổi thuộc tính cũng như hiển thị của đoạn văn đó. Vì vậy chúng được gọi là thẻ trung tính trong HTML. Sự thay đổi của chúng chỉ được thay đổi khi chúng ta tác động chúng bằng CSS.   
* Thẻ *span* là một thẻ **inline**  

Ví dụ : 
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DEMO</title>
</head>
<body>
    <span>span 1 </span>
    <span>span 2 </span>
    <span>span 3 </span>
</body>
</html>
```
![](/img/span1.png)     
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DEMO</title>
</head>
<body>
    <span style="background-color: red">span 1</div>
</body>
</html>
```
![](/img/span2.png)  



**Thẻ div** 
* Không giống như thẻ *span* được dùng cho các thành phần nội tuyến, thẻ *div* được sử dụng để định nghĩa một khu vực trong trang web.
* Thẻ *div* có chức năng rất lớn trong việc thiết kế website như: Phân chia hoặc gộp các thẻ, khu vực khác nhau để tiện cho việc quản lý cũng như css cho chúng.    
* Thẻ *div* là một thẻ **block**    
Ví dụ :
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DEMO</title>
</head>
<body>
    <div>div 1</div>
    <div>div 2</div>
    <div>div 3</div>
</body>
</html>
``` 
![](/img/div1.png)  
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DEMO</title>
</head>
<body>
    <div style="background-color: red">div 1</div>
</body>
</html>
```
![](/img/div2.png)


//////////////////////////////////
## 2. "header"
* Thẻ *header* xác định phần đầu của trang web, nó dùng để làm thùng chứa cho các phần tử là tiêu đề, liên kết, hình ảnh logo, .... 
* Phần tử *header* thích hợp nằm trong thẻ *body*       
* Thẻ *header* là một thẻ **block**     

Ví dụ :
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DEMO</title>
</head>
<body>
    <header style="background-color: green;">
        <h1>Team web</h1>
        <p>chào mừng bạn đến với buổi học web đầu tiên </p>
    </header>
</body>
</html>
```
![](/img/header1.png)


//////////////////////
## 3. "footer"
* Thẻ *footer* xác định phần chân của trang web, nó thường được dùng để chứa các thông tin liên hệ, bản quyền, tác giả, liên kết, ....
* Thẻ *footer* là một thẻ **block**     

Ví dụ :
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DEMO</title>
    <style>
        footer{
            background-color: aqua;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <footer>
        <div>Bài học của team web D20 PROPTIT</div>
    </footer>   
</body>
</html>
```
![](/img/footer1.png)


/////////////////////
## 4. "nav"
* Thẻ *nav* dùng để xác định "một tập hợp các liên kết"(những liên kết này thường là những liên kết chính và quan trọng trong trang web)    
* Thẻ *nav* thường được sử dụng kết hợp với CSS để định dạng thành một "thanh menu".
* Thẻ *nav* là một thẻ **block** 

Ví dụ :
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DEMO</title>
</head>
<body>
    <nav style="background-color: brown;">
        <a href="http://webcoban.vn/html/default.html">HTML</a>
        <a href="http://webcoban.vn/css/default.html">CSS</a>
        <a href="http://webcoban.vn/javascript/default.html">JavaScript</a>
        <a href="http://webcoban.vn/mysql/default.html">MySQL</a>
        <a href="http://webcoban.vn/php/default.html">PHP</a>
    </nav>  
</body>
</html>
```
![](/img/nav1.png)

/////////////////

## 5. "main"
* Thẻ *main* xác định phần thân của trang, nó thường được dùng để chứa các nội dung chính của trang web.
* Thẻ *main* là một thẻ **block** 

Ví dụ :
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DEMO</title>
</head>
<body>
    <main style="background-color: brown;">
        <p>Đây là thân trang</p>
    </main>
</body>
</html>
```
![](/img/main1.png)


///////////////////////
## 6. "section"
* Định nghĩa một khu vực (vùng bao) trong văn bản HTML
* Thẻ *section* là một thẻ **block**

>Nên sử dụng thẻ section khi trang của bạn bao gồm nhiều thành phần, việc sử dụng thẻ section cho mỗi thành phần đó sẽ giúp quá trình quản lý cũng như sửa đổi nội dung về sau trở nên dễ dàng hơn rất nhiều. 

>Chẳng hạn như, có thể sử dụng section để bao quanh các vị trí như header, footer, sidebar... Tuy nhiên, thực tế thì người ta vẫn thường sử dụng section trong phần nội dung chính của trang web, bởi vì đã có rất nhiều thẻ cho các vị trí khác.

![](/img/section1.png)
* Theo em thấy thì thẻ **section** có tính chất hiển thị giống như thẻ **div**

//////////////////
## 7. "article"
* Dùng để khai báo cấu trúc cho các bài viết sẽ hiển thị lên trang web.
* Thẻ *article* là một thẻ **block**
>Thẻ article được dùng trong các trang về danh sách bài viết hoặc chi tiết bài viết. Bên trong mỗi article cũng có thể khai báo thêm các thẻ header khác, đó chính là phần tiêu đề của mỗi article.

>Về tính chất thì thẻ article cũng giống như thẻ div, tức là hiển thị dạng block với chiều rộng 100% và chiều cao phụ thuộc vào nội dung bên trong của nó.

![](/img/article1.png)

# **HTML Form**
_HTML Form dùng để thu tập các dữ liệu đầu vào của người dùng để gửi đến máy chủ_
## A.Các yếu tố (element)
1. Phần từ form: Thẻ form `<form></form>` chứa rất nhiều (11 thẻ) các thẻ nhập dữ liệu (input element) như:
***
    *  Thẻ input: <input type="..." id="" name="" value=""> dùng để khai báo một kiểu nhập nào đó
    Trong đó value là giá trị nhập vào
    id và name là tên hay địa chỉ của vị trí nhập dữ liệu

    *  Thẻ label: <label for"">Name:</label> dùng để xác định nhãn cho nhiều element khác, giúp người dùng dễ dàng tìm kiếm và nắm rõ yếu tố mình đang cần nhập vào.
    Thuộc tính for trong label phải giống với thuộc tính id trong input
    Ví dụ: Đoạn code sau:
```
<!DOCTYPE html>
<html>
    <body>
    <h2>Textarea</h2>
    <form>
        <label for="message">Label</label>
        <textarea name="message" rows="10" cols="30">The cat was playing in the garden.</textarea>
    </form>
    </body>
</html>
```
    Sẽ cho ra
<!DOCTYPE html>
<html>
    <body>
    <form>
        <label for="message">TEXTAREA</label><br>
        <textarea name="message" rows="10" cols="30">The cat was playing in the garden.</textarea>
    </form>
    </body>
</html>

***
    *  Thẻ textarea: <textarea name="" rows="" cols=""> tạo ra một vùng để nhập text
    Trong đó rows để xác định số dòng, cols để xác định bề rộng
    Ví dụ: Đoạn code sau
```
<!DOCTYPE html>
<html>
    <body>
    <h2>Textarea</h2>
    <form>
        <textarea name="message" rows="10" cols="30">The cat was playing in the garden.</textarea>
    </form>
    </body>
</html>
```
    Sẽ có kết quả:
<!DOCTYPE html>
<html>
    <body>
    <h2>Textarea</h2>
    <form>
        <textarea name="message" rows="10" cols="30">The cat was playing in the garden.</textarea>
    </form>
    </body>
</html>

***
    *  Thẻ button: <button type="button">Click</button> dùng để tạo ra một nút bấm
    Nút sẽ có thêm attribute onClick để cài đặt thêm hành động tiếp theo của phím bấm

    *  Thẻ fieldset và legend: 
    fieldset dùng để nhóm các dữ liệu lại trong 1 form
    legend dùng để chú thích cho fieldset
    Ví dụ:
```
<!DOCTYPE html>
<html>
    <body>
    <h2>Fieldset</h2>
    <form>
    <fieldset>
        <legend>Personalia:</legend>
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value=""><br>
    </fieldset>
    </form>
    </body>
</html>
```
    Sẽ cho kết quả là
<!DOCTYPE html>
<html>
<body>
<h2>Fieldset</h2>
<form>
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value=""><br>
  </fieldset>
</form>
</body>
</html>

***
    *  Thẻ datalist: Xác định danh sách các tùy chọn từ trước cho mỗi input
    Ví dụ:
```
<!DOCTYPE html>
<html>
    <body>
    <h2>The datalist Element</h2>
    <form action="/action_page.php">
    <input list="browsers" name="browser">
    <datalist id="browsers">
        <option value="Internet Explorer">
        <option value="Firefox">
        <option value="Chrome">
        <option value="Opera">
        <option value="Safari">
    </datalist>
    <input type="submit">
    </form>
    </body>
</html>
```
    Sẽ cho ra:
<!DOCTYPE html>
<html>
    <body>
    <h2>The datalist Element</h2>
    <form action="/action_page.php">
    <input list="browsers" name="browser">
    <datalist id="browsers">
        <option value="Internet Explorer">
        <option value="Firefox">
        <option value="Chrome">
        <option value="Opera">
        <option value="Safari">
    </datalist>
    <input type="submit">
    </form>
    </body>
</html>

***
    *  Thẻ select: <select> tạo ra một danh sách tùy chọn giống như datalist, tuy nhiên nó có thể cho phép chọn nhiều lựa chọn(multiple) hiện thị đồng thời(size) các lựa chọn và ta có thể chỉnh sửa thứ tự hiện thị các lựa chọn cũng như số lượng hiển thị
    Ví dụ:
```
<!DOCTYPE html>
<html>
<body>
<h2>Allow Multiple Selections</h2>
<p>Use the multiple attribute to allow the user to select more than one value.</p>
<form action="/action_page.php">
  <label for="cars">Choose a car:</label>
  <select id="cars" name="cars" size="4" multiple>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select><br><br>
  <input type="submit">
</form>
<p>Hold down the Ctrl (windows) / Command (Mac) button to select multiple options.</p>
</body>
</html>
```
Sẽ có kết quả:
<!DOCTYPE html>
<html>
<body>
<h2>Allow Multiple Selections</h2>
<p>Use the multiple attribute to allow the user to select more than one value.</p>
<form action="/action_page.php">
  <label for="cars">Choose a car:</label>
  <select id="cars" name="cars" size="4" multiple>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select><br><br>
  <input type="submit">
</form>
<p>Hold down the Ctrl (windows) / Command (Mac) button to select multiple options.</p>
</body>
</html>

***
    * Thẻ otpgroup: Dùng để nhóm các tùy chọn có liên quan đến nhau trong <select>
    Ví dụ:
```
<!DOCTYPE html>
<html>
    <body>
    <h1>The optgroup element</h1>
    <p>The optgroup tag is used to group related options in a drop-down list:</p>
    <form action="/action_page.php">
    <label for="cars">Choose a car:</label>
    <select name="cars" id="cars">
        <optgroup label="Swedish Cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        </optgroup>
        <optgroup label="German Cars">
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        </optgroup>
    </select>
    <br><br>
    <input type="submit" value="Submit">
    </form>
    </body>
</html>
```
Sẽ có kết quả:
<!DOCTYPE html>
<html>
<body>
<h1>The optgroup element</h1>
<p>The optgroup tag is used to group related options in a drop-down list:</p>
<form action="/action_page.php">
  <label for="cars">Choose a car:</label>
  <select name="cars" id="cars">
    <optgroup label="Swedish Cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
    </optgroup>
    <optgroup label="German Cars">
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </optgroup>
  </select>
  <br><br>
  <input type="submit" value="Submit">
</form>
</body>
</html>
*** 
    *  Thẻ option: Dùng để đưa các tùy chọn vô trong thẻ <select>, <datalist>, <otpgroup>
    Tham khảo các ví dụ ở trên

    *  Thẻ output: Hiện thị kết quả
    Ví dụ:
```
<!DOCTYPE html>
<html>
<body>

<h2>The output Element</h2>
<p>The output element represents the result of a calculation.</p>

<form action="/action_page.php"
oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  0
  <input type="range" id="a" name="a" value="50">
  100 +
  <input type="number" id="b" name="b" value="50">
  =
  <output name="x" for="a b"></output>
  <br><br>
  <input type="submit">
</form>

<p><strong>Note:</strong> The output element is not supported in Edge prior version 13.</p>

</body>
</html>

```
Sẽ có kết quả
<!DOCTYPE html>
<html>
<body>

<h2>The output Element</h2>
<p>The output element represents the result of a calculation.</p>

<form action="/action_page.php"
oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  0
  <input type="range" id="a" name="a" value="50">
  100 +
  <input type="number" id="b" name="b" value="50">
  =
  <output name="x" for="a b"></output>
  <br><br>
  <input type="submit">
</form>

<p><strong>Note:</strong> The output element is not supported in Edge prior version 13.</p>

</body>
</html>

***
2. Các dạng input (Input Type)
    *  Textfeild: <input type="text" id="" name="" value=""> dùng để khai báo một kiểu nhập dạng text trên 1 dòng
    Ví dụ: Đoạn code sau

``` 
<!DOCTYPE html>
<html>
    <body>
    <h2>Text input fields</h2>
    <form>
        <label for="firstname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="John"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe">
    </form>
    </body>
</html>
```
Sẽ có kết quả:
<!DOCTYPE html>
<html>
    <body>
    <h2>Text input fields</h2>
    <form>
        <label for="firstname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="John"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe">
    </form>
</body>
</html>

    *  Radio Button: <input type="radio"> khai báo một ô tick hình tròn, ngoài ra nó cũng có id, name và value như textfield ở trên
    Ví dụ: Đoạn code sau
```
<!DOCTYPE html>
<html>
<body>

<h2>Radio Buttons</h2>

<p>Hôm nay là thứ mấy:</p>

<form>
  <input type="radio" id="hai" name="day" value="Hai">
  <label for="hai">Hai</label><br>
  <input type="radio" id="ba" name="day" value="Ba">
  <label for="ba">Ba</label><br>
</form> 

</body>
</html>
```
Sẽ có kết quả là:
<!DOCTYPE html>
<html>
<body>

<h2>Radio Buttons</h2>

<p>Hôm nay là thứ mấy:</p>

<form>
  <input type="radio" id="hai" name="day" value="Hai">
  <label for="hai">Hai</label><br>
  <input type="radio" id="ba" name="day" value="Ba">
  <label for="ba">Ba</label><br>
</form> 

</body>
</html>

***
    *  Checkbox: <input type="checkbox"> khai báo 1 checkbox đơn giản, ngoài ra nó cũng có id, name và value như textfield ở trên.
    Về cơ bản Thẻ checkbox gần tương tự với radio button

***
    *  Submit: <input type="submit"> khai báo một nút submit đơn giản, ngoài ra nó có thêm value.
    Ví dụ: 
```
<!DOCTYPE html>
<html>
    <body>
    <h2>Submit Button</h2>
    <form>
      <input type="submit" value="Submit">
    </form>  
    </body>
</html>
```
Sẽ có kết quả:
<!DOCTYPE html>
<html>
    <body>
    <h2>Submit Button</h2>
    <form>
        <input type="submit" value="Submit">
    </form> 
    </body>
</html>

***
    *  Color: <input type="color" id="" name="" value="">  
    Dùng để chọn màu, mã màu sẽ được hiện ở value, tùy vào sự hộ trợ của từng trình duyệt mà bảng chọn màu sẽ được hiện thị
    *  Password: <input type="password" id="" name=""> - dùng để nhập password
    *  Reset: <input type="reset"> - tạo ra phím reset để đưa các giá trị về dạng mạc định
    *  Button: <input type="button" onclick="" value=""> - tạo ra một phím
    Nó tương đối giống với thẻ Button(<button type="button">) và nó cũng có thuộc tính onclick, tuy nhiên nó sẽ ko cần thẻ đóng và tên của button sẽ được để ở thuộc tính value
    *  Date: <input type="date" id="" name="">
    Dùng để chọn ngày, tháng, năm cho đầu vào, nó sẽ hiện thị ra một bảng lịch để chọn hoặc có thể điền trực tiếp
    Chúng ta có thể dùng thuộc tính min và max để giới hạn việc lựa chọn.
    Ví dụ:
```
<form>
  <label for="datemax">Enter a date before 1980-01-01:</label>
  <input type="date" id="datemax" name="datemax" max="1979-12-31"><br><br>
  <label for="datemin">Enter a date after 2000-01-01:</label>
  <input type="date" id="datemin" name="datemin" min="2000-01-02">
</form>
```
    Kiểu date sẽ ko hỗ trợ trên Interne Explore 11 hoặc Safari 14.1
    *  Datetime-local: <input type="datetime-local>
    Hộ trợ ngày và giờ 
    Ví dụ:
```
<!DOCTYPE html>
<html>
<body>
<h2>Local Date Field</h2>
<form>
  <input type="datetime-local" id="dayandtime" name="dayandtime">
  <input type="submit" value="Submit">
</form>
</body>
</html>
```
Kết quả:
<!DOCTYPE html>
<html>
<body>
<h2>Local Date Field</h2>
<form>
  <input type="datetime-local" id="dayandtime" name="dayandtime">
  <input type="submit" value="Submit">
</form>
</body>
</html>

***
    *  Email: <input type="email" id="" name="">
    Dùng để nhập email
    Tùy vào sự hộ trợ của trình duyệt mà email được lưu từ trước sẽ được ghi nhớ và hiện lên gợi ý và tự động xác thực khi bạn gửi đi, một số điện thoại sẽ tự động thêm đuôi .com vào bàn phím.
    *  File: <input type="file" id="" name=""> 
    Sẽ tạo ra nút "Duyệt" để tải ảnh từ thiết bị lên web
    *  Hidden: <input type="hidden" id="" name="" value="">
    Dữ liệu ẩn, người dùng ko nhìn thấy, tuy nhiên người dùng có thể thấy nếu mở mã nguồn của web
    *  Month: <input type="month" id="" name="">
    Dùng để chọn tháng và năm
    *  Number: <input type="number" id="" name="">
    Dùng để định dạng kiểu nhập chỉ có kiểu số
    Có thể dùng thuộc tính max và min để giới hạn số khi nhập
    *  Range: <input type="range" id="" name="">
    Tạo ra một thanh trượt để điều chỉnh giá trị
    Phạm vi giá trị có thể được cài bởi thuộc tính max, min và step
    *  Search: <input type="search" id="" name="">
    Dùng để tạo ra thanh tìm kiếm
    *  Tel: <input type="tel" id="" name="">
    Dùng để nhập số điện thoại
    Có thể dùng thuộc tính pattern để định dạng dạng đúng của số điện thoại
    *  Time: <input type="time" id="" name="">
    Dùng để nhập thời gian
    *  Url: <input type="url" id="" name="">
    Dùng để nhập đường dẫn url
    Tùy thuộc vào hỗ trợ trình duyệt, trường URL có thể được tự động xác thực khi gửi.
    Một số điện thoại thông minh nhận ra loại URL và thêm ".com" vào bàn phím để khớp với đầu vào URL. 
    *  Week: <input type="week" id="" name="">
    Dùng để nhập tuần số mấy của năm
    * Image: <input type="image">
    Có thêm các thuộc tính của image như src, alt, width, height
    Dùng để hiển thị hình ảnh đã chọn để làm công cụ đầu vào như phím, giúp input thêm sinh động hơn

## B.Các thuộc tính (attribute)
1. Các thuộc tính của form<br>
Các thuộc tính sẽ được khai báo ngay trong thẻ mở form<br>
Ví dụ
```
<form action="/action_page.php" accept-charset="utf-8">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="submit" value="Submit">
</form>
```
    *  accept-charset
    Chỉ định dạng mã hóa kí tự khi gửi form đi
    *  action
    Chỉ định nơi gửi dữ liệu sau khi dữ liệu được gửi
    *  autocomplete
    Chỉ định tự động điền dựa vào dữ liệu đã từng điền trước đó, kiểu ghi nhớ dữ liệu
    autocomplete có thể định dạng on|off
    *  enctype
    Chỉ định việc mã hóa dữ liệu khi gửi đến máy chủ
    *  method
    Chỉ định dạng gửi đi của dữ liệu
    method="get"- dạng URL 
    method="post"- dạng HTTP
    Ghi chú trên GET:
        Thêm dữ liệu biểu mẫu vào URL theo cặp tên/giá trị
        Độ dài của một URL bị giới hạn (khoảng 3000 ký tự)
        Không bao giờ sử dụng GET để gửi dữ liệu nhạy cảm! (sẽ được hiển thị trong URL)
        Hữu ích cho việc gửi biểu mẫu mà người dùng muốn đánh dấu kết quả
        GET tốt hơn cho dữ liệu không an toàn, như chuỗi truy vấn trong Google
    Ghi chú trên POST:
        Thêm dữ liệu biểu mẫu bên trong nội dung yêu cầu HTTP (dữ liệu không được hiển thị trong URL)
        Không có giới hạn kích thước
        Không thể đánh dấu biểu mẫu gửi bằng POST
    *  name
    Chỉ định tên của form, dùng để tham chiếu đến các element trong JavaScript hoặc đến các biểu mẫu khác
    *  novalidate
    Là một dạng boolearn, dùng để chỉ định dữ liệu ko nên được xác nhận khi gửi
    *  rel
    Biểu thị mối quan hệ giữa tài liệu hiện tại và tài liệu được kết nối
    *  target
    Chỉ định cách hiển thị phản hổi của form
    Có 4 dạng:
    _blank: hiển thị trong cửa sổ hoặc tab mới
    _self: hiện thị luôn trong khung, chuyển đến luôn(dạng mạc định)
    _parent: hiện thị đến khung mẹ
    _top: hiện thị khung mới thay thế khung cũ

2. Các thuộc tính của input<br>
    *  value: chỉ định giá trị đầu vào
    *  readonly: chỉ định trường đầu vào chỉ đọc, ko thể sửa nhưng có thể bôi đen, copy...
    *  disable: chỉ định trường đầu vào bị vô hiệu hóa, ta ko thể thay đổi dữ liệu ở đó
    *  size: chỉ định size dữ liệu (dạng kí tự) của trường nhập vào dữ liệu
    có giá trị mạc định là 20
    *  maxlength: chỉ định số lượng ký tự tối đa được nhập
    *  min, max: chỉ định lượng tối thiểu hoặc tối đa cho dữ liệu đầu vào
    *  multiple: cho phép nhập nhiều hơn 1 giá trị trong 1 trường nhập, có hiệu lực với email và file
    *  pattern: dùng để định dạng một dữ liệu, dữ liệu sẽ được kiểm tra theo định dạng đó khi gửi đi (regex)
    *  placeholder: dùng để mô tả ngắn về giá trị nhập vào của dữ liệu (đưa ra một ví dụ có sẵn ở phần nhập)
    *  require: bắt buộc phải điền input này mới được gửi
    *  step: tạo ra khoảng phù hợp cho một trường đầu vào<br>
    Ví dụ:
<!DOCTYPE html>
<html>
<body>

<h1>The input step attribute</h1>
<form action="/action_page.php">
  <label for="points">Points:</label>
  <input type="number" id="points" name="points" step="3">
</form>
</body>
</html>

    *  autofocus: chỉ định con trỏ tự động trỏ tới phần nhập dữ liệu khi load lại trang
    *  width và height: định dạng chiều rộng và cao của ảnh

3. Các thuộc tính của Input form*
    *  formenctype: chỉ định cách dữ liệu được mã hóa, chỉ dùng cho dạng form có method="post"
    Thuộc tính này sẽ override thuộc tính enctype của form
    * formmethod: chỉ định phương pháp HTTP để gửi dữ liệu đến URL
    formmethod cũng có 2 cách gửi đõ là dạng formmethod="get" hoặc formmethod="post"
    Thuộc tính này override thuộc tính method của form
    * formtarget: chỉ định cách phản hổi sau khi dữ liệu được gửi
    Thuộc tính này override thuộc tính target
    * formnovalidate: tương tự novalidate của form
    Nó được override lên novalidate của form


# CÁC THẺ KHÁC

# Thẻ head:

* Phần tử `<head>` không có ảnh hưởng đến các tiêu đề của HTML

* Phần tử  `<head>` chứa dữ liệu meta. Dữ liệu meta không được hiển thị

* Phần tử `<head>` là một địa chỉ đặt  giữa của cặp thẻ  `<html>` và thẻ `<body>`:

## Ví dụ:

```html
    <!DOCTYPE html>
<html>
    <head>
        <title>PROPTIT</title>
        <meta charset=“UTF-8”>
    </head>
    <body>
        <p>Lập trình PROPTIT</p>
    </body>
</html>
```
## Kết quả:
![Ví dụ head](https://i.imgur.com/AWsJ4a6.png)

# Thẻ meta:

* Phần tử `<meta>` được dùng để  mô tả trang, từ khóa, tác giả, và các metadata khác.

* Metadata được sử dụng bởi các trình duyệt (làm thế nào để hiển thị nội dung), bởi công cụ tìm kiếm (từ khóa), và các dịch vụ web khác.

## Định nghĩa từ khóa cho công cụ tìm kiếm:

`<meta name=“keywords” content=“HTML, CSS, XML, XHTML, JavaScript”>`

## Định nghĩa mô tả cho trang web của bạn:

`<meta name=“description” content=“Hướng dẫn web miến phí về HTML và CSS”>`

## Định nghĩa bộ kí tự được sử dụng:

`<meta charset=“UTF-8”>`

## Định nghĩa tác giả của trang :

`<meta name=“author” content=“PROPTIT”>`

## Làm mới tài liệu 30s một lần:

`<meta http-equiv=“refresh” content=“30”>`

## Ví dụ về thẻ `<meta>`:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>PROPTIT</title>
        <meta name=“description” content=“Hướng dẫn web miến phí”>
        <meta name=“keywords” content=“HTML, CSS, XML, JavaScript”>
        <meta name=“author” content=“PROPTIT>
        <meta charset=“UTF-8”>
    </head>
    <body>
        <p>Lập trình PROPTIT</p>
    </body>
</html>
```

## Kết quả:

![Ví dụ về thẻ meta](https://i.imgur.com/biF5alL.png)

# Thẻ base:

* Phần tử `<base>` chỉ định một URL cơ sở và target cơ sở đối với tất cả các URL liên quan trong một trang:

## Ví dụ thẻ base:

```html
    <!DOCTYPE html>
    <html>
        <head>
        <base href="https://www.facebook.com" target="_blank">
        </head>
        <body>

            <h1>Page CLB</h1>

            <p><a href="clubproptit"> CLB PROPTIT</a> </p>

        </body>
    </html>
```

## Kết quả:

![Ví dụ thẻ base](https://i.imgur.com/u67aViw.png)

# Thẻ aside:

* Thẻ `<aside>` xác định một số nội dung ngoài nội dung mà nó được đặt trong đó.
* Nội dung sang một bên nên liên quan gián tiếp đến nội dung xung quanh.

**Mẹo**: Nội dung <aside> thường được đặt dưới dạng thanh bên trong tài liệu.

**Lưu ý**: Phần tử `<aside>` không hiển thị dưới dạng bất kỳ thứ gì đặc biệt trong trình duyệt. Tuy nhiên, bạn có thể sử dụng CSS để tạo kiểu cho <aside> phần tử (xem ví dụ bên dưới).

```html
    <!DOCTYPE html>
<html>
    <body>

    <h1>The aside element</h1>

    <p>My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together with my family!</p>

    <aside>
        <h4>Epcot Center</h4>
        <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
    </aside>

    </body>
</html>
```
## Kết quả:

![Ví dụ aside](https://i.imgur.com/OHSi6hW.png)

# Thẻ details

* Thẻ `<details>`chỉ định các chi tiết bổ sung mà người dùng có thể mở và đóng theo yêu cầu.
* Thẻ `<details>`thường được sử dụng để tạo một widget tương tác mà người dùng có thể mở và đóng. Theo mặc định, tiện ích con bị đóng. Khi mở, nó sẽ mở rộng và hiển thị nội dung bên trong.
* Bất kỳ loại nội dung nào cũng có thể được đưa vào bên trong `<details>`thẻ. 
**Mẹo**: Thẻ `<summary>` được sử dụng `<details>`để chỉ định một tiêu đề hiển thị cho các chi tiết.

## Ví dụ thẻ details:
```html
<!DOCTYPE html>
<html>
    <body>

    <h1>The details element</h1>

    <details>
    <summary>PROPTIT</summary>
    <p>- Câu lạc bộ được thành lập ngày 9/10/2011.</br>
        - Tên đầy đủ là : Câu lạc bộ Lập trình PTIT</p>
    </details>

    </body>
</html>
```

## Kết quả: 

![Ví dụ details](https://i.imgur.com/m9J31C5.png)

# Thẻ source:
* Thẻ `<source>` được sử dụng để chỉ định nhiều tài nguyên phương tiện cho các phần tử phương tiện, chẳng hạn như `<video>` , `<audio>` và `<picture>` .
* Thẻ `<source>`cho phép bạn chỉ định các tệp video / âm thanh / hình ảnh thay thế mà trình duyệt có thể chọn, dựa trên sự hỗ trợ của trình duyệt hoặc chiều rộng khung nhìn. Trình duyệt sẽ chọn cái đầu tiên `<source>` nó hỗ trợ.

## Ví dụ source:
```html
<!DOCTYPE html>
<html>
<body>

<h1>The source element</h1>

<p>Click on the play button to play a sound:</p>
<video width="555" height="555" controls>
    <source src="https://media.istockphoto.com/videos/businessman-thinking-and-looking-for-answer-shrugs-his-shoulders-no-video-id1339089882">
  </video>

</body>
</html>
```
## Kết quả:

![Ví dụ source](https://i.imgur.com/60am1fh.png)

# Thẻ option

* Thẻ `<option>`xác định một tùy chọn trong danh sách được chọn.
* `<option>`các phần tử đi vào bên trong phần tử `<select>` , `<optgroup>` hoặc `<datalist>` .
**Lưu** ý: Có <option>thể sử dụng thẻ mà không có bất kỳ thuộc tính nào, nhưng bạn thường cần thuộc tính giá trị , cho biết những gì được gửi đến máy chủ khi gửi biểu mẫu.
**Mẹo**: Nếu bạn có một danh sách dài các tùy chọn, bạn có thể nhóm các tùy chọn liên quan trong thẻ <optgroup> . 

## Ví dụ option:
```html
<!DOCTYPE html>
<html>
<body>

<h1>The option element</h1>

<label for="cars">Choose a car:</label>

<select id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
  
</body>
</html>
```
## Kết quả:
![Ví dụ option](https://i.imgur.com/qc0XHMA.png)

