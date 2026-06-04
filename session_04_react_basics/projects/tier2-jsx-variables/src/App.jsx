function SimpleVariables() {
  const ten = "Nguyễn Văn Minh";
  const tuoi = 20;
  const laSinhVien = true;
  const monHoc = ["HTML", "CSS", "JS", "React"];
  const gio = new Date().getHours();
  const chao =
    gio < 12
      ? "Chào buổi sáng"
      : gio < 18
        ? "Chào buổi chiều"
        : "Chào buổi tối";
  const canNang = 62;
  const chieuCao = 1.72;
  const bmi = (canNang / (chieuCao * chieuCao)).toFixed(1);

  return (
    <div className="card">
      <h2>Simple Variables</h2>
      <p>Xin chào {ten}!</p>
      <p>Tuổi: {tuoi}</p>
      <p>Năm sau: {tuoi + 1}</p>
      <p>Sinh viên: {laSinhVien ? "Có" : "Không"}</p>
      <p>
        {chao}, giờ hiện tại là {gio}:00
      </p>
      <p>BMI: {bmi}</p>
      <h3>Môn học yêu thích</h3>
      <p>{monHoc.join(", ")}</p>
    </div>
  );
}

function TernaryDemo() {
  const isLoggedIn = true;
  const score = 8.5;

  return (
    <div className="card">
      <h2>Ternary Demo</h2>
      <p>{isLoggedIn ? "Chào mừng bạn!" : "Vui lòng đăng nhập"}</p>
      <p>Kết quả: {score >= 5 ? "Đậu" : "Rớt"}</p>
      <p>
        Xếp loại:{" "}
        {score >= 9
          ? "Xuất sắc"
          : score >= 8
            ? "Giỏi"
            : score >= 7
              ? "Khá"
              : score >= 5
                ? "Trung bình"
                : "Yếu"}
      </p>
    </div>
  );
}

function AndDemo() {
  const hasNotification = true;
  const notificationCount = 5;
  const isOnline = false;
  const stock = 0;

  return (
    <div className="card">
      <h2>And Demo</h2>
      {hasNotification && (
        <div className="alert">Bạn có {notificationCount} thông báo mới!</div>
      )}
      {!hasNotification && <p>Không có thông báo</p>}
      <p>Trạng thái: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
      <p>{stock === 0 ? "Hết hàng" : `Còn lại ${stock} sản phẩm`}</p>
    </div>
  );
}

function ListRendering() {
  const fruits = ["Táo", "Chuối", "Cam", "Nho"];
  const students = [
    { id: 1, name: "Minh", age: 20 },
    { id: 2, name: "An", age: 21 },
    { id: 3, name: "Linh", age: 19 },
  ];
  const products = [
    { id: 1, name: "Áo thun", price: 150000 },
    { id: 2, name: "Giày thể thao", price: 1200000 },
    { id: 3, name: "Nón", price: 180000 },
  ];
  const total = products.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="card">
      <h2>List Rendering</h2>
      <h3>Trái cây</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <h3>Danh sách sinh viên</h3>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Tuổi</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Sản phẩm</h3>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            className={product.price > 1000000 ? "highlight" : ""}
          >
            {product.name} - {product.price.toLocaleString()}đ
          </li>
        ))}
      </ul>
      <p>Tổng giá: {total.toLocaleString()}đ</p>
    </div>
  );
}

function App() {
  return (
    <main className="app-container">
      <header>
        <h1>Tier 2 — Biến trong JSX</h1>
        <p>Học cách dùng biến, điều kiện và danh sách trong JSX.</p>
      </header>
      <section className="grid">
        <SimpleVariables />
        <TernaryDemo />
        <AndDemo />
        <ListRendering />
      </section>
    </main>
  );
}

export default App;
