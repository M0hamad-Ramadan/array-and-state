import { useState } from "react";

function App() {

  const [allDevices, setNewDevice] = useState(["iphone", "sumsang", "windows", "mac"]);

  const list = allDevices.map((device, i) => {
    return <li key={i}>{device}</li>;
  });

  function addDevice(e) {
    e.preventDefault();
    setNewDevice([...allDevices, e.target[0].value]);
  }

  return (
    <div className="App">
      <ul> {list} </ul>
      <form onSubmit={addDevice}>
        <input placeholder="device name....." />
        <button>add</button>
      </form>
    </div>
  );
}

export default App;
