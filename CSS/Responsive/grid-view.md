# Grid View
_- Chế độ xem dạng lưới_<br>
_- Chế độ này rất hữu dụng, giúp bạn dễ dàng đặt các phần từ trong thiết kế web_<br>
_- Mang lại cách nhìn trực quan hơn, tách biệt các nội dung khác nhau_<br>
_- Grid View thường có 12 cột chia với tổng width=100%, sẽ có thể thu phóng khi bạn thay đổi kích thước của thiết bị dùng

![gridview](https://i.imgur.com/hgbhBap.png)

## Các hệ thống Grid View thường gặp
1. Lưới nhiều cột (Multicolumn)
2. Lưới một cột (Singlecolumn)
3. Lưới module (Modular) 
4. Lưới đường cơ sở (Baseline)

## Các đối tượng trong GridView
1. Đối tượng Grid
- Là đối tượng dùng để chứa layout của website, bao chứa toàn bộ row và column<br>

- Đối tượng Grid được tạo ra thường sẽ chiếm trọn bề ngang của màn hình
2. Đối tượng Row
- Row sẽ chứa các column, sắp xếp các column theo bề ngang
- Nếu bề ngang chứa không đủ thì column sẽ được đưa xuống dòng tiếp theo
3. Đối tượng Column
- Dùng để chứa các thành phần của website
- Mỗi column có thể nằm trong các column khác lớn hơn

## Cách tính toán để phân chia các cột 
- Vì bề rộng màn hình tính là 100%, do đó khi chia ra 12 cột thì mỗi cột có giá trị 8,333%
- Khi ta lựa chọn bề rộng mỗi thành phần trong độ chia thì sẽ cho ra bề rộng như thế<br>
Ví dụ: chọn `col-3`sẽ có bề rộng bằng 3 cột, `col 5` sẽ có bề rộng 5 cột