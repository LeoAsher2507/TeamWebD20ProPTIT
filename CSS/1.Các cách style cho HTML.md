## Các cách style cho HTML

  

CSS là viết tắt của Cascading Style Sheets (tập tin định dạng theo tầng), mô tả cách các phần tử [HTML](https://quantrimang.com/html) hiển thị trên màn hình, giấy và các phương tiện khác.
CSS được thêm vào các phần tử HTML bằng 3 cách:
-   Inline - dùng các thuộc tính về kiểu cách ([Style](https://quantrimang.com/thuoc-tinh-style-trong-html-149938)) trong các phần tử HTML 
-   Internal - sử dụng phần tử `<style>` trong [phần \<head>](https://quantrimang.com/cach-dung-css-de-tao-kieu-cach-cho-trang-html-152889)    
-   External - dùng tập tin CSS riêng

**1.  Inline CSS:**
CSS nội tuyến (`inline`) được sử dụng để áp dụng CSS trên một dòng hoặc một phần tử. Để sử dụng CSS nội tuyến, bạn phải sử dụng thuộc tính `style` cho thẻ có liên quan. Ví dụ dưới đây sẽ tạo màu cho phần tử `<h1>` thành màu xanh.

![](https://lh5.googleusercontent.com/yJhmxqyAtHdhYEO6y4P1K0f12pbk2ZJQspJ3XAAegwaayzRsQiidTunM3nXFdCACTCIhY0nHAM5L-1AlPlVEYwu4t2PfnRMShmnr9fI8hGHUrgNRXhLKCnPZK0T9-0WkxiApOhOtSwJF-HFhaQ)

![](https://lh6.googleusercontent.com/t-VeeS8RvSXz6L7a1jioFgnz_CyXoekx4WFzQQuFmWKpuAls1VYghqRxM3jEUSAYEXxnM4d1MdWRu6zTPByXrvUoR3muPL-_enI8UCjiuxzEewc99A-EeR0vjyH6GqWWTIlsmyC05RaKDtrXTA)

Cú pháp:

![](https://lh3.googleusercontent.com/YtUdwJ3IOqoh2eeByjyMPGEsvT0l3JFMmY_M8F8mWn6RCjvCLmob8QLtRiCkD2dHw-UeL1ZLHZx5_ibGSowNjoQ4WJPiwxZIou-w5dUu1bJThcBFxcgpwwdEZNT7oitHXBEpM15iRSSQLdROSw)

-   dactinh là đặc tính (property) của CSS
-   giatri là giá trị của CSS
    

Một số style khác:
-   background-color    
-   font
-   font-size  
-   font-family: font chữ
-   border: đường viền xung quanh phần tử HTML
    
-   padding: khoảng trống giữa văn bản và đường viền
    
	
	![](https://lh5.googleusercontent.com/XIm-qxD4QtFS4Ug-Yx3Cg5Q142ptkkIQgymbSADU2RtL6biIp0zYPwxQbanxqW7BETsMa15F5nsEXlEVTbkIXobzSa8Kb6piH6hr4moenxSS1kTARdmfCAXzhrfvrEO5GCdJHP99SD2bokfs8Q)

-   text-align: căn chỉnh văn bản cho phần tử trong HTML
    

	![](https://lh5.googleusercontent.com/D1UMgzMHSTHJxJNZ54SWOK3R3ytPObjg1SyvtRE2YXjkhbTtyMHtLzA87VlWGZCumMCnk13tIz6ChPn4eae5UpPoSiCOCBasVwtplYvZHp-a9fg-_U4oOJWt_-KQSuKRTLlwswLoYJcRy3IsKA)

	![](https://lh5.googleusercontent.com/YEUkyQFg4FVlGrgfJFTNM1ESrraq7B9YQfZ4YAk6Pymtw_w5LCD_is-Ez6MOvR8kJ5PkZZp7CGaa9wN8YD8hl9V78KkhJKuk_-9FFLKfsTCDQO5ebLl7mSlOZkxg4un6peLsifMq3oVeDSVjWg)

-   ….
    

  

**2.  Internal CSS:**
Internal CSS được sử dụng để áp dụng CSS trên một tài liệu hoặc trang. Nó có thể ảnh hưởng đến tất cả các yếu tố của trang. Nó được viết bên trong thẻ `<style>` trong phần `<head>` của html.

![](https://lh5.googleusercontent.com/FZrVUOGl8LRf21ZsJTvIPcji8SSkyp8-tnL8qp_EjI9o4e4iGJnlKqjy0j1qFBXfQvv2d9CM4jNk8FKfJhf6AluKpA0KEmX5LXA_YlnFTia2nTcGYyUPDc3FMAzsBVGaVhWyq_zndZFavv2gjw)

![](https://lh4.googleusercontent.com/ES2H5Oh65YOvAzFK12xWRqJ-ebkK8ScG7TqAislNvL3s0UuwRy032GvLoOBdpPajjP-Evlyp7fFy5DUWvNuymZJqMBjSkOqyfnPyPmdlnmvH1JwJUSpZA0dXCpMGfxlqGeLFPSmgLmcbAccmVw)

***Thuộc tính id:***

Thuộc tính id được dùng để xác định một kiểu cách nhất định cho một phần tử đặc biệt nào đó.

![](https://lh6.googleusercontent.com/wkhSMWj8VE4gs0jek0lDHUEE9kMjGrbTyGPYX_CWyVxB7y2Dr4MJ6H6fXZ9VqkIt2q9tL31v4Iah4T4MEijAI_pD0dWKV6s-HslPWh02QuwZwWonZA9dX3GkOP501GXwTo1rEyvbRII77mtXbw)

Sau đó xác định kiểu cách cho phần tử này bằng id:

![](https://lh4.googleusercontent.com/TCPFwhKlW_gFRclILRWzgfHR15aPVJz1klAqQ90BvcnD7q1D0Hr8hj4x_1gW--GbHM9mN5paYxi7SUf7Ezl-wAGfkb0T5AuqM0Yw06zjNKMOyYI9JhiPW9K0uot_tWHgavqesx91Nye8vIrBIQ)

> ***Lưu ý:*** bắt đầu bằng dấu # và id phải là duy nhất trong 1 trang

***Thuộc tính class:***

Khi cần định nghĩa một kiểu cách nhất định cho một loại đặc biệt nào đó của phần tử, dùng thuộc tính class.

![](https://lh3.googleusercontent.com/_4pueiI5kiBFjx9yJAWf_wWYg_eIbKkojgyVdPzPNS2wYxqDSJ6Cu1ntJpLa_F7jxuU5JV1GcAemW1YwwjcnAviqQcKcCmpau7C4WnZVm3VSFFFS9jfAcZE9ntt0XWsUNeu3mqBEP_Y_s65oWw)

sau đó định nghĩa kiểu cách cho phần tử bằng lớp riêng.

![](https://lh3.googleusercontent.com/GxpBfARcgk7w4rkrQxvsvIoHSJH5-zKvv4Di4M4LSOL-7RREHzxwk7vYtfBTKuWH8uGvr3C8A4yakA4oB4yd8PZHrC65KJtsqlmC2mmZ1s6Emmt85jXjN2pC3PyLptUkadx3dbEJI8JwHQ7k9Q)

> ***Lưu ý:*** có thể có nhiều class cùng tên trong 1 trang

***Phân biệt id và class:***

-   ID dùng một lần: các thẻ html chỉ xuất hiện một lần sẽ được gắn id.    
-   Class dùng nhiều lần: các thẻ giống nhau sẽ dùng class.
    

> - ***Khai báo:*** `tên thẻ . tên class` (tên class không bắt đầu bằng số)
>`p.doan{color:#FFFFFF}` -> định dạng cho tất cả thẻ p có khai báo `class=”doan”`
> - ***Khai báo:*** `.tên class`
>Nếu khai báo `.doan{color:#FFFFFF}` -> định dạng cho bất kỳ thẻ nào có khao báo `class=”doan”`.

-   Trong file css: dùng dấu chấm cho class và dấu # cho id
    

  
  

**3.  External CSS:**
External CSS được sử dụng để áp dụng CSS trên nhiều trang. Ở đây, chúng ta viết tất cả các mã CSS trong một tệp css, (đặt phần mở rộng là css) sau đó dùng thẻ link đặt ở phần head để nạp vào theo cú pháp, ví dụ file ngoài là `demo.css`

![](https://lh4.googleusercontent.com/I_qphFw--FSUATc5X2RS3Ff_sodKE8gz0G3W1CoRww-9zQJ-akDGQjixJeTbdOwLYNyy_QvXqn-nv5tRXcdfY15SBE_2qDMgeqAQQKmceN0Ua0eeHDgylyImFLzjlENogVv_YiWbAU3FLbPZeQ)

Trong file `demo.css` viết nội dung CSS (không có thẻ `style`), ví dụ:

![](https://lh6.googleusercontent.com/FWsgOAyidJesXYVbTa0HuTRzyyPbIImzmuZUbZWzcB0pv8D3d-eywkLgmnFEJFmaZaDWmfWfJqrGhFf48rWNgknWx5AmltpVVdiAxh8pMbuai45n6YvTl_cjKsFimvcIQ2lLJ6ga6Kuqao-tjg)

Thuộc tính `href` trỏ đến địa chỉ URL của file CSS, ở ví dụ trên là địa chỉ dạng tương đối vì file CSS và HTML cùng thư mục.

>#### Quy tắc ghi đè CSS:
>
>-   Bất kỳ inline CSS (CSS nội tuyến) nào cũng có ưu tiên cao nhất. Vì vậy, nó sẽ ghi đè bất kỳ quy tắc được định nghĩa trong thẻ `<style> ... </ style>` *(internal)* hoặc các quy tắc được định nghĩa trong bất kỳ tập tin CSS bên ngoài *(external CSS)*.
>    
>-   Bất kỳ quy tắc nào được định nghĩa trong thẻ `<style> ... </ style>` sẽ ghi đè các quy tắc được định nghĩa trong bất kỳ tập tin CSS bên ngoài.
>    
>-   Bất kỳ quy tắc nào được định nghĩa trong tập tin CSS bên ngoài đều có mức độ ưu tiên thấp nhất và các quy tắc được xác định trong tệp này sẽ chỉ được áp dụng khi hai quy tắc trên không áp dụng.
