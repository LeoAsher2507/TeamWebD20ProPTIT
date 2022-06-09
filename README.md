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
6, Phần tử loại block thì có thể chứa các phần tử inline, phần tử inline thì không thể chứa phần tử block