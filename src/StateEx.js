// 이름 , 회사, 주소, 이메일을 입력 받아서 제출 버튼을 누르면 정보를 화면에 표시하기
// onchange, onClick, useState

import { useState } from "react";

const NameCardEx = () => {
  const [from, setFrom] = useState({
    name: "",
    company: "",
    addr: "",
    email: "",
  });

  const [sumit, setSumit] = useState(false);

  const handleChange = (key, value) => {
    setFrom({ ...from, [key]: value }); // ES6에서 부터 지원하는 문법은 계산된 속성명
  };

  const handleSubmit = () => {
    setSumit(true);
  };

  return (
    <>
      <input
        type="text"
        placeholder="이름 입력"
        onChange={(e) => handleChange("name", e.target.value)}
        value={from.name}
      />
      <br />

      <input
        type="text"
        placeholder="회사 입력"
        onChange={(e) => handleChange("company", e.target.value)}
        value={from.company}
      />
      <br />

      <input
        type="text"
        placeholder="주소 입력"
        onChange={(e) => handleChange("addr", e.target.value)}
        value={from.addr}
      />
      <br />
      <input
        type="text"
        placeholder="이메일 입력"
        onChange={(e) => handleChange("email", e.target.value)}
        value={from.email}
      />
      <br />
      <button onClick={handleSubmit}>제출</button>

      {sumit && (
        <>
          <h3>명함 정보</h3>
          <p>이름: {from.name}</p>
          <p>회사: {from.company}</p>
          <p>주소: {from.addr}</p>
          <p>이메일: {from.email}</p>
        </>
      )}
    </>
  );
};
export default NameCardEx;
