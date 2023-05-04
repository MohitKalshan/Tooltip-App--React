import React , { useState } from "react";
import Tooltip from "./component/Tooltip";
import './App.css';

function App() {
  const [position, setPosition] = useState("");
  console.log("this is position: ",position)
  return (
    <div className='container'>
      <select
        className="form-select"
        id="inputGroupSelect01"
        onChange={(e) => setPosition(e.target.value)}
      >
        <option value="top" defaultValue={true}>Top</option>
        <option value="left">Left</option>
        <option value="bottom">Bottom</option>
        <option value="right">Right</option>
      </select>
      <Tooltip position={position}/>
    </div>
  );
}

export default App;
