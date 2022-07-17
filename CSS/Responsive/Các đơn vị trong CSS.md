
# Các đơn vị trong CSS

Vì phần này trước đã tìm hiểu rồi, nhưng anh muốn em tìm hiểu rõ để giải thích dễ hiểu cho các bạn về các đơn vị, và nên dùng đơn vị nào nên dùng, đặc biệt khi responsive. Vì sao?

***-   Phân loại:***
    

-   **Đơn vị tương đối (Relative Units)** là những đơn vị được tính một cách tương đối dựa trên các phần tử khác (có thể là phần tử cha hoặc phần tử root). Các đơn vị loại này khá linh động, rất thích hợp cho việc thích ứng trên các thiết bị khác nhau. Một vài đơn vị tương đối như: rem, em, %, vw, vh, ex, ch, vmin, vmax
    
-   **Đơn vị tuyệt đối (Absolute Units)** là những đơn vị mà giá trị của nó không bao giờ thay đổi và không bị ảnh hưởng bởi các thành phần khác. Tức là trong mọi kích thước màn hình thì kích thước của nó vẫn như thế. Với loại đơn vị này chỉ nên dùng cho những thứ có kích thước cố định, hoặc kích thước nhỏ không quá ảnh hưởng như border, … Một vài đơn vị tuyệt đối như: px, pt, cm, mm, pc, in.
    


-   `Em`:
    

	-   em là đơn vị mà giá trị của nó được tính dựa trên tỉ lệ so với phần tử cha của nó hoặc chính nó thông qua giá trị của thuộc tính font-size.
    
	-   Mức độ ưu tiên sẽ tính theo font-size của nó trước, nếu nó không set thuộc font-size thì lấy của cha trực tiếp. Nếu cha nó không có thì lấy tiếp cha của cha nó. Đến khi nào đến root thì thôi.
    

-   `Rem`: rem (root em) tương tự như em, nhưng đơn giản là nó sẽ tỉ lệ theo thuộc tính font-size của phần tử root <html>
    
-  ` wh, vw, %`:
    

	-   vw (view width) sẽ tính theo tỉ lệ chiều rộng khung nhìn thiết bị của bạn. 1 vw = 1/100 chiều rộng view-port. Ví dụ: màn hình của bạn có chiều rộng 1100px thì 1vw = 11px;
    
	-   vh (view height) tương tự vw, vh sẽ tỉ lệ theo chiều cao của khung nhìn thiết bị.
    
	-   % – đơn vị phần trăm sẽ tỉ lệ theo phần tử cha trực tiếp của nó.
    

-   `Đơn vị vmin và vmax`:
    

	-   2 đơn vị này tương tự như vw và vh. Điểm khác biệt là nó sẽ không tỉ lệ theo 1 hướng mà là cả 2, tuỳ thuộc vào độ lớn của chiều cao và chiều rộng màn hình. Cụ thể:
    
		-   1 vmin = 1 vw hoặc 1 vh (Lấy cái nhỏ hơn). VD: màn hình của bạn có kích thước là 840×640 thì 1 vmin = 6.4px, nếu màn hình của bạn là 360×480 thì 1 vmin = 3.6px
    
		-   1 vmax = 1 vw hoặc 1 vh (Lấy cái lớn hơn). VD: màn hình của bạn có kích thước là 840×640 thì 1 vmin = 8.4px, nếu màn hình của bạn là 360×480 thì 1 vmin = 4.8px
    

	-   ex và ch rất ít khi sử dụng
    
-  #### Các đơn vị tuyệt đối px, pt, cm, in, mm:
    

	-   Với các đơn vị tuyệt đối thì giá trị của nó được cố định và không bị ảnh hưởng bởi bất kỳ thành phần nào khác.
    
	-   Các đơn vị này chỉ nên sử dụng với những thành phần đã được xác định chính xác kích thước và không bị biến thiên bởi các thành phần khác. Hoặc các thuộc tính có kích thước nhỏ, không cần quá chính xác như border: solid 1px;
    
	-   Thuộc tính hay được sử dụng nhất là px hoặc pt.
	**![](https://lh3.googleusercontent.com/fGT7jTPr8eO9cJOUrys_0WLL2sUyulPDZOLtMK4-f6axKFD0e8PUW4ib_2Bo8ENQeOEC9D38MgYlOQ806v9U5NpIK5hNYZlZYrlL54U_7GFua14XWhyrIYeNd5UYqKQFcs5dI0Eyytu0Vnk7cg)**
**![](https://lh6.googleusercontent.com/wt5jhYT3l138rV9AVn9OrR9UymYAIGgf5aijwNnOVR5YW-tSjLLWpUNP4Zg-S7O7DCvCPc_wGj47KdcW0C0S-NweCKsirqp4NKxjoLUkR_XwUjZcBk6T_cu7yb3ck_cz8CSDIOV1YvYnP-OXtQ)**
**![](https://lh6.googleusercontent.com/7cZxlKsyaUF-Ve6zOBDyhBX1vTDy4-U9K1R3E_qmQtDQHOmAFXA5xmigAK2vWTzfC6ikmKz01I7YpX42cPpAkZd9Nq98MkUyGMtj8zj63_jqdAooMlMubEhtIp5JBIuZLdkHnhSzHW3kH0BbOg)**
