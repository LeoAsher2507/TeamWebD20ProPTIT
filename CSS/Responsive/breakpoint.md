# **Breakpoint**
## *1. Breakpoint là gì ?*
* Điểm ngắt (breakpoint) là điểm mà tại đó nội dung của website phản hồi theo chiều rộng thiết bị (device width), cho phép bạn hiển thị bố cục (layout) tốt nhất có thể cho người dùng.
* Điểm ngắt (breakpoint) còn được gọi là media query breakpoint vì chúng được sử dụng với media query.
* Ví dụ với thiết bị kích thước lớn như máy tính ta sẽ hiện thị layout với hai cột nhưng với thiết bị có kích thước nhỏ ta sẽ hiện thị layout với một cột. Điểm mà tại đó ta thay đổi layout hai cột và một cột được gọi là điểm ngắt (breakpoint).
![IMAGE](https://getflywheel.com/wp-content/uploads/2018/02/css-breakpoints-layouts-01.jpg)
## *2.Cách tiếp cận để thiết lập điểm ngắt (breakpoint) .*
### 1.Điểm ngắt dựa trên thiết bị.
* Điểm ngắt dựa theo thiết bị là ta sẽ CSS trên từng thiết bị sao cho nó phù hợp nhất với từng thiết bị. Đây cũng từng là 1 ý kiến hay nhưng với thoài buổi công nghệ phát triển thì đây không phải là lựa chọn tốt vì mỗi khi có 1 thiết bị mới ra đời thì ta lại phải css 1 cái mới và ta sẽ tạo ra 1 danh sách các media query " siêu to khổng lồ" .
* ví dụ
````CSS
@media only screen 
 
and (min-device-width: 375px)
 
and (max-device-width: 667px)
{
    ...
}
<!-- tương tự với các thiết bị khác t CSS tương tự sao cho phù hợp -->
````
### 2.Điểm ngắt dựa trên nội dung.
* Việc đặt breakpoint theo cách này sẽ phụ thuộc vào nội dung của trang web mà bạn có. Phương pháp này cho phép bạn đơn giản hóa việc thêm breakpoint tại nơi mà một nội dung nào đó cần sự thay đổi layout. Điều này sẽ giúp bạn hạn chế vấn đề phải làm việc với một danh sách các media query “siêu to khổng lồ” như cách đầu, cũng như giúp media query của bạn dễ quản lý và đơn giản hơn.Cách này được đại đa số sử dụng nhiều hơn vì nó phổ biến và dễ áp dụng.
* Ví dụ:
````HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="breakpoint.css">
</head>
<body>
    <h1 class="mobile"> Mobile </h1>
    <h1 class="tablet"> Tablet </h1>
    <h1 class="pc"> PC </h1>
    <div class="main">       
        <div id="maincontent">Main Content</div>
        <div id="content1">Content 1</div>
        <div id="content2">Content 2</div>
        <div id="content3">Content 3</div>
    </div>
</body>
</html>
````
````CSS
h1 {
     text-align: center;
}
.main {
    text-align: center;
}
#maincontent {
    background-color: coral;
    height: 100px;
}
#content1 {
    width: 100%;
    height: 100px;
    background-color: green;
    float: left;
}
#content2 {
    width: 100%;
    height: 100px;
    background-color: red;
    float:left;
}
#content3 {
    width: 100%;
    height: 100px;
    background-color: blue;
    
    float:left;
}  
@media only screen and  (max-width: 739px){
    .tablet {
        display: none;
    }
    .pc {
        display: none;
    }
}
/* pc */
@media only screen and  (min-width: 740px) and (max-width:1024px){
.mobile {
        display: none;
}
.pc {
        display: none;
}
#maincontent {
    width: 100%;
    height: 100px;
    background-color: coral;
}
#content1 {
    width: 50%;
    height: 100px;
    background-color: green;
    float: left;
}
#content2 {
    width: 50%;
    height: 100px;
    background-color: red;
    
    float:left;
}   
#content3 {
    width: 100%;
    height: 100px;
    background-color: blue;
    float:left;
}  
}
/* tablet */
@media only screen and  (min-width: 1024px){
.mobile {
        display: none;
}
.tablet {
        display: none;
}
#maincontent {
        width: 100%;
        height: 100px;
        background-color: coral;
}
#content1 {
        width: 70%;
        height: 100px;
        background-color: green;
        float: left;
}
#content2 {
        width: 30%;
        height: 100px;
        background-color: red; 
        float:left;
} 
#content3 {
        width: 100%;
        height: 100px;
        background-color: blue;
        float:left;
}  
}
````
* Kết quả:
<a href="http://127.0.0.1:5500/breakpoint.html" target="" title="">tại đây. </a>