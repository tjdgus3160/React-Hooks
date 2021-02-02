import React, { useEffect, useState } from "react";

export default function App() {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]);
  // componentDidMount + componentWillUpdate
  // effect, dependency(배열:적용할 대상들) 인자로 전달
  // dependency가 없을 경우 모든 것에 반영
  // 반환값 함수 => componentWillUnmount
  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}
