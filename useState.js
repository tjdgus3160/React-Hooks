import React, { useState } from "react";

export default function App() {
  const [item, setItem] = useState(1);
  // 초기값 인자로 전달, 상태,상태변환 함수 배열로 반환

  const incrementItem = () => setItem(item+1);
  const decrementItem = () => setItem(item-1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>decrement</button>
    </div>
  );
}