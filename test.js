import { useState } from "react";

function App() {
  const [newDevice, setNewDevice] = useState("");
  const [allDevices, setNewDevices] = useState([
    "iphone",
    "sumsang",
    "windows",
    "mac",
  ]);

  const list = allDevices.map((device, i) => {
    return <li key={i}>{device}</li>;
  });

  function inpHandle(e) {
    setNewDevice(e.target.value);
  }

  function addDevice(e) {
    e.preventDefault();
    setNewDevices([...allDevices, newDevice]);
  }

  return (
    <div className="App">
      <ul> {list} </ul>
      <form onSubmit={addDevice}>
        <input
          placeholder="device name....."
          value={newDevice}
          onChange={inpHandle}
        />
        <button>add</button>
      </form>
    </div>
  );
}

export default App;
