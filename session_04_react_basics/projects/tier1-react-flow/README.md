# Tier 1 - React Flow

Project demo cho bài Tier 1: hiểu luồng render của React.

## Chạy project

1. Mở terminal tại `session_04_react_basics/projects/tier1-react-flow`
2. Chạy `npm install`
3. Chạy `npm run dev`
4. Mở trình duyệt theo địa chỉ Vite cung cấp

## Nội dung

- `src/App.jsx`: chứa các ví dụ `LifecycleDemo`, `BadCounter`, `GoodCounter`, `FlowDemo`
- `src/main.jsx`: điểm vào của ứng dụng
- `src/style.css`: kiểu dáng đơn giản cho demo

## Hướng dẫn

- Mở Console (F12) để quan sát log render
- Nhấn nút trong `BadCounter` và `GoodCounter` để so sánh hành vi
- Nhấn nút `Bước tiếp theo` trong `FlowDemo` để thấy React re-render khi state thay đổi
