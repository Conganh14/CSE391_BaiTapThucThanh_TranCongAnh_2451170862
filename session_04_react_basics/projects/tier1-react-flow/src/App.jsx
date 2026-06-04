import { useState } from "react";

function LifecycleDemo() {
  console.log("1️⃣ Component được gọi!");

  return (
    <div className="card">
      <h2>Lifecycle Demo</h2>
      <p>Mở Console (F12) để xem log.</p>
      <p>Component này chỉ render MỘT lần khi trang tải lại.</p>
    </div>
  );
}

function BadCounter() {
  let count = 0;

  function handleClick() {
    count = count + 1;
    console.log("Count:", count);
  }

  return (
    <div className="card">
      <h2>❌ Counter "tệ" (dùng biến thường)</h2>
      <p>Bộ đếm: {count}</p>
      <button onClick={handleClick}>Tăng (+1)</button>
      <p className="hint red">
        ⚠️ Nhấn nút → Console tăng, nhưng số trên màn hình KHÔNG đổi!
      </p>
    </div>
  );
}

function GoodCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="card">
      <h2>✅ Counter "tốt" (dùng useState)</h2>
      <p>Bộ đếm: {count}</p>
      <button onClick={handleClick}>Tăng (+1)</button>
      <p className="hint green">✅ Nhấn nút → Số trên màn hình CẬP NHẬT!</p>
    </div>
  );
}

function FlowDemo() {
  console.log("🔄 Component render!");
  const [step, setStep] = useState(1);

  return (
    <div className="card">
      <h2>Flow Demo</h2>
      <p>Bước hiện tại: {step}</p>
      <div className="button-row">
        <button onClick={() => setStep(step + 1)}>Bước tiếp theo →</button>
        <button onClick={() => setStep(1)}>Quay lại đầu</button>
      </div>
      <div className="panel">
        {step === 1 && <p>👋 Bước 1: Xin chào!</p>}
        {step === 2 && <p>📖 Bước 2: Đang học React</p>}
        {step === 3 && <p>🎯 Bước 3: Hiểu useState</p>}
        {step === 4 && <p>🎉 Bước 4: Hoàn thành!</p>}
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="app-container">
      <header>
        <h1>Tier 1 — Hiểu luồng React</h1>
        <p>
          Học cách React render lần đầu, khi nào re-render và vì sao UI cập
          nhật.
        </p>
      </header>

      <section className="grid">
        <LifecycleDemo />
        <BadCounter />
        <GoodCounter />
        <FlowDemo />
      </section>
    </main>
  );
}

export default App;
