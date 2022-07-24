# **MEDIA QUERY**

## 1. KHÁI NIỆM
- Media Query cung cấp một cách để áp dụng CSS khi browser và device phù hợp với rule(quy tắc) mà bạn chỉ định
- Media Queries là một phần quan trọng của Responsive web design, vì chúng cho phép tạo ra các bố cục khác nhau tùy thuộc vào kích thước của viewport(chế độ xem)

## 2. SYNTAX
Một Media Query bao gồm một loại Medie type tùy chọn(optional) và bất kỳ số biểu thức Media feature nào, có thể tùy chọn được kết hợp theo nhiều cách khác nhau bằng cách sử dụng các toán tử logic 
### 2.1. Dùng từ khoá `@media`

``@media not|only media-type and (media-feature operator media-feature) 
{
    CSS-Code;
}``

Trong đó:
- Media type: 
    * Xác định định dạng của mỗi loại thiết bị
    * Một số value của CSS3 Media Type:
        * all: Dùng cho mọi thiết bị. 
        * print: Dùng cho máy in
        * screen: Dùng cho computer, tablet, smartphone v.v.
        * speech: Dùng cho thiết bị đọc màn hình
    * Giá trị mặc định(default) của media type là `all` trừ khi sử dụng toán tử logic `not` hoặc `only`(theo sau phải có 1 value của media type)

### 2.2. Khai báo trong tag link với thuộc tính là media
- Ta có thể gọi đến hẳn một stylesheet bên ngoài
- Syntax

`<link rel="stylesheet" media="mediatype and|not|only (expressions)" href="external file link">
` 
- Ví dụ:

`<link rel="stylesheet" media="all" href="widescreen.css">`

### 2.3. Sử dụng từ khoá `@import` để load một external stylesheet bên trong một external stylesheet 
* Syntax

`@import url('file') all and (expression);`

## 3. LOGIC
* AND
* OR
* NOT
    * not x and y = not (x and y) ≠ (not x) and y
* Overriding

## 4. MEDIA FEATURE RULES
- aspect-ratio: Tỉ lệ giữa chiều rộng và chiều cao của viewport
- min-aspect-ratio: Tỉ lệ tối thiểu giữa chiều rộng và chiều cao của viewport
- max-aspect-ratio: Tỉ lệ tôi đa giữa chiều rộng và chiều cao của viewport
- color: Số bits cho mỗi màu sắc của device
- color-index: Số lượng màu sắc mà device có thể hiển thị
- device-aspect-ratio: Tỉ lệ giữa chiều rộng và chiều cao của device
- max-device-aspect-ratio: Tỉ lệ tối đa giữa chiều rộng và chiều cao của device
- min-device-aspect-ratio: Tỉ lệ tối thiểu giữa chiều rộng và chiều cao của device
- device-height: Chiều cao của device
- device-width: Chiều rộng của device
- height: Chiều cao của viewport
- width: Chiều rộng của viewport
- max-width: Chiều rộng tối đa của viewport
- min-width: Chiều rộng tối thiểu của viewport
- max-height: Chiều cao tối đa của viewport
- min-height: Chiều cao tối thiểu của viewport
- min-device-width: Chiều rộng tối thiểu của device
- max-device-width: Chiều rộng tối đa của device
- min-device-height: Chiều cao tối thiểu của device
- max-device-height: Chiều cao tối đa của device
- orientation: Định hướng của khung nhìn (xoay hoặc không xoay thiết bị)
- resolution: Độ phân giải của thiết bị đầu ra (sử dụng dpi hoặc dpcm)


