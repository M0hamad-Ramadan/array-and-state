import { useState } from "react";

let nextId = 5;
function App() {
  const [newDevice, setNewDevice] = useState("");
  const [allDevices, setNewDevices] = useState([
    { id: "1", name: "iphone" },
    { id: "2", name: "sumsang" },
    { id: "3", name: "windows" },
    { id: "4", name: "mac" },
  ]);

  function addDevice() {
    setNewDevices([...allDevices, { id: nextId, name: newDevice }]);
    nextId = nextId + 1;
  }

  function deleteDevice(deviceId) {
    
    let newDevices =allDevices.filter((device)=>{
      return device.id !== deviceId;
    });
    
    setNewDevices(newDevices);
  }

  const list = allDevices.map((device) => {
    return (
      <li key={device.id}>
        {device.name}{" "}
        <button
          onClick={() => {
            deleteDevice(device.id);
          }}>
          X
        </button>
      </li>
    );
  });

  return (
    <div className="App">
      <ul> {list} </ul>

      <input
        placeholder="device name....."
        value={newDevice}
        onChange={(e) => {
          setNewDevice(e.target.value);
        }}
      />
      <button onClick={addDevice}>add</button>
    </div>
  );
}

export default App;
