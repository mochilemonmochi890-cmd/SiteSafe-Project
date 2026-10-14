# 🛡️ SiteSafe - Hệ Thống Quản Lý An Toàn Công Trường

## 📌 Thông Tin Dự Án
* **Tên đề tài:** Hệ thống quản lý và báo cáo an toàn lao động công trường - SiteSafe
* **Tên trang thực hiện:** Chi tiết báo cáo và Phê duyệt mối nguy 
* **Sinh viên thực hiện:** Nguyễn Ngọc Phương Thanh
* **Mã sinh viên:** 2551060688
* **Lớp:** CSE122 67CNTT1

---

## 🎯 Mục Đích Của Trang
Trang web được thiết kế dành riêng cho **Cán bộ An toàn (HSE)** và **Ban quản lý công trường** nhằm:
* Tiếp nhận và quản lý chi tiết thông tin các báo cáo mối nguy từ hiện trường gửi về.
* Tham khảo đánh giá phân tích rủi ro tự động hỗ trợ từ công nghệ AI.
* Phân công giao việc khắc phục sự cố cho các đội thi công liên quan và thực hiện duyệt/từ chối báo cáo.

---

## ✨ Các Chức Năng Chính
1. **Quản lý & Xem chi tiết thông tin hiện trường:** Hiển thị hình ảnh thực tế, vị trí phát hiện, người báo cáo và thời gian ghi nhận.
2. **Xem ảnh phóng to (Modal Image):** Tương tác mở/đóng Modal lớp phủ để soi rõ hình ảnh sự cố hiện trường (hỗ trợ phím `Esc` và click ngoài khung để đóng).
3. **Phân tích rủi ro AI & Tương tác cập nhật trạng thái:** Cho phép cán bộ an toàn chấp nhận gợi ý từ AI hoặc chỉnh sửa thủ công mức độ rủi ro.
4. **Form phân công giao việc:** Cho phép chọn người phụ trách, thiết lập hạn chót, chọn mức ưu tiên và nhập yêu cầu khắc phục.
5. **Thanh duyệt thời gian thực:** Tự động đồng bộ và hiển thị mức rủi ro, người được giao việc và hạn chót theo các thao tác trên form.
6. **Hệ thống thông báo Toast:** Phản hồi trực quan cho người dùng khi bấm Phê duyệt, Từ chối hoặc Cập nhật đánh giá rủi ro.

---

## 🛠️ Công Nghệ Sử Dụng
* **HTML:** Cấu trúc theo chuẩn (Semantic tags: `<aside>`, `<main>`, `<article>`, `<nav>`, `<figure>`, `<dl>`, `<dialog>`,...) giúp tối ưu Accessibility.
* **CSS:** Bố cục kết hợp **Flexbox** & **CSS Grid**, tổ chức hệ thống màu sắc chỉn chu và thiết lập **Responsive** linh hoạt cho các thiết bị Desktop, Tablet và Mobile.
* **JavaScript:** Xử lý tương tác DOM, bắt sự kiện người dùng, tính toán định dạng ngày giờ và quản lý Toast Notification động.

---

## 🔗 Các Liên Kết Dự Án
* **Link Figma Design:** https://www.figma.com/design/kmz9k0nSOrJpsAJog4IEFx/CSE122_SiteSafe?node-id=0-1&t=TtNlpzuS3pYKFoeF-1
* **Link Video Demo (3 phút):** https://youtu.be/GLpYXkojFnY
* **Link GitHub Repository:** https://github.com/mochilemonmochi890-cmd/SiteSafe-Project
