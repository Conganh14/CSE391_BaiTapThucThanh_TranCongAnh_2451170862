function UserProfile() {
  return (
    <div className="card profile">
      <h2>Hồ sơ cá nhân</h2>
      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" alt="Ảnh đại diện" />
      <table>
        <tbody>
          <tr>
            <td>Họ tên:</td>
            <td>Minh</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>minh@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ProductInfo() {
  return (
    <div className="card product">
      <h2>iPhone 15</h2>
      <p className="price">25.000.000đ</p>
      <ul>
        <li>Màn hình: 6.1 inch</li>
        <li>Camera: 48MP</li>
        <li>Pin: 3349 mAh</li>
      </ul>
      <button type="button">Mua ngay</button>
    </div>
  );
}

function App() {
  return (
    <main className="app-container">
      <header>
        <h1>React Tier 0 — Component đầu tiên</h1>
        <p>Trong bài này bạn học cách viết component bằng JSX và xuất component từ file.</p>
      </header>

      <section className="cards">
        <UserProfile />
        <ProductInfo />
      </section>
    </main>
  );
}

export default App;
