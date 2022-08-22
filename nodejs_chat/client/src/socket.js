let MY_USER_ID = "";

const connection = () => {
  const ws = new WebSocket('ws://localhost:8080/ws');
  ws.onmessage = (event) => {
    let message = JSON.parse(event.data);
    if (message.code === "my_user_id") {
      MY_USER_ID = message.msg;
      console.log(ws);
      alert("user_id 받음: " + MY_USER_ID);
    }
  }
};

export default connection;