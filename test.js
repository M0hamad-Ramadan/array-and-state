import { useState } from "react";

function App() {
  const devices = ["iphone", "sumsang", "windows", "mac"];

  const [currentDevices, setNewDevice] = useState(devices);

  const list = currentDevices.map((device, i) => {
    return <li key={i}>{device}</li>;
  });

  function addDevice(e) {
    e.preventDefault();
    setNewDevice([...currentDevices, e.target[0].value]);
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
