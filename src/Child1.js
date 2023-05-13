import React, { useState } from "react";
import "./Child1.css";

const Child1 = (props) => {
  const [first, setfirst] = useState(0);
  const [second, setsecond] = useState(0);
  const [result, setresult] = useState(0);

  const sendDataToParent = () => {
    const newData = { first, second };
    props.passData(newData);
    return newData;
  };

  const handleData = async (e) => {
    await setresult(Number(first) + Number(second));
    sendDataToParent();
  };

  return (
    <div className="main">
      <h3>Child-1</h3>
      <form>
        <div>
          <label for="first">First</label>
          <input
            id="first"
            value={first}
            onChange={(e) => setfirst(e.target.value)}
            onKeyUp={handleData}
            type="number"
            name="first"
          />
        </div>
        <div>
          <label for="second">Second</label>
          <input
            id="second"
            type="number"
            onChange={(e) => setsecond(e.target.value)}
            onKeyUp={handleData}
            value={second}
            name="second"
          />
        </div>
      </form>
      <div>
        <span name="result">Addition: {result}</span>
      </div>
    </div>
  );
};

export default Child1;
