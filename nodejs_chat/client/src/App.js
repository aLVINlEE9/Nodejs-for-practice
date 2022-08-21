import './App.css';
import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");
  var ws = new WebSocket('ws://localhost:8080/ws');
  ws.onmessage = (event) => {
    console.log(event.data);
    setMsg(event.data);
  }
  return (
    <div className="App">
      {msg}
    </div>
  );
}

export default App;
