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

    Đây là thẻ cần mở ngay sau mở thẻ `<html>`, thẻ `<head>` chứa các thành phần (phần tử HTML) hầu như là không hiển thị tới người dùng, chúng là các điều khiển, thiết lập giúp trang html được hiện thị theo một mục đích cụ thể.

  - Phần nội dung được khai báo bằng thẻ `<body>`. Thẻ `<body>` nằm trong thẻ `<html>`, những thành phần hiển thị tới người dùng (đoạn văn, hình ảnh, liên kết ...) phải nằm trong thẻ này. Một trang HTML chỉ có 1 thẻ `<body>`
