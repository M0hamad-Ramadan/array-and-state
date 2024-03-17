import { useState } from "react";

function App() {
  const [allDevices, setNewDevice] = useState([
    { name: "iphone" },
    { name: "sumsang" },
    { name: "windows" },
    { name: "mac" },
  ]);

  function deleteItem(e) {

    let itemId = e.target.id.slice(-1);

    let arr = [...allDevices];

    arr[itemId].name = '';

    setNewDevice(arr);
  }

  const list = allDevices.map((device,i) => {
    if(device.name === ''){return ""}
    return (
      <li key={i}>
        {device.name}{" "}
        <button id={`dBtn${i}`} onClick={deleteItem}>
          X
        </button>
      </li>
    );
  });

  function addDevice(e) {
    e.preventDefault();
    setNewDevice([...allDevices, { name: e.target[0].value }]);
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
