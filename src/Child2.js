import React, { useState } from "react";

import "./Child1.css";
const Child2 = (props) => {
  const [first, setfirst] = useState(0);
  const [second, setsecond] = useState(0);
  const [third, setthird] = useState(0);

  const [result, setresult] = useState(0);
  const [result1, setresult1] = useState(0);
  const [result2, setresult2] = useState(0);

  const handleData = async (e) => {
    await setresult(Number(props.first) + Number(first));
  };

  const handleData1 = async (e) => {
    await setresult1(Number(props.second) + Number(second));
  };

  const handleData2 = async (e) => {
    await setresult2(
      Number(props.first) + Number(props.second) + Number(third)
    );
  };

  return (
    <div className="main">
      <h3>Child-2</h3>
      <form>
        <div>
          {props.first}+
          <input
            id="first"
            value={first}
            onChange={(e) => setfirst(e.target.value)}
            onKeyUp={handleData}
            type="number"
          />
          ={result}
        </div>
        <div>
          {props.second}+{" "}
          <input
            id="second"
            value={second}
            onChange={(e) => setsecond(e.target.value)}
            onKeyUp={handleData1}
            type="number"
          />
          ={result1}
        </div>
        <div>
          {Number(props.first) + Number(props.second)}+{" "}
          <input
            id="second"
            onChange={(e) => setthird(e.target.value)}
            onKeyUp={handleData2}
            value={third}
            type="number"
          />
          ={result2}
        </div>
      </form>
      <div>Addition : {result}</div>
    </div>
  );
};

export default Child2;
