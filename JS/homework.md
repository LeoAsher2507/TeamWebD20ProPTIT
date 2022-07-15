# BTVN Javascript 1
```
Bài 1. Cho một số dương n, in ra các số chẵn từ 1 đến n (khao báo n = 100 hoặc tùy ý)
VD: n = 6, kq: 2 4 6

Bài 2. Cho một số dương n, tính tổng các số từ 1 đến n (khao báo n = 100 hoặc tùy ý)
VD: n = 3, kq: 1+2+3 = 6

Bài 3. Cho một mảng, đếm xem trong mảng có bao nhiêu số chẵn
VD: a = [1, 2, 3, 6, 2, 9, 0] kq: 4

Bài 4. Cho một mảng chứa các chữ cái bị trùng lặp ngẫu nhiên. Tính toán và trả về 1 mảng đã xóa đi các chữ cái bị trùng lặp
VD:
['A', 'C', 'A', 'A', 'B', 'D', 'B']
Thì return:
['A', 'C', 'B', 'D']

Bài 5. Bạn cần phải tạo ra 1 mảng gồm các object có đầy đủ các thuộc tính: id, name, score từ 2 array sau:
const studentNames = [
    { id: 1, name: 'Nguyễn Thị Tèo' },
    { id: 2, name: 'Phạm Văn Bưởi' },
    { id: 3, name: 'Hoàng Văn Nam' },
    { id: 4, name: 'Vũ Ngọc Duy' },
    { id: 5, name: 'Nguyễn Minh Nhật' },
    { id: 6, name: 'Phí Duy Quân' },
    { id: 7, name: 'Trần Minh Minh' },
]
const studentScores = [
    { id: 1, score: 9.2 },
    { id: 2, score: 2.3 },
    { id: 3, score: 3.7 },
    { id: 4, score: 6.9 },
    { id: 5, score: 5.2 },
    { id: 6, score: 9.6 },
    { id: 7, score: 6.1 },
]
Yêu cầu mảng cần tạo phải là:

const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
Bài 6. Cho array dưới đây là danh sách các students

const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nam’, score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
Viết một hàm findScore({tên học sinh}) trả về score của học sinh đó, nếu có nhiều học sinh thì trả về score lớp thứ 2.

VD: findScore(‘Nam’) return 3.7
findScore(‘Duy’) return 6.9

Lưu ý hàm chỉ truyền vào tên chứ không phải họ và tên.

Bài 7. Viết 1 hàm repeatString({chuỗi}, {số lần lặp}) trả về 1 array, nhận vào 2 tham số, tham số thứ 1 là chuỗi cần lặp, tham số thứ 2 là số lần lặp

VD: repeatString('ahihi', 3) return ['ahihi', 'ahihi', 'ahihi']

Bài 8. Xóa đi các giá trị được xem là sai trong mảng
Lưu ý các giá trị được coi là sai là 0, false, null, undefined, ‘’
VD: [0, 1, false, 2, undefined, '', 3, null]
Return [1, 2, 3]

Bài 9. Tạo ra 1 object gồm các key và value tương ứng cặp array ban đầu

VD: const data = [['a', 1], ['b', 2]]
return{ a: 1, b: 2 }

Bài 10. Viết 1 hàm filterKey([‘a’, ‘c’]) trả về các key (của 1 object) khác các key truyền vào
VD: const obj = { a: 1, b: 2, c: 3, d: 4 }
return { b: 2, d: 4 }

Bài 11. Cho 1 array có cấu trúc như sau:

const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
Hãy trả về 1 array với cấu trúc sau:
['Pass', 'Fail', 'Fail', 'Pass', 'Pass', 'Fail', 'Pass']
Điều kiện Pass: Điểm trên 5.0 và không có chữ Duy là tên đệm
```