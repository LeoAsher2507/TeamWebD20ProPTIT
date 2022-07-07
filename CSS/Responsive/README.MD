# Responsive trong CSS
Trong trường hợp kích thước màn hình trang web có thể khác nhau do chúng ta kéo màn hình, hoặc dùng các thiết bị khác nhau để truy cập, dẫn tới bố cục các thẻ có thể hiện thị khác nhau theo từng tỉ lệ màn hình. Để khắc phục điều này thì dùng responsive

Ví dụ về web shoppe bị lỗi hiển thị khi chúng ta cố gắng kéo nhỏ trang web sao cho bé lại, khi đó chữ và ảnh sẽ bị đè lên nhau

![](./errror.png)


## 1. Media Query

Media CSS là một công nghệ được giới thiệu trong CSS. Nguyên tắc nó sử dụng trên thông qua các thông số kích thước màn hình được khai báo thông qua `@media` Với công cụ này chúng ta có thể phân đoạn Css chúng ta ra nhiều phần khác nhau tương ứng với kích thước của các loại thiết bị. Thuộc tính này có cú pháp như sau:


` 
@media not|only mediatype and (media feature) 
{ 
    CSS-Code;
}
`

### đầu tiên là từ khóa `@media` xác định kích thước màn hình cần responsive
### thứ hai là `keyword` gồm các giá trị sau: not, only, and, or.( phần này có thể có hoặc không)
### thứ ba là `mediatype` gồm các giá trị:
    - print: chỉ có tác dụng khi in
    - screen: chỉ có tác dụng khi xem màn hình
    - speech, device, vierwport, ...
    - all: áp dụng tất cả các giá trị
### thứ tư là từ khóa `and` kết hợp với với cú pháp(media feature) trong đó media feature có các thuộc tính sau: 
    max-width: Chiều rộng tối đa của viewport
    min-width: Chiều rộng tối thiểu của viewport
    max-height: Chiều cao tối đa của viewport
    min-height: Chiều cao tối thiểu của viewport
    .... ngoài ra còn nhiều thuộc tính khác
### thứ 5 là 2 dấu {...} phần trong dấu ... là các thuộc tính css do mình cài đặt theo ý muốn

## 2. Cách chuyển view sang các thiết bị khác trên brower và 1 số ví dụ minh họa

### Khi sử dụng browser có thể bấm nút F12 rồi Toggle device emulation để sử dụng view như khi dùng các thiết bị khác như iphone thường, ipad, iphone plus, ... , samsung, ... 

![](./tutorial.png)

### Ví dụ khi view đang bình thường: 

![](./no%20responsive.png)

Như ở ví dụ dưới đây, khi chuyển sang view của iphone plus, phần width là 736px nhỏ hơn và bằng 739px nên sẽ kích hoạt phần `@media` đã code bên CSS, sẽ khiến màu chữ chuyển sang màu đỏ

![](./yes%20responsive.png)

phần code CSS chỉ có tác dụng khi width tối đa nhỏ hơn và bằng 739px:

```
@media screen and (max-width: 739px) {
    h1 {
        color: red;
    }
}
```

Nếu chúng ta viết chỉ khi có tác dụng khi dùng máy in

![](./print.png)

phần code CSS chỉ có tác dụng khi in: 

```
@media print {
    h1 {
        color: red;
    }
}
```
