import { useState } from "react";

function App() {
  const devices = ["iphone", "sumsang", "windows", "mac"];

  const [currentDevice, setNewDevice] = useState(devices); 

  const list = currentDevice.map((device, i) => { 
    return <li key={i}>{device}</li>;
  });

  function addDevice() {
    let arr = [...currentDevice]; // get copy of current state 
    arr.push("hello"); // update the copy 
    setNewDevice(arr); // update state
  }

  return (
    <div className="App">
      <ul> {list} </ul>

      <button onClick={addDevice}>changeDevice</button>
    </div>
  );
}

export default App;