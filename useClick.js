import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  // useRef를 통해 HTML에 ref 속성을 준 태그와 연결
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // useEffect는 mount, update에서 동작 따라서 매번 이벤트 리스너를 추가해준다.
    // 따라서 이벤트 리스너를 정리하기 위해 useEffect에서 반환 함수를 준다.
    // 반환된 함수는 componentWillUnmount 일때 동작함으로 리스너 삭제 함수를 넣어준다.
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []); // dependency가 없음으로 update는 고려x, mount에서만 동작
  return element;
};

export default function App() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}
