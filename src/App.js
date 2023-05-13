import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import Child1 from "./Child1";
import Child2 from "./Child2";

function App() {
  const [childData, setchildData] = useState("");

  console.log(childData);

  return (
    <div className="App">
      <Child1 passData={setchildData} />
      <Child2 first={childData.first} second={childData.second} />
    </div>
  );
}

export default App;
