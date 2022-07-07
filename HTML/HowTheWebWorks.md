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