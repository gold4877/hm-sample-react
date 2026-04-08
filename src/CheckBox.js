import { useState } from "react";

const CheckBox = () => {
  const [val, setVal] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setVal([...val, value]);
    } else {
      setVal(val.filter((e) => e !== value)); // 체크가 안된 값을 제외해서 새로운 별을 만들어서 set
    }
  };

  return (
    <>
      <p>체크박스</p>
      <div>
        <label htmlFor="apple">
          <input
            type="radio"
            name="fruits"
            id="apple"
            value="apple"
            onChange={handleChange}
          />
          사과
        </label>
        <br />
        <label htmlFor="orange">
          <input
            type="radio"
            name="fruits"
            id="orange"
            value="orange"
            onChange={handleChange}
          />
          오렌지
        </label>
        <br />
        <label htmlFor="strawberry">
          <input
            type="radio"
            name="fruits"
            id="strawberry"
            value="strawberry"
            onChange={handleChange}
          />
          딸기
        </label>
        <br />
      </div>
    </>
  );
};

export default CheckBox;
