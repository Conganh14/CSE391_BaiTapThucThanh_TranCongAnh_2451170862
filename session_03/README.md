# BTTH03 - HTML, CSS, JavaScript DOM & Xử lý sự kiện

## 📋 Nội dung

Bài tập thực hành gồm 2 bài chính:

### **Bài 1: Quản lý sinh viên**

- Tạo ứng dụng quản lý thông tin sinh viên
- Thực hiện CRUD (Create, Read, Update, Delete) đầy đủ
- Lưu dữ liệu bằng localStorage
- Hiển thị thống kê tổng số sinh viên và điểm trung bình

**Chức năng:**

- ✅ Thêm sinh viên mới
- ✅ Hiển thị danh sách sinh viên dạng bảng
- ✅ Sửa thông tin sinh viên
- ✅ Xóa sinh viên (có xác nhận)
- ✅ Cập nhật giao diện ngay sau mỗi thao tác
- ✅ Thống kê tổng số và điểm trung bình

**Các trường thông tin:**

- Mã sinh viên
- Họ và tên
- Ngày sinh
- Lớp học
- Điểm trung bình
- Email

---

### **Bài 2: Quản lý công việc cá nhân**

- Tạo ứng dụng quản lý công việc (Todo App)
- Thực hiện CRUD đầy đủ
- Lưu dữ liệu bằng localStorage
- Hiển thị thống kê: tổng số, đã hoàn thành, chưa hoàn thành

**Chức năng:**

- ✅ Thêm công việc mới
- ✅ Hiển thị danh sách công việc dạng card
- ✅ Sửa công việc
- ✅ Xóa công việc (có xác nhận)
- ✅ Đánh dấu công việc đã hoàn thành
- ✅ Thống kê số lượng công việc
- ✅ Thông báo khi thao tác thành công

**Các trường thông tin:**

- Tiêu đề công việc
- Mô tả chi tiết
- Hạn hoàn thành (deadline)
- Mức ưu tiên (Thấp, Trung bình, Cao)
- Trạng thái hoàn thành

---

## 🚀 Cách sử dụng

### Cấu trúc thư mục

```
session_03/
├── bai1_quan_ly_sinh_vien/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── bai2_quan_ly_cong_viec/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
```

### Chạy ứng dụng

1. **Bài 1:** Mở file `bai1_quan_ly_sinh_vien/index.html` trong trình duyệt
2. **Bài 2:** Mở file `bai2_quan_ly_cong_viec/index.html` trong trình duyệt

> Hoặc sử dụng Live Server trong VS Code (chuột phải → Open with Live Server)

---

## 🎯 Kiến thức áp dụng

### DOM Manipulation

- `getElementById()` - Lấy phần tử theo ID
- `querySelector()` / `querySelectorAll()` - Lấy phần tử theo CSS selector
- `innerHTML` / `textContent` - Thay đổi nội dung
- `classList.add()` / `classList.remove()` - Quản lý class CSS

### Xử lý sự kiện

- `addEventListener()` - Gắn sự kiện cho phần tử
- Sự kiện `click` - Xử lý khi nhấn nút
- Sự kiện `submit` - Xử lý gửi form
- Sự kiện `change` - Xử lý thay đổi checkbox

### JavaScript Cơ bản

- **Mảng (Array):** `push()`, `splice()`, `filter()`, `map()`
- **Object:** Lưu dữ liệu sinh viên/công việc
- **String methods:** `trim()`, `toUpperCase()`, etc.
- **localStorage:** `setItem()`, `getItem()`, JSON

### Form & Validation

- Lấy dữ liệu từ form input
- Kiểm tra dữ liệu trước khi lưu
- Reset form sau khi submit

---

## 💾 Lưu trữ dữ liệu

Cả 2 bài đều sử dụng **localStorage** để lưu dữ liệu:

- Dữ liệu được lưu vào browser storage
- Dữ liệu vẫn tồn tại khi đóng/mở lại trang
- Để xóa dữ liệu: F12 → Application → Local Storage → xóa key

---

## 🎨 Giao diện

- **Bài 1:** Gradient xanh tím, bảng dữ liệu, form modal
- **Bài 2:** Gradient hồng cam, card layout, form modal
- Đều responsive với điện thoại (mobile-friendly)
- Có thông báo thành công/lỗi
- Có thống kê hiển thị real-time

---

## ✅ Checklist hoàn thành

### Bài 1 - Quản lý sinh viên:

- [ ] Thêm sinh viên thành công
- [ ] Hiển thị đúng danh sách trong bảng
- [ ] Sửa thông tin sinh viên được lưu lại
- [ ] Xóa sinh viên có xác nhận
- [ ] Thống kê cập nhật đúng
- [ ] Dữ liệu lưu vào localStorage

### Bài 2 - Quản lý công việc:

- [ ] Thêm công việc thành công
- [ ] Hiển thị đúng danh sách công việc
- [ ] Sửa công việc được lưu lại
- [ ] Xóa công việc có xác nhận
- [ ] Đánh dấu hoàn thành/chưa hoàn thành
- [ ] Thống kê cập nhật đúng
- [ ] Dữ liệu lưu vào localStorage

---

## 🐛 Troubleshooting

### Dữ liệu không lưu được

- Kiểm tra console (F12) xem có lỗi không
- Xoá localStorage và reload trang

### Form không gửi được

- Kiểm tra các input có required không
- Xem console xem có lỗi JavaScript không

### Giao diện bị lỗi

- Xoá cache: Ctrl+Shift+Delete
- Reload trang: Ctrl+F5

---

## 📝 Bài tập mở rộng (Homework)

**Thêm Validation cho form:**

- Không để trống các trường bắt buộc
- Email phải đúng định dạng
- Ngày sinh phải hợp lệ
- Điểm phải nằm trong khoảng 0-10
- Hiển thị lỗi ngay dưới ô nhập liệu

---

## 👨‍💻 Tác giả

BTTH03 - CSE391 K66 - Đại học Thủy Lợi

---

**Happy Coding! 🎉**
